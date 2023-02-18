
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { AttachmentService as AttachmentService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodelBatchDownloadByDataIds1'
})
export class rootviewmodelBatchDownloadByDataIds1Handler extends CommandHandler {
    constructor(
        public _AttachmentService1: AttachmentService1
    ) {
        super();
    }

    schedule() {
        this.addTask('batchDownloadByDataIds', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/dataIds}', 
                '{COMMAND~/params/attachmentInfoFieldPath}', 
                '{COMMAND~/params/rootId}'
                    ];
            return this.invoke(this._AttachmentService1, 'batchDownloadByDataIds', args, context);
        });

    }
}