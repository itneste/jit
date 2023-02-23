
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
  return new TranslateHttpLoader(http, '/apps/jiangsion/web/web/bo-test-front/testcardform/i18n/', '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"root-component":"","root-layout":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-save":"保存","button-cancel":"取消","main-container":"","like-card-container":"","basic-form-component-ref":"","detail-container":"","detail-section":"","Section/detail-section/mainTitle":"","Section/detail-section/subTitle":"","detail-tab":"","att-tab-page":"附件","att-component-ref":"","att-tab-toolbar":"","attAddButton":"新增","attRemoveButton":"删除","tabToolbarItem-yrp4":"复制","tabToolbarItem-1m8f":"上传","tabToolbarItem-gx7f":"删除附件","tabToolbarItem-a9cn":"引用","basic-form-component":"","basic-form-section":"","Section/basic-form-section/mainTitle":"基本信息","Section/basic-form-section/subTitle":"","basic-form-layout":"","ht":"","link":"","id_47464863_40ml":"主键","TextBox/id_47464863_40ml/placeHolder":"","version_fb798347_1ujk":"版本","DateBox/version_fb798347_1ujk/placeHolder":"","s1_74c1cc20_pcip":"S1","TextBox/s1_74c1cc20_pcip/placeHolder":"","i1_df866bb8_fliu":"I1","NumberSpinner/i1_df866bb8_fliu/placeHolder":"","d1_8fe1d305_5qmt":"D1","DateBox/d1_8fe1d305_5qmt/placeHolder":"","HiddenContainer-form":"","helpId":"name","LookupEdit/helpId/placeHolder":"","LookupEdit/helpId/dialogTitle":"","att-component":"","att-component-layout":"","dataGrid_att":"","DataGrid/dataGrid_att/lineNumberTitle":"","DataGrid/dataGrid_att/OperateEditButton":"编辑","DataGrid/dataGrid_att/OperateDeleteButton":"删除","DataGrid/dataGrid_att/OperateColumn":"操作","id_1ca6bc0a_lxp8":"主键","GridField/id_1ca6bc0a_lxp8/editor/id_1ca6bc0a_gpba":"文本","GridField/id_1ca6bc0a_lxp8/editor/TextBox/id_1ca6bc0a_gpba/placeHolder":"","parentID_494a2f81_8i82":"上级对象主键","GridField/parentID_494a2f81_8i82/editor/parentID_494a2f81_qzbh":"文本","GridField/parentID_494a2f81_8i82/editor/TextBox/parentID_494a2f81_qzbh/placeHolder":"","s11_fea4ceff_d4un":"S11","GridField/s11_fea4ceff_d4un/editor/s11_fea4ceff_c7vo":"文本","GridField/s11_fea4ceff_d4un/editor/TextBox/s11_fea4ceff_c7vo/placeHolder":"","i11_cc9d60a9_4a08":"I11","GridField/i11_cc9d60a9_4a08/editor/i11_cc9d60a9_yznh":"数值框","GridField/i11_cc9d60a9_4a08/editor/NumberSpinner/i11_cc9d60a9_yznh/placeHolder":"","d11_0fe25089_28fo":"D11","GridField/d11_0fe25089_28fo/editor/d11_0fe25089_ijqg":"日期选择","GridField/d11_0fe25089_28fo/editor/DateBox/d11_0fe25089_ijqg/placeHolder":"","dT11_532a4dc5_528i":"DT11","GridField/dT11_532a4dc5_528i/editor/dT11_532a4dc5_30ve":"日期选择","GridField/dT11_532a4dc5_528i/editor/DateBox/dT11_532a4dc5_30ve/placeHolder":"","attachmentInfo_AttachmentId_7ef8a426_vea2":"附件Id","GridField/attachmentInfo_AttachmentId_7ef8a426_vea2/editor/attachmentInfo_AttachmentId_7ef8a426_42mz":"文本","GridField/attachmentInfo_AttachmentId_7ef8a426_vea2/editor/TextBox/attachmentInfo_AttachmentId_7ef8a426_42mz/placeHolder":"","attachmentInfo_FileName_7ef8a426_1fh4":"附件名称","GridField/attachmentInfo_FileName_7ef8a426_1fh4/editor/attachmentInfo_FileName_7ef8a426_wl6r":"文本","GridField/attachmentInfo_FileName_7ef8a426_1fh4/editor/TextBox/attachmentInfo_FileName_7ef8a426_wl6r/placeHolder":"","attachmentInfo_FileSize_7ef8a426_zouj":"附件大小","GridField/attachmentInfo_FileSize_7ef8a426_zouj/editor/attachmentInfo_FileSize_7ef8a426_j7v9":"数值框","GridField/attachmentInfo_FileSize_7ef8a426_zouj/editor/NumberSpinner/attachmentInfo_FileSize_7ef8a426_j7v9/placeHolder":"","attachmentInfo_FileCreateTime_7ef8a426_xiwg":"附件上传时间","GridField/attachmentInfo_FileCreateTime_7ef8a426_xiwg/editor/attachmentInfo_FileCreateTime_7ef8a426_3c6r":"日期选择","GridField/attachmentInfo_FileCreateTime_7ef8a426_xiwg/editor/DateBox/attachmentInfo_FileCreateTime_7ef8a426_3c6r/placeHolder":""}};

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
      const httpOb = this.http.get("/apps/jiangsion/web/web/bo-test-front/version.json?v=" + new Date().getTime()).pipe(switchMap((data)=>{
        let currentVersion = null;
        if (data instanceof Array) {
          const versionKey = "testcardform/" + langCode + ".json";
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
