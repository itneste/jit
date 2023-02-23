
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { ChangeItemService as ChangeItemService1 } from '@farris/command-services';
import { PaginationService as PaginationService1 } from '@farris/command-services';
import { CardDataService as CardDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'ChangeItem2'
})
export class ChangeItem2Handler extends CommandHandler {
    constructor(
        public _ChangeItemService1: ChangeItemService1,
        public _PaginationService1: PaginationService1,
        public _CardDataService1: CardDataService1,
        public _StateMachineService1: StateMachineService1
    ) {
        super();
    }

    schedule() {
        this.addTask('changeItem', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/type}', 
                '{COMMAND~/params/id}', 
                '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}'
                    ];
            return this.invoke(this._ChangeItemService1, 'changeItem', args, context);
        });

        this.addTask('resetChildrenPagination', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._PaginationService1, 'resetChildrenPagination', args, context);
        });

        this.addTask('load', (context: CommandContext) => {
            const args = [
                '{COMMAND~/results/changeItem}'
                    ];
            return this.invoke(this._CardDataService1, 'load', args, context);
        });

        this.addTask('transit', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/transitionAction}'
                    ];
            return this.invoke(this._StateMachineService1, 'transit', args, context);
        });

        this.addLink('changeItem', 'resetChildrenPagination', `1==1`);
        this.addLink('resetChildrenPagination', 'load', `1==1`);
        this.addLink('load', 'transit', `1==1`);
    }
}