
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { SearchHomeFrmEntity } from './entities/searchhomefrmentity';

import { SearchHomeFrmProxy } from './searchhomefrmproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/searchhome_frm',
    entityType: SearchHomeFrmEntity
})
export class SearchHomeFrmRepository extends BefRepository<SearchHomeFrmEntity> {
    public name = 'SearchHomeFrmRepository';

    public proxy: SearchHomeFrmProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(SearchHomeFrmProxy, null);
    }
}