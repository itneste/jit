
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { FilterConditionDataService as FilterConditionDataService1 } from '@farris/command-services';
import { DataGridService as DataGridService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'datagridcomponentviewmodelFilter1'
})
export class datagridcomponentviewmodelFilter1Handler extends CommandHandler {
    constructor(
        public _FilterConditionDataService1: FilterConditionDataService1,
        public _DataGridService1: DataGridService1
    ) {
        super();
    }

    schedule() {
        this.addTask('clearChecks', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._DataGridService1, 'clearChecks', args, context);
        });

        this.addTask('filter', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/commandName}', 
                '{COMMAND~/params/frameId}'
                    ];
            return this.invoke(this._FilterConditionDataService1, 'filter', args, context);
        });

        this.addLink('clearChecks', 'filter', `1==1`);
    }
}