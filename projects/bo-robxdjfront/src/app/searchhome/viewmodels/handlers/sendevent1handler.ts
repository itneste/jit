
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { FinishEventService as FinishEventService1 } from '@qdp/command-services';
import { CardDataService as CardDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'SendEvent1'
})
export class SendEvent1Handler extends CommandHandler {
    constructor(
        public _FinishEventService1: FinishEventService1,
        public _CardDataService1: CardDataService1,
        public _StateMachineService1: StateMachineService1
    ) {
        super();
    }

    schedule() {
        this.addTask('add', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._CardDataService1, 'add', args, context);
        });

        this.addTask('transit', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/transitionAction}'
                    ];
            return this.invoke(this._StateMachineService1, 'transit', args, context);
        });

        this.addTask('SendEvent', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._FinishEventService1, 'SendEvent', args, context);
        });

        this.addLink('add', 'transit', `1==1`);
        this.addLink('transit', 'SendEvent', `1==1`);
    }
}