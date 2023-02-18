
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

import { BasicFormViewmodel } from './basicformviewmodel';

import { ItemsComponentViewmodel } from './itemscomponentviewmodel';

import { FilesComponentViewmodel } from './filescomponentviewmodel';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    public childViewModels = {
        'BasicFormViewmodel' : 'basicFormViewmodel',
        'ItemsComponentViewmodel' : 'itemsComponentViewmodel',
        'FilesComponentViewmodel' : 'filesComponentViewmodel'
    }
    public basicFormViewmodel: BasicFormViewmodel;
    public itemsComponentViewmodel: ItemsComponentViewmodel;
    public filesComponentViewmodel: FilesComponentViewmodel;
    @NgCommand({
        name: 'Load1',
        params: {
            action: '{UISTATE~/root-component/action}'
        },
        paramDescriptions: {
            action: { type: 'string' }
        }
    })
    public Load1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'LoadAndAdd1',
        params: {
            transitionAction: 'Create'
        },
        paramDescriptions: {
            transitionAction: { type: 'string' }
        }
    })
    public LoadAndAdd1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'LoadAndView1',
        params: {
            id: '{UISTATE~/root-component/id}',
            transitionAction: 'Cancel'
        },
        paramDescriptions: {
            id: { type: 'string' },
            transitionAction: { type: 'string' }
        }
    })
    public LoadAndView1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'LoadAndEdit1',
        params: {
            id: '{UISTATE~/root-component/id}',
            transitionAction: 'Edit'
        },
        paramDescriptions: {
            id: { type: 'string' },
            transitionAction: { type: 'string' }
        }
    })
    public LoadAndEdit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Add1',
        params: {
            transitionAction: 'Create'
        },
        paramDescriptions: {
            transitionAction: { type: 'string' }
        }
    })
    public Add1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Edit1',
        params: {
            transitionAction: 'Edit'
        },
        paramDescriptions: {
            transitionAction: { type: '' }
        }
    })
    public Edit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Save1',
        params: {
            transitionAction: 'Cancel',
            successMsg: ''
        },
        paramDescriptions: {
            transitionAction: { type: 'string' },
            successMsg: { type: '' }
        }
    })
    public Save1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Cancel1',
        params: {
            transitionAction: 'Cancel'
        },
        paramDescriptions: {
            transitionAction: { type: 'string' }
        }
    })
    public Cancel1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'ChangeItem1',
        params: {
            id: '{DATA~/root-component/id}',
            type: 'prev',
            parentId: '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}',
            transitionAction: 'Cancel'
        },
        paramDescriptions: {
            id: { type: 'string' },
            type: { type: 'string' },
            parentId: { type: 'string' },
            transitionAction: { type: 'string' }
        }
    })
    public ChangeItem1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'ChangeItem2',
        params: {
            id: '{DATA~/root-component/id}',
            type: 'next',
            parentId: '{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}',
            transitionAction: 'Cancel'
        },
        paramDescriptions: {
            id: { type: 'string' },
            type: { type: 'string' },
            parentId: { type: 'string' },
            transitionAction: { type: 'string' }
        }
    })
    public ChangeItem2(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'submitWithBizDefKey1',
        params: {
            dataId: '{DATA~/basic-form-component/id}',
            bizDefKey: '7c96af2d-530c-41f7-8bbe-9c76b1be5cb7',
            action: ''
        },
        paramDescriptions: {
            dataId: { type: 'string' },
            bizDefKey: { type: 'string' },
            action: { type: 'string' }
        }
    })
    public submitWithBizDefKey1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'cancelSubmitWithDataId1',
        params: {
            dataId: '{DATA~/basic-form-component/id}',
            bizDefKey: '7c96af2d-530c-41f7-8bbe-9c76b1be5cb7',
            action: ''
        },
        paramDescriptions: {
            dataId: { type: 'string' },
            bizDefKey: { type: 'string' },
            action: { type: 'string' }
        }
    })
    public cancelSubmitWithDataId1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelUploadAndBatchAddRows1',
        params: {
            attachmentInfoFieldPath: '/filess/fileInfo',
            rootDirId: 'default-root',
            subDirName: '',
            fileType: ''
        },
        paramDescriptions: {
            attachmentInfoFieldPath: { type: 'string' },
            rootDirId: { type: 'string' },
            subDirName: { type: 'string' },
            fileType: { type: 'string' }
        }
    })
    public rootviewmodelUploadAndBatchAddRows1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodeldownload1',
        params: {
            attachmentId: '{DATA~/files-component/filess/fileInfo/attachmentId}',
            rootId: 'default-root'
        },
        paramDescriptions: {
            attachmentId: { type: 'string' },
            rootId: { type: 'string' }
        }
    })
    public rootviewmodeldownload1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelPreviewByAttachmentInfoFieldPath1',
        params: {
            attachmentInfoFieldPath: '/filess/fileInfo',
            rootDirId: 'default-root',
            ids: ''
        },
        paramDescriptions: {
            attachmentInfoFieldPath: { type: 'string' },
            rootDirId: { type: 'string' },
            ids: { type: '' }
        }
    })
    public rootviewmodelPreviewByAttachmentInfoFieldPath1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelBatchDownloadByDataIds1',
        params: {
            dataIds: '{UISTATE~/files-component/ids}',
            attachmentInfoFieldPath: '/filess/fileInfo',
            rootId: 'default-root'
        },
        paramDescriptions: {
            dataIds: { type: 'decimal' },
            attachmentInfoFieldPath: { type: 'string' },
            rootId: { type: 'string' }
        }
    })
    public rootviewmodelBatchDownloadByDataIds1(commandParam?: any): Observable<any> { return; }

}