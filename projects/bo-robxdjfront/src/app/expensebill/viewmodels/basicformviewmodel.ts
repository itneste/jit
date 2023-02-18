
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class BasicFormViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    @NgCommand({
        name: 'basicformviewmodelclearZuzhi1',
        params: {
        }
    })
    public basicformviewmodelclearZuzhi1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'basicformviewmodelbeforEmp1',
        params: {
        }
    })
    public basicformviewmodelbeforEmp1(commandParam?: any): Observable<any> { return; }

}