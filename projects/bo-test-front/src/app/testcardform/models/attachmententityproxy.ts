
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BefProxy, UriService, Uri } from '@farris/bef';
@Injectable()
export class AttachmentEntityProxy extends BefProxy {

    private apiUrl = 'api/jiangsion/web/v1.0/testcardform_frm';

    constructor(
        httpClient: HttpClient,
        uriService: UriService) {
        super(httpClient, uriService);
        this.baseUri = uriService.extendUri(this.apiUrl);
    }
    DeleteAttachment(
        deleteAttachInfo: any,
        propertyName: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deleteattachment',{
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
                deleteAttachInfo: deleteAttachInfo,
                propertyName: propertyName,
            }
        };
        return this.invoke(url, method, options);
    }
    UpdateAttachment(
        updateAttachInfo: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/updateattachment',{
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
                updateAttachInfo: updateAttachInfo,
            }
        };
        return this.invoke(url, method, options);
    }
    BatchUploadAttachment(
        batchUploadInfo: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/batchuploadattachment',{
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
                batchUploadInfo: batchUploadInfo,
            }
        };
        return this.invoke(url, method, options);
    }
    CopyMainObjVOAction(
        dataID: any,
        copiedFields: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/copymainobjvoaction',{
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
                dataID: dataID,
                copiedFields: copiedFields,
            }
        };
        return this.invoke(url, method, options);
    }
}