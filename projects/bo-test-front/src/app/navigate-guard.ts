
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

/**
 * 运行时定制加载前脚本请求
 */
@Injectable()
export class NavigateGuard implements CanLoad {
    constructor(private httpClient: HttpClient) {

    }

    canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
        // 读取当前路由Url地址
        if (!route.data) {
            return true;
        }
        const queryParams = route.data["navigateGuardParameter"];
        if (queryParams) {
            const isRtc = queryParams.get("isRTC") || queryParams.get("isRtc");
            const formMetadataId = queryParams.get('metadataId');
            const isQdpRtc = isRtc === '2';
            const isDynamicForm = isRtc === '3';
            const isCompileForm = isRtc === '1';
            if (formMetadataId && (isQdpRtc || isCompileForm)) {
                const constructRequestBody = () => {
                    const obj: any = {};
                    obj.dim1 = queryParams.get('dim1');
                    obj.dim2 = queryParams.get('dim2');
                    obj.metadataId = queryParams.get('metadataId');
                    obj.isRootMetadata = queryParams.get('isRootMetadata');
                    obj.isDynamicForm = isDynamicForm;
                    return obj;
                };

                const suCodeRequest = this.httpClient.get(`/api/runtime/bcc/v1.0/template/suCode/${ formMetadataId}`, {
                    responseType: 'text'
                }).pipe(
                    switchMap((suCode: any): any => {
                        const requestBody = constructRequestBody();
                        if (isQdpRtc) {
                            return this.httpClient.post("/api/runtime/bcc/v1.0/qdpdefinition/loadscript", JSON.stringify(requestBody), {
                                responseType: "text",
                                headers: new HttpHeaders({ 'Content-Type': 'application/text' })
                            });
                        } else {
                            return this.httpClient.post(`/api/${suCode}/v1.0/template/check/beforeNavigate`, requestBody);
                        }
                    })).pipe(map(() => {
                        return true;
                    }), catchError(() => { return of(false); }));


                return suCodeRequest;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

}