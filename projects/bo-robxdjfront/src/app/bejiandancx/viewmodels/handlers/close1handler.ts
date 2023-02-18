
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { NavigationService as NavigationService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'Close1'
})
export class Close1Handler extends CommandHandler {
    constructor(
        public _NavigationService1: NavigationService1
    ) {
        super();
    }

    schedule() {
        this.addTask('close', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._NavigationService1, 'close', args, context);
        });

    }
}