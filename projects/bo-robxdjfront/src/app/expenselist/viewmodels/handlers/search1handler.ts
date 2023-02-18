
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { ListDataService as ListDataService1 } from '@farris/command-services';
import { FilterService as FilterService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'Search1'
})
export class Search1Handler extends CommandHandler {
    constructor(
        public _ListDataService1: ListDataService1,
        public _FilterService1: FilterService1
    ) {
        super();
    }

    schedule() {
        this.addTask('stripFiltersWithSpecialValue', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/filter}', 
                '{COMMAND~/params/specialFilterValues}'
                    ];
            return this.invoke(this._FilterService1, 'stripFiltersWithSpecialValue', args, context);
        });

        this.addTask('query', (context: CommandContext) => {
            const args = [
                '{COMMAND~/results/stripFiltersWithSpecialValue}', 
                '{COMMAND~/params/sort}', 
                '{COMMAND~/params/pageSize}', 
                '{COMMAND~/params/pageIndex}'
                    ];
            return this.invoke(this._ListDataService1, 'query', args, context);
        });

        this.addLink('stripFiltersWithSpecialValue', 'query', `1==1`);
    }
}