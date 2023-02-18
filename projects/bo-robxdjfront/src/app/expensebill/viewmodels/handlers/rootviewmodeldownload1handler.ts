
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { AttachmentService as AttachmentService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodeldownload1'
})
export class rootviewmodeldownload1Handler extends CommandHandler {
    constructor(
        public _AttachmentService1: AttachmentService1
    ) {
        super();
    }

    schedule() {
        this.addTask('download', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/attachmentId}', 
                '{COMMAND~/params/rootId}'
                    ];
            return this.invoke(this._AttachmentService1, 'download', args, context);
        });

    }
}