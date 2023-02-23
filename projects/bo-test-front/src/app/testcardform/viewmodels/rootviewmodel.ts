
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

import { BasicFormViewmodel } from './basicformviewmodel';

import { AttComponentViewmodel } from './attcomponentviewmodel';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    public childViewModels = {
        'BasicFormViewmodel' : 'basicFormViewmodel',
        'AttComponentViewmodel' : 'attComponentViewmodel'
    }
    public basicFormViewmodel: BasicFormViewmodel;
    public attComponentViewmodel: AttComponentViewmodel;
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
            transitionAction: 'Cancel',
            transitionActionParamName: ''
        },
        paramDescriptions: {
            id: { type: 'string' },
            transitionAction: { type: 'string' },
            transitionActionParamName: { type: 'string' }
        }
    })
    public LoadAndView1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'LoadAndEdit1',
        params: {
            id: '{UISTATE~/root-component/id}',
            transitionAction: 'Edit',
            transitionActionParamName: ''
        },
        paramDescriptions: {
            id: { type: 'string' },
            transitionAction: { type: 'string' },
            transitionActionParamName: { type: 'string' }
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
            transitionAction: { type: 'string' }
        }
    })
    public ChangeItem2(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelcloneWithAttachment1',
        params: {
            id: '{DATA~/att-component/atts/id}',
            url: '/service/copymainobjvoaction',
            attachmentInfoFieldPath: '/atts/attachmentInfo',
            rootId: 'default-root',
            path: 'docs'
        },
        paramDescriptions: {
            id: { type: 'string' },
            url: { type: 'string' },
            attachmentInfoFieldPath: { type: 'string' },
            rootId: { type: 'string' },
            path: { type: 'string' }
        }
    })
    public rootviewmodelcloneWithAttachment1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelRemoveAttachment1',
        params: {
            attachmentInfoFieldPath: '/atts/attachmentInfo',
            id: '{DATA~/att-component/atts/id}',
            rootId: 'default-root'
        },
        paramDescriptions: {
            attachmentInfoFieldPath: { type: 'string' },
            id: { type: 'string' },
            rootId: { type: 'string' }
        }
    })
    public rootviewmodelRemoveAttachment1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelopenHiddenHelp1',
        params: {
            helpId: 'helpId'
        },
        paramDescriptions: {
            helpId: { type: 'string' }
        }
    })
    public rootviewmodelopenHiddenHelp1(commandParam?: any): Observable<any> { return; }

}