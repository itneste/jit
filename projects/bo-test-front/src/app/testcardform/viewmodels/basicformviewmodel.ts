
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class BasicFormViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    @NgCommand({
        name: 'basicformviewmodelbatchAppendByPathWithAttachment1',
        params: {
            frameId: '#{att-component}',
            mapFields: '{"s11":"s11","i11":"i11","d11":"d11","dt11":"dt11","attachmentInfo.attachmentId":"attachmentInfo.attachmentId","attachmentInfo.fileName":"attachmentInfo.fileName","attachmentInfo.fileSize":"attachmentInfo.fileSize"}',
            attachmentInfoFieldPath: '/atts/attachmentInfo',
            rootId: 'default-root',
            path: 'docs'
        },
        paramDescriptions: {
            frameId: { type: 'string' },
            mapFields: { type: 'string' },
            attachmentInfoFieldPath: { type: 'string' },
            rootId: { type: 'string' },
            path: { type: 'string' }
        }
    })
    public basicformviewmodelbatchAppendByPathWithAttachment1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'basicformviewmodelmethod11',
        params: {
        }
    })
    public basicformviewmodelmethod11(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'basicformviewmodelmethod21',
        params: {
        }
    })
    public basicformviewmodelmethod21(commandParam?: any): Observable<any> { return; }

}