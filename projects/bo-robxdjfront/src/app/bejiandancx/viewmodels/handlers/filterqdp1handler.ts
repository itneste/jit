
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { QueryIndexService as QueryIndexService1 } from '@qdp/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'filterQDP1'
})
export class filterQDP1Handler extends CommandHandler {
    constructor(
        public _QueryIndexService1: QueryIndexService1
    ) {
        super();
    }

    schedule() {
        this.addTask('filterQDP', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/queryId}', 
                '{COMMAND~/params/filterCondition}'
                    ];
            return this.invoke(this._QueryIndexService1, 'filterQDP', args, context);
        });

    }
}