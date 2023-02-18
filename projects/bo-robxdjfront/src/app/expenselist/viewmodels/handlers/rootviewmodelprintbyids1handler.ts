
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { PrintService as PrintService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodelprintByIds1'
})
export class rootviewmodelprintByIds1Handler extends CommandHandler {
    constructor(
        public _PrintService1: PrintService1
    ) {
        super();
    }

    schedule() {
        this.addTask('printByIds', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/beMetaId}', 
                '{COMMAND~/params/ids}'
                    ];
            return this.invoke(this._PrintService1, 'printByIds', args, context);
        });

    }
}