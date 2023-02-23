
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { BatchEditService as BatchEditService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'attcomponentviewmodelcloneWithAttachment1'
})
export class attcomponentviewmodelcloneWithAttachment1Handler extends CommandHandler {
    constructor(
        public _BatchEditService1: BatchEditService1
    ) {
        super();
    }

    schedule() {
        this.addTask('cloneWithAttachment', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/id}', 
                '{COMMAND~/params/url}', 
                '{COMMAND~/params/attachmentInfoFieldPath}', 
                '{COMMAND~/params/rootId}', 
                '{COMMAND~/params/path}'
                    ];
            return this.invoke(this._BatchEditService1, 'cloneWithAttachment', args, context);
        });

    }
}