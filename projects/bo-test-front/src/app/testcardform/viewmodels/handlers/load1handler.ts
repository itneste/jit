
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { NavigationMiddlewareService as NavigationMiddlewareService1 } from '@farris/command-services';
import { CommandService as CommandService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'Load1'
})
export class Load1Handler extends CommandHandler {
    constructor(
        public _NavigationMiddlewareService1: NavigationMiddlewareService1,
        public _CommandService1: CommandService1
    ) {
        super();
    }

    schedule() {
        this.addTask('onClosing', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._NavigationMiddlewareService1, 'onClosing', args, context);
        });

        this.addTask('execute', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/action}'
                    ];
            return this.invoke(this._CommandService1, 'execute', args, context);
        });

        this.addLink('onClosing', 'execute', `1==1`);
    }
}