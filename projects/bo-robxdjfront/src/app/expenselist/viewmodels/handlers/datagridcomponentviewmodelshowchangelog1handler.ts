
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { ExpenseListFrmBXDJControllerService as ExpenseListFrmBXDJControllerService1 } from '../../services/expenselist_frm_bxdjcontroller';

@Injectable()
@NgCommandHandler({
    commandName: 'datagridcomponentviewmodelshowChangeLog1'
})
export class datagridcomponentviewmodelshowChangeLog1Handler extends CommandHandler {
    constructor(
        public _ExpenseListFrmBXDJControllerService1: ExpenseListFrmBXDJControllerService1
    ) {
        super();
    }

    schedule() {
        this.addTask('showChgdrList', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ExpenseListFrmBXDJControllerService1, 'showChgdrList', args, context);
        });

    }
}