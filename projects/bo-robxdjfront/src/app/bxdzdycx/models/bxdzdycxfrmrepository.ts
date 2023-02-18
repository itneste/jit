
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { BxdzdycxFrmEntity } from './entities/bxdzdycxfrmentity';

import { BxdzdycxFrmProxy } from './bxdzdycxfrmproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/bxdzdycx_frm',
    entityType: BxdzdycxFrmEntity
})
export class BxdzdycxFrmRepository extends BefRepository<BxdzdycxFrmEntity> {
    public name = 'BxdzdycxFrmRepository';

    public proxy: BxdzdycxFrmProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(BxdzdycxFrmProxy, null);
    }
}