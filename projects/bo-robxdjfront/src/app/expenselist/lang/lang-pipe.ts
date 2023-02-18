
import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';
export function createTranslateLoader(http: HttpClient,version:string) {
  let versionSuffix = "";
  if (version) {
    versionSuffix = "?v=" + version;
  }
  return new TranslateHttpLoader(http, '/apps/fssp/fssc/web/bo-robxdjfront/expenselist/i18n/', '.json'+ versionSuffix);
}

export const lang = {"zh-CHS":{"formtitle":"","root-component":"","root-layout":"","query-scheme-section":"","Section/query-scheme-section/mainTitle":"","Section/query-scheme-section/subTitle":"","query-scheme-1":"默认筛选方案","QueryScheme/query-scheme-1/66ed1973-9baf-4088-b439-99d16ab8a3e5":"ID","QueryScheme/query-scheme-1/66ed1973-9baf-4088-b439-99d16ab8a3e5/placeHolder":"","QueryScheme/query-scheme-1/40ab6af5-3e4d-4e59-95c7-5d94b7e6927d":"Version","QueryScheme/query-scheme-1/40ab6af5-3e4d-4e59-95c7-5d94b7e6927d/placeHolder":"","QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0":"状态","QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/placeHolder":"","QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Billing":"制单","QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/control/enumValues/SubmitApproval":"提交审批","QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Approved":"审批通过","QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/control/enumValues/ApprovalNotPassed":"审批不通过","QueryScheme/query-scheme-1/8e877e37-ad8f-4da3-a430-c8a7f2162135":"流程实例","QueryScheme/query-scheme-1/8e877e37-ad8f-4da3-a430-c8a7f2162135/placeHolder":"","QueryScheme/query-scheme-1/dd508847-8491-40f0-9f38-1b5e96a5d367":"报销人员","QueryScheme/query-scheme-1/dd508847-8491-40f0-9f38-1b5e96a5d367/placeHolder":"","QueryScheme/query-scheme-1/5b7e6604-4932-4d3e-859c-1c6ef73c0e0e":"编号","QueryScheme/query-scheme-1/5b7e6604-4932-4d3e-859c-1c6ef73c0e0e/placeHolder":"","QueryScheme/query-scheme-1/2d7db0e1-cfc2-491d-818c-432bf64eceec":"报销人","QueryScheme/query-scheme-1/2d7db0e1-cfc2-491d-818c-432bf64eceec/placeHolder":"","QueryScheme/query-scheme-1/2d7db0e1-cfc2-491d-818c-432bf64eceec/control/help/dialogTitle":"","QueryScheme/query-scheme-1/95ccaa3e-72ab-43e5-840b-536556756e5b":"所属部门","QueryScheme/query-scheme-1/95ccaa3e-72ab-43e5-840b-536556756e5b/placeHolder":"","QueryScheme/query-scheme-1/a1f04b3a-2701-4e09-a81a-9f29d6b51dcb":"编号","QueryScheme/query-scheme-1/a1f04b3a-2701-4e09-a81a-9f29d6b51dcb/placeHolder":"","QueryScheme/query-scheme-1/e3bdb6f3-e86d-4e6a-9637-169e7764a146":"所属组织","QueryScheme/query-scheme-1/e3bdb6f3-e86d-4e6a-9637-169e7764a146/placeHolder":"","QueryScheme/query-scheme-1/e3bdb6f3-e86d-4e6a-9637-169e7764a146/control/help/dialogTitle":"","QueryScheme/query-scheme-1/bc0603e3-4edc-4432-93e2-4c0bdbe89342":"单据编号","QueryScheme/query-scheme-1/bc0603e3-4edc-4432-93e2-4c0bdbe89342/placeHolder":"","QueryScheme/query-scheme-1/383b62f2-4a5b-4340-bf34-71c5dfeda178":"报账金额","QueryScheme/query-scheme-1/383b62f2-4a5b-4340-bf34-71c5dfeda178/placeHolder":"","QueryScheme/query-scheme-1/ccdcdcfd-7217-4cfb-8ceb-79a65b18a953":"报销类型","QueryScheme/query-scheme-1/ccdcdcfd-7217-4cfb-8ceb-79a65b18a953/placeHolder":"","QueryScheme/query-scheme-1/ccdcdcfd-7217-4cfb-8ceb-79a65b18a953/control/enumValues/JT":"交通费","QueryScheme/query-scheme-1/ccdcdcfd-7217-4cfb-8ceb-79a65b18a953/control/enumValues/CL":"差旅费","QueryScheme/query-scheme-1/ccdcdcfd-7217-4cfb-8ceb-79a65b18a953/control/enumValues/SJ":"手机费","QueryScheme/query-scheme-1/9667c000-983e-49e0-8ced-7fc39c049f1c":"密级ID","QueryScheme/query-scheme-1/9667c000-983e-49e0-8ced-7fc39c049f1c/placeHolder":"","QueryScheme/query-scheme-1/ca02ba71-63e6-4c07-bc3a-42c34e0f226d":"密级","QueryScheme/query-scheme-1/ca02ba71-63e6-4c07-bc3a-42c34e0f226d/placeHolder":"","QueryScheme/query-scheme-1/f9a6a341-98a7-4bc7-8f75-ac41db512efe":"所属项目","QueryScheme/query-scheme-1/f9a6a341-98a7-4bc7-8f75-ac41db512efe/placeHolder":"","QueryScheme/query-scheme-1/46ecd27c-0b6c-41b0-a62b-8871be8a49db":"项目经理","QueryScheme/query-scheme-1/46ecd27c-0b6c-41b0-a62b-8871be8a49db/placeHolder":"","QueryScheme/query-scheme-1/423edf37-cb74-4a0d-8edb-5cc80375a071":"编号","QueryScheme/query-scheme-1/423edf37-cb74-4a0d-8edb-5cc80375a071/placeHolder":"","QueryScheme/query-scheme-1/2743e014-2f51-4557-aaf3-42cb6d5660d1":"名称","QueryScheme/query-scheme-1/2743e014-2f51-4557-aaf3-42cb6d5660d1/placeHolder":"","QueryScheme/query-scheme-1/4fc67503-b1b9-4a45-8ae4-12a6e4a8fc56":"稽核状态","QueryScheme/query-scheme-1/4fc67503-b1b9-4a45-8ae4-12a6e4a8fc56/placeHolder":"","QueryScheme/query-scheme-1/0ccc134a-b6cf-4844-bd85-52eef12ed9ba":"制单日期","QueryScheme/query-scheme-1/0ccc134a-b6cf-4844-bd85-52eef12ed9ba/placeHolder":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-view":"查看","button-delete":"删除","button-approve":"提交审批","button-cancel-approve":"取消提交审批","toolBarItem_3988":"打印","toolBarItem_0236":"稽核通过","toolBarItem_8535":"稽核不通过","toolBarItem_1154":"查看变更日志","page-main":"","data-grid-component-ref":"","data-grid-component":"","data-grid-section":"","Section/data-grid-section/mainTitle":"","Section/data-grid-section/subTitle":"","dataGrid":"","DataGrid/dataGrid/lineNumberTitle":"","DataGrid/dataGrid/OperateEditButton":"编辑","DataGrid/dataGrid/OperateDeleteButton":"删除","DataGrid/dataGrid/OperateColumn":"操作","billType_ccdcdcfd_lkao":"报销类型","GridField/billType_ccdcdcfd_lkao/enumData/JT":"交通费","GridField/billType_ccdcdcfd_lkao/enumData/CL":"差旅费","GridField/billType_ccdcdcfd_lkao/enumData/SJ":"手机费","employeeID_EmployeeID_Name_2d7db0e1_rh1h":"报销人","domainID_DomainID_name_e3bdb6f3_kr50":"所属组织","billCode_bc0603e3_qyu1":"单据编号","totalSum_383b62f2_ng5l":"报账金额","billDate_0ccc134a_9yle":"制单日期","billNote_95792e85_bfz8":"报销说明","auditStatus_4fc67503_2l7d":"稽核状态","GridField/auditStatus_4fc67503_2l7d/enumData/None":"未稽核","GridField/auditStatus_4fc67503_2l7d/enumData/Passed":"稽核通过","GridField/auditStatus_4fc67503_2l7d/enumData/Reject":"稽核不通过","billStatus_BillState_769d96b8_r5mi":"制单状态","GridField/billStatus_BillState_769d96b8_r5mi/enumData/Billing":"制单","GridField/billStatus_BillState_769d96b8_r5mi/enumData/SubmitApproval":"提交审批","GridField/billStatus_BillState_769d96b8_r5mi/enumData/Approved":"审批通过","GridField/billStatus_BillState_769d96b8_r5mi/enumData/ApprovalNotPassed":"审批不通过"}};

@Pipe({ name: 'lang' })
export class LangPipe implements PipeTransform {
  constructor(private translate: TranslateService, private http: HttpClient) { }
  transform(key: string, langCode: string, defaultValue?: string) {
      
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }
}
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    if (!url) {
      url = "";
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Injectable()
export class LangService {
  constructor(private translate: TranslateService) { }
  transform(key: string, langCode: string, defaultValue?: string) {
    
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }

}

@Injectable()
export class TranslateResolveService implements Resolve<any>{

  constructor(private translate: TranslateService, private http: HttpClient) {
    translate.defaultLang = 'zh-CHS';
    translate.setTranslation('zh-CHS', lang['zh-CHS']);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let langCode = localStorage.getItem('languageCode');
    if (!langCode) {
      langCode = "zh-CHS";
    }
    if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http,null))) {
      this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
      return of(this.translate[langCode]);
    } else {
      const httpOb = this.http.get("/apps/fssp/fssc/web/bo-robxdjfront/version.json?v=" + new Date().getTime()).pipe(switchMap((data)=>{
        let currentVersion = null;
        if (data instanceof Array) {
          const versionKey = "expenselist/" + langCode + ".json";
          data.forEach((item) => {
            if (item.category == "i18n" && item.key == versionKey) {
              currentVersion = item.value;
            }
          });
        }

        this.translate.defaultLang = langCode;
        this.translate.currentLang = langCode;
        this.translate.currentLoader = createTranslateLoader(this.http, currentVersion);

    let tran = this.translate.getTranslation(langCode).pipe(catchError(err => {
      console.error("read resource file failed,please check!!! "+ err);
      return of(err);
    }));
    return tran;
      }));
      return httpOb;
    }
  }
}
