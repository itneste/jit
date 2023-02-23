
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { BatchEditService as BatchEditService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodelopenHiddenHelp1'
})
export class rootviewmodelopenHiddenHelp1Handler extends CommandHandler {
    constructor(
        public _BatchEditService1: BatchEditService1
    ) {
        super();
    }

    schedule() {
        this.addTask('openHiddenHelp', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/helpId}'
                    ];
            return this.invoke(this._BatchEditService1, 'openHiddenHelp', args, context);
        });

    }
}