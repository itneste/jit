
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
  return new TranslateHttpLoader(http, '/apps/fssp/fssc/web/bo-robxdjfront/expensebill/i18n/', '.json'+ versionSuffix);
}

export const lang = {"zh-CHS":{"employeeID_EmployeeID_Name_c9b45201_gd30":"报销人","TextBox/employeeID_EmployeeID_Name_c9b45201_gd30/placeHolder":"","domainID_DomainID_name_0c87bed3_kvw3":"所属组织","TextBox/domainID_DomainID_name_0c87bed3_kvw3/placeHolder":"","projectMgr_ProjectMgr_Name_1394ebaf_j6g0":"项目经理","TextBox/projectMgr_ProjectMgr_Name_1394ebaf_j6g0/placeHolder":"","billNote_70100057_i7j5":"报销说明","MultiTextBox/billNote_70100057_i7j5/placeHolder":"","TextBox/billDate_d570d5e9_cl54/placeHolder":"","fileName_8e1c01a2_bkif":"附件名称","GridField/fileName_8e1c01a2_bkif/editor/fileName_8e1c01a2_ifub":"文本","GridField/fileName_8e1c01a2_bkif/editor/TextBox/fileName_8e1c01a2_ifub/placeHolder":"","filePath_9cd6969a_oxcs":"附件路径","GridField/filePath_9cd6969a_oxcs/editor/filePath_9cd6969a_uwyb":"文本","GridField/filePath_9cd6969a_oxcs/editor/TextBox/filePath_9cd6969a_uwyb/placeHolder":"","fileSize_e4325272_ump5":"附件大小","GridField/fileSize_e4325272_ump5/editor/fileSize_e4325272_1d8i":"数值框","GridField/fileSize_e4325272_ump5/editor/NumberSpinner/fileSize_e4325272_1d8i/placeHolder":"","7ea456d6-60ea-4337-a6e3-b1de48e4dc1c":"高级信息","FieldSet/7ea456d6-60ea-4337-a6e3-b1de48e4dc1c/collapseText":"","FieldSet/7ea456d6-60ea-4337-a6e3-b1de48e4dc1c/expandText":"","billDate_d570d5e9_cl54":"制单日期","DateBox/billDate_d570d5e9_cl54/placeHolder":"","TextBox/projectID_4f86bd9a_4ytt/placeHolder":"","root-component":"","root-layout":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-save":"保存","button-cancel":"取消","button-approve":"提交审批","button-cancel-approve":"取消提交审批","main-container":"","like-card-container":"","basic-form-component-ref":"","detail-container":"","detail-section":"","Section/detail-section/mainTitle":"","Section/detail-section/subTitle":"","detail-tab":"","items-tab-page":"报销明细","items-component-ref":"","items-tab-toolbar":"","itemsAddButton":"新增","itemsRemoveButton":"删除","files-tab-page":"附件列表","files-component-ref":"","files-tab-toolbar":"","filesAddButton":"新增","filesRemoveButton":"删除","tabToolbarItem_5910":"上传","tabToolbarItem_1264":"下载","tabToolbarItem_9524":"批量下载","tabToolbarItem_6582":"预览","basic-form-component":"","basic-form-section":"","Section/basic-form-section/mainTitle":"基本信息","Section/basic-form-section/subTitle":"","basic-form-layout":"","885eab98-7ccf-4c93-9fa1-b103dcd19d73":"基础信息","FieldSet/885eab98-7ccf-4c93-9fa1-b103dcd19d73/collapseText":"","FieldSet/885eab98-7ccf-4c93-9fa1-b103dcd19d73/expandText":"","domainID_DomainID_name_0c87bed3_ntks":"所属组织","LookupEdit/domainID_DomainID_name_0c87bed3_ntks/placeHolder":"","LookupEdit/domainID_DomainID_name_0c87bed3_ntks/dialogTitle":"","employeeID_EmployeeID_Name_c9b45201_0ywt":"报销人","LookupEdit/employeeID_EmployeeID_Name_c9b45201_0ywt/placeHolder":"","LookupEdit/employeeID_EmployeeID_Name_c9b45201_0ywt/dialogTitle":"","billCode_f9d42426_uf3d":"单据编号","TextBox/billCode_f9d42426_uf3d/placeHolder":"","totalSum_25264603_rl36":"报账金额","NumberSpinner/totalSum_25264603_rl36/placeHolder":"","billType_559e98ea_qx5m":"报销类型","EnumField/billType_559e98ea_qx5m/placeHolder":"","EnumField/billType_559e98ea_qx5m/enumData/JT":"交通费","EnumField/billType_559e98ea_qx5m/enumData/CL":"差旅费","EnumField/billType_559e98ea_qx5m/enumData/SJ":"手机费","f48cbecf-eee0-493a-bcb0-aa0ad3806b7d":"高级信息","FieldSet/f48cbecf-eee0-493a-bcb0-aa0ad3806b7d/collapseText":"","FieldSet/f48cbecf-eee0-493a-bcb0-aa0ad3806b7d/expandText":"","billDate_3eddf18e_w5ws":"制单日期","DateBox/billDate_3eddf18e_w5ws/placeHolder":"","projectMgr_ProjectMgr_Name_1394ebaf_jp1t":"项目经理","LookupEdit/projectMgr_ProjectMgr_Name_1394ebaf_jp1t/placeHolder":"","LookupEdit/projectMgr_ProjectMgr_Name_1394ebaf_jp1t/dialogTitle":"","projectID_4f86bd9a_4ytt":"所属项目","LanguageTextBox/projectID_4f86bd9a_4ytt/placeHolder":"","billStatus_BillState_5c977852_irip":"状态","EnumField/billStatus_BillState_5c977852_irip/placeHolder":"","EnumField/billStatus_BillState_5c977852_irip/enumData/Billing":"制单","EnumField/billStatus_BillState_5c977852_irip/enumData/SubmitApproval":"提交审批","EnumField/billStatus_BillState_5c977852_irip/enumData/Approved":"审批通过","EnumField/billStatus_BillState_5c977852_irip/enumData/ApprovalNotPassed":"审批不通过","billNote_70100057_nqkf":"报销说明","RichTextBox/billNote_70100057_nqkf/placeHolder":"","items-component":"","items-component-layout":"","dataGrid_items":"","DataGrid/dataGrid_items/lineNumberTitle":"","DataGrid/dataGrid_items/OperateEditButton":"编辑","DataGrid/dataGrid_items/OperateDeleteButton":"删除","DataGrid/dataGrid_items/OperateColumn":"操作","billDetailDate_57c21192_ztrj":"费用日期","GridField/billDetailDate_57c21192_ztrj/editor/billDetailDate_57c21192_ogl5":"日期选择","GridField/billDetailDate_57c21192_ztrj/editor/DateBox/billDetailDate_57c21192_ogl5/placeHolder":"","billDetailAmount_5f8e1561_ebx1":"费用金额","GridField/billDetailAmount_5f8e1561_ebx1/editor/billDetailAmount_5f8e1561_0dvv":"数值框","GridField/billDetailAmount_5f8e1561_ebx1/editor/NumberSpinner/billDetailAmount_5f8e1561_0dvv/placeHolder":"","detailNote_37529f62_izd1":"费用说明","GridField/detailNote_37529f62_izd1/editor/detailNote_37529f62_pdf7":"多行文本框","GridField/detailNote_37529f62_izd1/editor/MultiTextBox/detailNote_37529f62_pdf7/placeHolder":"","invoiceNO_0d97df4c_q3s9":"发票号码","GridField/invoiceNO_0d97df4c_q3s9/editor/invoiceNO_0d97df4c_j78n":"文本","GridField/invoiceNO_0d97df4c_q3s9/editor/TextBox/invoiceNO_0d97df4c_j78n/placeHolder":"","files-component":"","files-component-layout":"","dataGrid_files":"","DataGrid/dataGrid_files/lineNumberTitle":"","DataGrid/dataGrid_files/OperateEditButton":"编辑","DataGrid/dataGrid_files/OperateDeleteButton":"删除","DataGrid/dataGrid_files/OperateColumn":"操作","fileInfo_FileName_905c5431_8m01":"附件名称","GridField/fileInfo_FileName_905c5431_8m01/editor/fileInfo_FileName_905c5431_02yz":"附件名称","GridField/fileInfo_FileName_905c5431_8m01/editor/TextBox/fileInfo_FileName_905c5431_02yz/placeHolder":"","fileInfo_FileSize_905c5431_6bzx":"附件大小","GridField/fileInfo_FileSize_905c5431_6bzx/editor/fileInfo_FileSize_905c5431_831u":"附件大小","GridField/fileInfo_FileSize_905c5431_6bzx/editor/NumberSpinner/fileInfo_FileSize_905c5431_831u/placeHolder":"","fileInfo_FileCreateTime_905c5431_4lhi":"附件上传时间","GridField/fileInfo_FileCreateTime_905c5431_4lhi/editor/fileInfo_FileCreateTime_905c5431_rj46":"附件上传时间","GridField/fileInfo_FileCreateTime_905c5431_4lhi/editor/DateBox/fileInfo_FileCreateTime_905c5431_rj46/placeHolder":""}};

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
          const versionKey = "expensebill/" + langCode + ".json";
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
