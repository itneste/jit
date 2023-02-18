
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BefProxy, UriService, Uri } from '@farris/bef';
@Injectable()
export class BxdzdycxFrmProxy extends BefProxy {

    private apiUrl = 'api/fssp/fssc/v1.0/bxdzdycx_frm';

    constructor(
        httpClient: HttpClient,
        uriService: UriService) {
        super(httpClient, uriService);
        this.baseUri = uriService.extendUri(this.apiUrl);
    }
    QueryCol(
        Param: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/querycol',{
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
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    }
    QueryData(
        Param: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/querydata',{
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
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    }
    Export(
        Param: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/export',{
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
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    }
    GetParasMappingList(
        queryId: any,
        datasourceId: any,
        userId: any,
        languageType: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getparasmappinglist',{
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
                queryId: queryId,
                datasourceId: datasourceId,
                userId: userId,
                languageType: languageType,
            }
        };
        return this.invoke(url, method, options);
    }
    SaveParasMapping(
        Param: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/saveparasmapping',{
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
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    }
    DeleteParasMapping(
        queryId: any,
        datasourceId: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deleteparasmapping',{
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
                queryId: queryId,
                datasourceId: datasourceId,
            }
        };
        return this.invoke(url, method, options);
    }
    GetJoinSearch(
        formId: any,
        queryId: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getjoinsearch',{
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
                formId: formId,
                queryId: queryId,
            }
        };
        return this.invoke(url, method, options);
    }
    AddJointSearch(
        joinSearch: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/addjointsearch',{
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
                joinSearch: joinSearch,
            }
        };
        return this.invoke(url, method, options);
    }
    DeleteJointSearch(
        formid: any,
        queryId: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deletejointsearch',{
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
                formid: formid,
                queryId: queryId,
            }
        };
        return this.invoke(url, method, options);
    }
    VisibleJoint(
        Param: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/visiblejoint',{
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
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    }
    GetPreSchema(){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getpreschema',{
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
            }
        };
        return this.invoke(url, method, options);
    }
    GetSchemaById(
        id: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getschemabyid',{
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
                id: id,
            }
        };
        return this.invoke(url, method, options);
    }
    GetSchemaList(
        queryId: any,
        userId: any,
        languageType: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getschemalist',{
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
                queryId: queryId,
                userId: userId,
                languageType: languageType,
            }
        };
        return this.invoke(url, method, options);
    }
    SaveSchema(
        Param: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/saveschema',{
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
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    }
    DeleteSchema(
        id: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deleteschema',{
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
                id: id,
            }
        };
        return this.invoke(url, method, options);
    }
    GetSpreadTemplate(
        id: any,
        scheme: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getspreadtemplate',{
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
                id: id,
                scheme: scheme,
            }
        };
        return this.invoke(url, method, options);
    }
    GetInitSpreadTemplate(
        Param: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getinitspreadtemplate',{
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
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    }
    GetSpreadTemplateWithDynamicColumn(
        Param: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getspreadtemplatewithdynamiccolumn',{
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
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    }
    GetFilterList(
        queryId: any,
        datasourceId: any,
        userId: any,
        languageType: any,
        queryType: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getfilterlist',{
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
                queryId: queryId,
                datasourceId: datasourceId,
                userId: userId,
                languageType: languageType,
                queryType: queryType,
            }
        };
        return this.invoke(url, method, options);
    }
    SaveFilter(
        Param: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/savefilter',{
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
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    }
    DeleteFilter(
        queryId: any,
        datasourceId: any,
        queryType: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deletefilter',{
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
                queryId: queryId,
                datasourceId: datasourceId,
                queryType: queryType,
            }
        };
        return this.invoke(url, method, options);
    }
    GetCrossTabTemplate(
        Param: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getcrosstabtemplate',{
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
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    }
    GetPrintIntegrationList(
        queryId: any,
        schemaId: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/getprintintegrationlist',{
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
                queryId: queryId,
                schemaId: schemaId,
            }
        };
        return this.invoke(url, method, options);
    }
    SavePrintIntegration(
        Param: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/saveprintintegration',{
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
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    }
    DeletePrintIntegration(
        queryId: any,
        schemaId: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/deleteprintintegration',{
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
                queryId: queryId,
                schemaId: schemaId,
            }
        };
        return this.invoke(url, method, options);
    }
    Print(
        Param: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/print',{
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
                Param: Param,
            }
        };
        return this.invoke(url, method, options);
    }
}