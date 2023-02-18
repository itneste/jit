
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { WfTaskHandlerService as WfTaskHandlerService1 } from '@gsp-wf/wf-task-handler';
import { CardDataService as CardDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'cancelSubmitWithDataId1'
})
export class cancelSubmitWithDataId1Handler extends CommandHandler {
    constructor(
        public _WfTaskHandlerService1: WfTaskHandlerService1,
        public _CardDataService1: CardDataService1,
        public _StateMachineService1: StateMachineService1
    ) {
        super();
    }

    schedule() {
        this.addTask('cancelSubmitWithDataId', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/dataId}', 
                '{COMMAND~/params/bizDefKey}'
                    ];
            return this.invoke(this._WfTaskHandlerService1, 'cancelSubmitWithDataId', args, context);
        });

        this.addTask('update', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._CardDataService1, 'update', args, context);
        });

        this.addTask('transit', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/action}'
                    ];
            return this.invoke(this._StateMachineService1, 'transit', args, context);
        });

        this.addLink('cancelSubmitWithDataId', 'update', `1==1`);
        this.addLink('update', 'transit', `1==1`);
    }
}