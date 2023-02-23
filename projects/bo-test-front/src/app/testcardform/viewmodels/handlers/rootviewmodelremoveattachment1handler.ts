
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { AttachmentService as AttachmentService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodelRemoveAttachment1'
})
export class rootviewmodelRemoveAttachment1Handler extends CommandHandler {
    constructor(
        public _AttachmentService1: AttachmentService1
    ) {
        super();
    }

    schedule() {
        this.addTask('removeAttachment', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/attachmentInfoFieldPath}', 
                '{COMMAND~/params/id}', 
                '{COMMAND~/params/rootId}'
                    ];
            return this.invoke(this._AttachmentService1, 'removeAttachment', args, context);
        });

    }
}