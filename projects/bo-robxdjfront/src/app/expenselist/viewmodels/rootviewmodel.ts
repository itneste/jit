
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

import { DataGridComponentViewmodel } from './datagridcomponentviewmodel';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    public childViewModels = {
        'DataGridComponentViewmodel' : 'dataGridComponentViewmodel'
    }
    public dataGridComponentViewmodel: DataGridComponentViewmodel;
    @NgCommand({
        name: 'Load1',
        params: {
            filter: '',
            sort: ''
        },
        paramDescriptions: {
            filter: { type: 'string' },
            sort: { type: 'string' }
        }
    })
    public Load1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Search1',
        params: {
            filter: '',
            sort: '',
            pageSize: '',
            pageIndex: '',
            specialFilterValues: ''
        },
        paramDescriptions: {
            filter: { type: 'string' },
            sort: { type: 'string' },
            pageSize: { type: 'int' },
            pageIndex: { type: 'int' },
            specialFilterValues: { type: 'string' }
        }
    })
    public Search1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'RemoveRows1',
        params: {
            ids: '{UISTATE~/data-grid-component/ids}',
            refreshCommandName: '',
            refreshCommandFrameId: '',
            successMsg: ''
        },
        paramDescriptions: {
            ids: { type: 'decimal' },
            refreshCommandName: { type: 'string' },
            refreshCommandFrameId: { type: 'string' },
            successMsg: { type: 'string' }
        }
    })
    public RemoveRows1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Add1',
        params: {
            url: '4a96254d-68c6-4850-a169-ed6dafb45be7',
            params: '{"action":"LoadAndAdd1"}',
            enableRefresh: '',
            tabName: '',
            destructuring: ''
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' },
            enableRefresh: { type: 'string' },
            tabName: { type: 'string' },
            destructuring: { type: 'string' }
        }
    })
    public Add1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'View1',
        params: {
            url: '4a96254d-68c6-4850-a169-ed6dafb45be7',
            params: '{"action":"LoadAndView1", "id":"{DATA~/data-grid-component/id}"}',
            idToView: '',
            enableRefresh: '',
            tabName: '',
            destructuring: ''
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' },
            idToView: { type: 'string' },
            enableRefresh: { type: 'string' },
            tabName: { type: 'string' },
            destructuring: { type: 'string' }
        }
    })
    public View1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Edit1',
        params: {
            url: '4a96254d-68c6-4850-a169-ed6dafb45be7',
            params: '{"action":"LoadAndEdit1", "id":"{DATA~/data-grid-component/id}"}',
            idToEdit: '',
            enableRefresh: '',
            tabName: '',
            destructuring: ''
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' },
            idToEdit: { type: 'string' },
            enableRefresh: { type: 'string' },
            tabName: { type: 'string' },
            destructuring: { type: 'string' }
        }
    })
    public Edit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Remove1',
        params: {
            id: '{DATA~/data-grid-component/id}',
            refreshCommandName: '',
            refreshCommandFrameId: '',
            successMsg: ''
        },
        paramDescriptions: {
            id: { type: 'string' },
            refreshCommandName: { type: 'string' },
            refreshCommandFrameId: { type: 'string' },
            successMsg: { type: 'string' }
        }
    })
    public Remove1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Filter1',
        params: {
            filter: '{UISTATE~/root-component/originalFilterConditionList}',
            sort: ''
        },
        paramDescriptions: {
            filter: { type: 'string' },
            sort: { type: 'string' }
        }
    })
    public Filter1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'submitWithBizDefKey1',
        params: {
            dataId: '{DATA~/data-grid-component/id}',
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
            dataId: '{DATA~/data-grid-component/id}',
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
        name: 'rootviewmodelprintByIds1',
        params: {
            beMetaId: '80307b1d-5a80-429f-9ce9-92e2fbcf94e5',
            ids: '{UISTATE~/data-grid-component/ids}'
        },
        paramDescriptions: {
            beMetaId: { type: 'string' },
            ids: { type: 'string' }
        }
    })
    public rootviewmodelprintByIds1(commandParam?: any): Observable<any> { return; }

}