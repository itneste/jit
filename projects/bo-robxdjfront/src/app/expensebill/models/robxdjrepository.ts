
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { ROBXDJEntity } from './entities/robxdjentity';

import { ROBXDJProxy } from './robxdjproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/expensebill_frm',
    entityType: ROBXDJEntity
})
export class ROBXDJRepository extends BefRepository<ROBXDJEntity> {
    public name = 'ROBXDJRepository';

    public proxy: ROBXDJProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(ROBXDJProxy, null);
    }
}