
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { BatchEditService as BatchEditService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'basicformviewmodelbatchAppendByPathWithAttachment1'
})
export class basicformviewmodelbatchAppendByPathWithAttachment1Handler extends CommandHandler {
    constructor(
        public _BatchEditService1: BatchEditService1
    ) {
        super();
    }

    schedule() {
        this.addTask('batchAppendByPathWithAttachment', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/frameId}', 
                '{COMMAND~/params/mapFields}', 
                '{COMMAND~/params/attachmentInfoFieldPath}', 
                '{COMMAND~/params/rootId}', 
                '{COMMAND~/params/path}'
                    ];
            return this.invoke(this._BatchEditService1, 'batchAppendByPathWithAttachment', args, context);
        });

    }
}