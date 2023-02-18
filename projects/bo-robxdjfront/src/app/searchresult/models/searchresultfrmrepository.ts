
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { SearchResultFrmEntity } from './entities/searchresultfrmentity';

import { SearchResultFrmProxy } from './searchresultfrmproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/searchresult_frm',
    entityType: SearchResultFrmEntity
})
export class SearchResultFrmRepository extends BefRepository<SearchResultFrmEntity> {
    public name = 'SearchResultFrmRepository';

    public proxy: SearchResultFrmProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(SearchResultFrmProxy, null);
    }
}