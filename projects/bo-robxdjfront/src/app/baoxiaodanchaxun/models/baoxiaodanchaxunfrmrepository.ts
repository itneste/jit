
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { BaoxiaodanchaxunFrmEntity } from './entities/baoxiaodanchaxunfrmentity';

import { BaoxiaodanchaxunFrmProxy } from './baoxiaodanchaxunfrmproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/baoxiaodanchaxun_frm',
    entityType: BaoxiaodanchaxunFrmEntity
})
export class BaoxiaodanchaxunFrmRepository extends BefRepository<BaoxiaodanchaxunFrmEntity> {
    public name = 'BaoxiaodanchaxunFrmRepository';

    public proxy: BaoxiaodanchaxunFrmProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(BaoxiaodanchaxunFrmProxy, null);
    }
}