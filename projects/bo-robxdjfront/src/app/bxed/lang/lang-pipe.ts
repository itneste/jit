
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
  return new TranslateHttpLoader(http, '/apps/fssp/fssc/web/bo-robxdjfront/bxed/i18n/', '.json'+ versionSuffix);
}

export const lang = {"zh-CHS":{"button-add":"新增","button-edit":"编辑","button-view":"查看","button-delete":"删除","root-component":"","root-layout":"","query-scheme-section":"","Section/query-scheme-section/mainTitle":"","Section/query-scheme-section/subTitle":"","query-scheme-1":"默认筛选方案","QueryScheme/query-scheme-1/46850306-d3b6-480d-9a7b-9797b5c748ea":"ID","QueryScheme/query-scheme-1/46850306-d3b6-480d-9a7b-9797b5c748ea/placeHolder":"","QueryScheme/query-scheme-1/d90bd8f0-2b89-4609-80a0-7046d6fe2695":"组织","QueryScheme/query-scheme-1/d90bd8f0-2b89-4609-80a0-7046d6fe2695/placeHolder":"","QueryScheme/query-scheme-1/d90bd8f0-2b89-4609-80a0-7046d6fe2695/control/help/dialogTitle":"","QueryScheme/query-scheme-1/061bdc3e-a78c-4738-9cd0-f69b5621954a":"人员","QueryScheme/query-scheme-1/061bdc3e-a78c-4738-9cd0-f69b5621954a/placeHolder":"","QueryScheme/query-scheme-1/061bdc3e-a78c-4738-9cd0-f69b5621954a/control/help/dialogTitle":"","QueryScheme/query-scheme-1/d81a2e5e-8e01-41c9-b1f1-b1bbff7a7b82":"报销总额","QueryScheme/query-scheme-1/d81a2e5e-8e01-41c9-b1f1-b1bbff7a7b82/placeHolder":"","QueryScheme/query-scheme-1/14b1c40f-3b25-4344-80bc-634061db02d2":"报销限额","QueryScheme/query-scheme-1/14b1c40f-3b25-4344-80bc-634061db02d2/placeHolder":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","page-header-toolbar":"","page-main":"","data-grid-component-ref":"","data-grid-component":"","data-grid-section":"","Section/data-grid-section/mainTitle":"","Section/data-grid-section/subTitle":"","dataGrid":"","DataGrid/dataGrid/lineNumberTitle":"","DataGrid/dataGrid/OperateEditButton":"编辑","DataGrid/dataGrid/OperateDeleteButton":"删除","DataGrid/dataGrid/OperateColumn":"操作","org_d90bd8f0_zfii":"组织","emp_061bdc3e_yint":"人员","totalmoney_d81a2e5e_hlir":"报销总额","limmoney_14b1c40f_39u9":"报销限额"}};

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
          const versionKey = "bxed/" + langCode + ".json";
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
