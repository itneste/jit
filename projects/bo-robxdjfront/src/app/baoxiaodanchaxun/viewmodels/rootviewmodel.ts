
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

import { BasicFormViewmodel } from './basicformviewmodel';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    public childViewModels = {
        'BasicFormViewmodel' : 'basicFormViewmodel'
    }
    public basicFormViewmodel: BasicFormViewmodel;
    @NgCommand({
        name: 'Close1',
        params: {
            url: '',
            params: ''
        }
    })
    public Close1(commandParam?: any): Observable<any> { return; }

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
        name: 'filterQDP1',
        params: {
            queryId: '2a21565a-7766-4c68-8878-2f2359917005',
            filterCondition: ''
        },
        paramDescriptions: {
            queryId: { type: 'string' },
            filterCondition: { type: 'string' }
        }
    })
    public filterQDP1(commandParam?: any): Observable<any> { return; }

}