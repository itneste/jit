
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { ValidationService as ValidationService1 } from '@farris/command-services';
import { EndEditService as EndEditService1 } from '@farris/command-services';
import { CardDataService as CardDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'Save1'
})
export class Save1Handler extends CommandHandler {
    constructor(
        public _ValidationService1: ValidationService1,
        public _EndEditService1: EndEditService1,
        public _CardDataService1: CardDataService1,
        public _StateMachineService1: StateMachineService1
    ) {
        super();
    }

    schedule() {
        this.addTask('endEdit', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._EndEditService1, 'endEdit', args, context);
        });

        this.addTask('validateCurrentRow', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ValidationService1, 'validateCurrentRow', args, context);
        });

        this.addTask('save', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/successMsg}'
                    ];
            return this.invoke(this._CardDataService1, 'save', args, context);
        });

        this.addTask('update', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._CardDataService1, 'update', args, context);
        });

        this.addTask('resetValidation', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ValidationService1, 'resetValidation', args, context);
        });

        this.addTask('transit', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/transitionAction}'
                    ];
            return this.invoke(this._StateMachineService1, 'transit', args, context);
        });

        this.addLink('endEdit', 'validateCurrentRow', `1==1`);
        this.addLink('validateCurrentRow', 'save', `1==1`);
        this.addLink('save', 'update', `1==1`);
        this.addLink('update', 'resetValidation', `1==1`);
        this.addLink('resetValidation', 'transit', `1==1`);
    }
}