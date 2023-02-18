
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { SearchHomeFrmEntity } from './entities/searchhomefrmentity';


@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/searchhomequeryresult_frm',
    entityType: SearchHomeFrmEntity
})
export class SearchHomeFrmRepository extends BefRepository<SearchHomeFrmEntity> {
    public name = 'SearchHomeFrmRepository';

    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
    }
}