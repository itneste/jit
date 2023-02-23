
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { AttachmentService as AttachmentService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'rootviewmodelUploadAndUpdateRow1'
})
export class rootviewmodelUploadAndUpdateRow1Handler extends CommandHandler {
    constructor(
        public _AttachmentService1: AttachmentService1
    ) {
        super();
    }

    schedule() {
        this.addTask('uploadAndUpdateRow', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/attachmentInfoFieldPath}', 
                '{COMMAND~/params/rootDirId}', 
                '{COMMAND~/params/subDirName}', 
                '{COMMAND~/params/fileType}', 
                '{COMMAND~/params/id}'
                    ];
            return this.invoke(this._AttachmentService1, 'uploadAndUpdateRow', args, context);
        });

    }
}