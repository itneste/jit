
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { EndEditService as EndEditService1 } from '@farris/command-services';
import { NavigationService as NavigationService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'Close1'
})
export class Close1Handler extends CommandHandler {
    constructor(
        public _EndEditService1: EndEditService1,
        public _NavigationService1: NavigationService1
    ) {
        super();
    }

    schedule() {
        this.addTask('endEdit', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._EndEditService1, 'endEdit', args, context);
        });

        this.addTask('close', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._NavigationService1, 'close', args, context);
        });

        this.addLink('endEdit', 'close', `1==1`);
    }
}