
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { NavigationMiddlewareService as NavigationMiddlewareService1 } from '@farris/command-services';
import { DataCheckService as DataCheckService1 } from '@farris/command-services';
import { NavigationService as NavigationService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'View1'
})
export class View1Handler extends CommandHandler {
    constructor(
        public _NavigationMiddlewareService1: NavigationMiddlewareService1,
        public _DataCheckService1: DataCheckService1,
        public _NavigationService1: NavigationService1
    ) {
        super();
    }

    schedule() {
        this.addTask('checkBeforeView', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/idToView}'
                    ];
            return this.invoke(this._DataCheckService1, 'checkBeforeView', args, context);
        });

        this.addTask('getTabId', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/params}', 
                '{COMMAND~/params/idToView}'
                    ];
            return this.invoke(this._NavigationMiddlewareService1, 'getTabId', args, context);
        });

        this.addTask('openMenu', (context: CommandContext) => {
            const args = [
                '{COMMAND~/results/getTabId}', 
                '{COMMAND~/params/url}', 
                '{COMMAND~/params/params}', 
                '', 
                '{COMMAND~/params/enableRefresh}', 
                '{COMMAND~/params/tabName}', 
                '{COMMAND~/params/destructuring}'
                    ];
            return this.invoke(this._NavigationService1, 'openMenu', args, context);
        });

        this.addLink('checkBeforeView', 'getTabId', `1==1`);
        this.addLink('getTabId', 'openMenu', `1==1`);
    }
}