
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { ExpenseBillFrmBxdjServiceService as ExpenseBillFrmBxdjServiceService1 } from '../../services/expensebill_frm_bxdjservice';

@Injectable()
@NgCommandHandler({
    commandName: 'basicformviewmodelbeforEmp1'
})
export class basicformviewmodelbeforEmp1Handler extends CommandHandler {
    constructor(
        public _ExpenseBillFrmBxdjServiceService1: ExpenseBillFrmBxdjServiceService1
    ) {
        super();
    }

    schedule() {
        this.addTask('beforeEmpHlp', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ExpenseBillFrmBxdjServiceService1, 'beforeEmpHlp', args, context);
        });

    }
}