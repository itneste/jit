
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
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
        }
    })
    public Load1(commandParam?: any): Observable<any> { return; }

}