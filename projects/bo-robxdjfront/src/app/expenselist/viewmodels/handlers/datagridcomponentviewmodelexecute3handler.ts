
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { CommandService as CommandService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'datagridcomponentviewmodelexecute3'
})
export class datagridcomponentviewmodelexecute3Handler extends CommandHandler {
    constructor(
        public _CommandService1: CommandService1
    ) {
        super();
    }

    schedule() {
        this.addTask('execute', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/commandName}', 
                '{COMMAND~/params/frameId}'
                    ];
            return this.invoke(this._CommandService1, 'execute', args, context);
        });

    }
}