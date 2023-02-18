
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { FybxvoEntity } from './entities/fybxvoentity';

import { FybxvoProxy } from './fybxvoproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/fybxvo',
    entityType: FybxvoEntity
})
export class FybxvoRepository extends BefRepository<FybxvoEntity> {
    public name = 'FybxvoRepository';

    public proxy: FybxvoProxy;
    public paginationInfo = {
        FybxvoEntity: {
            pageSize: 20,
        }
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(FybxvoProxy, null);
    }
}