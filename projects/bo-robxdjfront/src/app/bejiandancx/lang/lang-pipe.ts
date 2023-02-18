
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
  return new TranslateHttpLoader(http, '/apps/fssp/fssc/web/bo-robxdjfront/bejiandancx/i18n/', '.json'+ versionSuffix);
}

export const lang = {"zh-CHS":{"QueryScheme/query-scheme-1/a8aa3c47-0274-4ad1-9d3b-71ba10c4aa53":"起始","QueryScheme/query-scheme-1/a8aa3c47-0274-4ad1-9d3b-71ba10c4aa53/placeHolder":"","QueryScheme/query-scheme-1/a8aa3c47-b052-4279-bc32-7d2d72151177":"终止","QueryScheme/query-scheme-1/a8aa3c47-b052-4279-bc32-7d2d72151177/placeHolder":"","root-component":"","root-layout":"","query-scheme-section":"","Section/query-scheme-section/mainTitle":"","Section/query-scheme-section/subTitle":"","query-scheme-1":"默认筛选方案","QueryScheme/query-scheme-1/a14f9af1-92e8-4fe8-85ac-ef6e0f30c110":"ID","QueryScheme/query-scheme-1/a14f9af1-92e8-4fe8-85ac-ef6e0f30c110/placeHolder":"","QueryScheme/query-scheme-1/d390355f-7cd7-42c6-b199-76279a5abf61":"报销人","QueryScheme/query-scheme-1/d390355f-7cd7-42c6-b199-76279a5abf61/placeHolder":"","QueryScheme/query-scheme-1/6e524d45-5810-4b3a-bcf2-d1bafe67e2fb":"所属组织","QueryScheme/query-scheme-1/6e524d45-5810-4b3a-bcf2-d1bafe67e2fb/placeHolder":"","QueryScheme/query-scheme-1/a8aa3c47-9a1d-4bfd-a661-f03356a507b6":"制单日期","QueryScheme/query-scheme-1/a8aa3c47-9a1d-4bfd-a661-f03356a507b6/placeHolder":"","qdp-framework-component":"BE简单查询","spreadSheet1":""}};

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
          const versionKey = "bejiandancx/" + langCode + ".json";
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
