
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { QueryIndexService as QueryIndexService1 } from '@qdp/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'route1'
})
export class route1Handler extends CommandHandler {
    constructor(
        public _QueryIndexService1: QueryIndexService1
    ) {
        super();
    }

    schedule() {
        this.addTask('route', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/queryId}', 
                '{COMMAND~/params/path}'
                    ];
            return this.invoke(this._QueryIndexService1, 'route', args, context);
        });

    }
}