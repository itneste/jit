
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { QueryIndexService as QueryIndexService1 } from '@qdp/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'routeEx1'
})
export class routeEx1Handler extends CommandHandler {
    constructor(
        public _QueryIndexService1: QueryIndexService1
    ) {
        super();
    }

    schedule() {
        this.addTask('routeEx', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/queryId}', 
                '{COMMAND~/params/appType}', 
                '{COMMAND~/params/appid}', 
                '{COMMAND~/params/appEntrance}', 
                '{COMMAND~/params/funcId}'
                    ];
            return this.invoke(this._QueryIndexService1, 'routeEx', args, context);
        });

    }
}