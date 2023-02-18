
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BefProxy, UriService, Uri } from '@farris/bef';
@Injectable()
export class ROBXDJProxy extends BefProxy {

    private apiUrl = 'api/fssp/fssc/v1.0/expenselist_frm';

    constructor(
        httpClient: HttpClient,
        uriService: UriService) {
        super(httpClient, uriService);
        this.baseUri = uriService.extendUri(this.apiUrl);
    }
    AuditBill(
        flag: any,
        id: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/auditbill',{
        });
        const url = uri.toString();
        const method = 'PUT';
        const options = {
            params: {
            },
            headers: {
            },
            body: {
                requestInfo: null,
                flag: flag,
                id: id,
            }
        };
        return this.invoke(url, method, options);
    }
}