
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { AttachmentEntityEntity } from './entities/attachmententityentity';

import { AttachmentEntityProxy } from './attachmententityproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/jiangsion/web/v1.0/list_frm',
    entityType: AttachmentEntityEntity
})
export class AttachmentEntityRepository extends BefRepository<AttachmentEntityEntity> {
    public name = 'AttachmentEntityRepository';

    public proxy: AttachmentEntityProxy;
    public paginationInfo = {
        AttachmentEntityEntity: {
            pageSize: 20,
        }
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(AttachmentEntityProxy, null);
    }
}