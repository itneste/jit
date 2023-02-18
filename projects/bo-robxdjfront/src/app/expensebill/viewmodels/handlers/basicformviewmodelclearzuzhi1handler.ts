
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { ExpenseBillFrmBxdjServiceService as ExpenseBillFrmBxdjServiceService1 } from '../../services/expensebill_frm_bxdjservice';

@Injectable()
@NgCommandHandler({
    commandName: 'basicformviewmodelclearZuzhi1'
})
export class basicformviewmodelclearZuzhi1Handler extends CommandHandler {
    constructor(
        public _ExpenseBillFrmBxdjServiceService1: ExpenseBillFrmBxdjServiceService1
    ) {
        super();
    }

    schedule() {
        this.addTask('afterClearBumen', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ExpenseBillFrmBxdjServiceService1, 'afterClearBumen', args, context);
        });

    }
}