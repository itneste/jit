
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { ListDataService as ListDataService1 } from '@farris/command-services';
import { ExpenseListFrmBXDJControllerService as ExpenseListFrmBXDJControllerService1 } from '../../services/expenselist_frm_bxdjcontroller';

@Injectable()
@NgCommandHandler({
    commandName: 'datagridcomponentviewmodelAuditBill2'
})
export class datagridcomponentviewmodelAuditBill2Handler extends CommandHandler {
    constructor(
        public _ListDataService1: ListDataService1,
        public _ExpenseListFrmBXDJControllerService1: ExpenseListFrmBXDJControllerService1
    ) {
        super();
    }

    schedule() {
        this.addTask('audit', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/audit_id}', 
                '{COMMAND~/params/audit_flag}'
                    ];
            return this.invoke(this._ExpenseListFrmBXDJControllerService1, 'audit', args, context);
        });

        this.addTask('refresh', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/refresh_数据刷新命令名称}', 
                '{COMMAND~/params/refresh_数据刷新命令对应的FrameId}'
                    ];
            return this.invoke(this._ListDataService1, 'refresh', args, context);
        });

        this.addLink('audit', 'refresh', `1==1`);
    }
}