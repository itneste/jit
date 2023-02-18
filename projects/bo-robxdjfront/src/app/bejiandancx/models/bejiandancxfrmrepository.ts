
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { BejiandancxFrmEntity } from './entities/bejiandancxfrmentity';

import { BejiandancxFrmProxy } from './bejiandancxfrmproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/bejiandancx_frm',
    entityType: BejiandancxFrmEntity
})
export class BejiandancxFrmRepository extends BefRepository<BejiandancxFrmEntity> {
    public name = 'BejiandancxFrmRepository';

    public proxy: BejiandancxFrmProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(BejiandancxFrmProxy, null);
    }
}