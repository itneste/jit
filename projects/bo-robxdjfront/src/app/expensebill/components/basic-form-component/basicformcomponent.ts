
import { Component, OnInit, Injector, AfterViewInit, ViewChild, HostBinding, TemplateRef, ElementRef, ViewContainerRef, NgModuleFactory, Input, ComponentRef} from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Form, FrameEvent, FrameEventBus, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, NgSubscription, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';

import { LookupGridComponent } from '@farris/ui-lookup';

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { BasicFormViewmodel } from '../../viewmodels/basicformviewmodel';
import { ROBXDJRepository } from '../../models/robxdjrepository';
import { LangService } from '../../lang/lang-pipe';

import { BasicFormViewmodelForm } from '../../viewmodels/form/basicformviewmodelform';
import { BasicFormViewmodelUIState } from '../../viewmodels/uistate/basicformviewmodeluistate';
import { basicformviewmodelclearZuzhi1Handler } from '../../viewmodels/handlers/basicformviewmodelclearzuzhi1handler';
import { basicformviewmodelbeforEmp1Handler } from '../../viewmodels/handlers/basicformviewmodelbeforemp1handler';
import { ExpenseBillFrmBxdjServiceService as ExpenseBillFrmBxdjServiceService1 } from '../../services/expensebill_frm_bxdjservice';

@Component({
    selector: 'app-basicformcomponent',
    templateUrl: './basicformcomponent.html',
    styleUrls: ['./basicformcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'basic-form-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: ROBXDJRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        QDP_COMMAND_SERVICE_PROVIDERS,
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: BasicFormViewmodelForm },
        { provide: UIState, useClass: BasicFormViewmodelUIState },
        ExpenseBillFrmBxdjServiceService1,
        { provide: ViewModel, useClass: BasicFormViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: basicformviewmodelclearZuzhi1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: basicformviewmodelbeforEmp1Handler, multi: true },
]
})
export class BasicFormComponent extends FrameComponent implements OnInit, AfterViewInit {
    @ViewChild('domainID_DomainID_name_0c87bed3_ntks')
    domainID_DomainID_name_0c87bed3_ntks: LookupGridComponent;
            
    @ViewChild('employeeID_EmployeeID_Name_c9b45201_0ywt')
    employeeID_EmployeeID_Name_c9b45201_0ywt: LookupGridComponent;
            
    @ViewChild('projectMgr_ProjectMgr_Name_1394ebaf_jp1t')
    projectMgr_ProjectMgr_Name_1394ebaf_jp1t: LookupGridComponent;
            

    @HostBinding('class')
    cls = 'f-struct-wrapper ';
    public viewModel: BasicFormViewmodel;
    lang: string ="";
    size: any = {};
    enabledLanguageList: any[] = [];
        @ViewChild(ConditionDialogComponent) conditionDialog: ConditionDialogComponent;
        @ViewChild(QdpViewComponent) qdpViewComponent: QdpViewComponent;
        @ViewChild(QueryFrameworkLayoutComponent) queryFrameworkLayoutComponent: QueryFrameworkLayoutComponent;
    constructor(
        private wizardSer: WizardService,
        private keybindingService: KeybindingService,
        private langService: LangService,
        private route: ActivatedRoute,
        private router: Router,
        private rootElement: ElementRef,
        private localizationService: LocalizationService,
        private frmI18nSettingService: FrmI18nSettingService,
        private focusInvalidService: FocusInvalidService,
        private componentManagerService: ComponentManagerService,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        this.viewModel.verifycationChanged.subscribe((verifyInformations: any) => {
            this.focusInvalidService.focusInvalidInput(verifyInformations, this.rootElement);
        });

        if (this.frmI18nSettingService) {
            const i18nSetting = this.frmI18nSettingService.getSetting();
            if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                i18nSetting.languages.forEach((item) => {
                    this.enabledLanguageList.push({
                        code: item.code,
                        name: item.name
                    });
                });
            } else {
                console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                this.enabledLanguageList.push({ "code": "en", "name": "English" });
                this.enabledLanguageList.push({ "code": "zh-CHS", "name": "中文简体" });
            }
        }
    }
    ngOnInit() {
            
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach((keyBinding, method) => {
                this.keybindingService.register(keyBinding, () => {
                    return this.viewModel[method]();
                });
            });
        }
        this.onFormLoad(); 
    }

    ngAfterViewInit(): void {
        this.componentManagerService.appendControl('domainID_DomainID_name_0c87bed3_ntks', this.domainID_DomainID_name_0c87bed3_ntks);
        this.componentManagerService.appendControl('employeeID_EmployeeID_Name_c9b45201_0ywt', this.employeeID_EmployeeID_Name_c9b45201_0ywt);
        this.componentManagerService.appendControl('projectMgr_ProjectMgr_Name_1394ebaf_jp1t', this.projectMgr_ProjectMgr_Name_1394ebaf_jp1t);
    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
    } 
    employeeIDEmployeeIDNameC9b452010ywtLookupPicking = (data) => {
        return this.viewModel.basicformviewmodelbeforEmp1.call(this, data);
    }; 
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    FieldSetTitle885eab987ccf4c939fa1b103dcd19d73 = this.langService.transform('885eab98-7ccf-4c93-9fa1-b103dcd19d73', this.lang, "基础信息");
    FieldSetCollapseText885eab987ccf4c939fa1b103dcd19d73 = this.langService.transform('FieldSet/885eab98-7ccf-4c93-9fa1-b103dcd19d73/collapseText', this.lang, "");
    FieldSetExpandText885eab987ccf4c939fa1b103dcd19d73 = this.langService.transform('FieldSet/885eab98-7ccf-4c93-9fa1-b103dcd19d73/expandText', this.lang, "");
    FieldSetTitlef48cbecfeee0493abcb0aa0ad3806b7d = this.langService.transform('f48cbecf-eee0-493a-bcb0-aa0ad3806b7d', this.lang, "高级信息");
    FieldSetCollapseTextf48cbecfeee0493abcb0aa0ad3806b7d = this.langService.transform('FieldSet/f48cbecf-eee0-493a-bcb0-aa0ad3806b7d/collapseText', this.lang, "");
    FieldSetExpandTextf48cbecfeee0493abcb0aa0ad3806b7d = this.langService.transform('FieldSet/f48cbecf-eee0-493a-bcb0-aa0ad3806b7d/expandText', this.lang, "");
    SectionbasicformsectionMainTitle = this.langService.transform('Section/basic-form-section/mainTitle', this.lang, "基本信息");
    SectionbasicformsectionSubTitle = this.langService.transform('Section/basic-form-section/subTitle', this.lang, "");
    LookupEditdomainIDDomainIDname0c87bed3ntksDialogTitle = this.langService.transform('LookupEdit/domainID_DomainID_name_0c87bed3_ntks/dialogTitle', this.lang, "");
    domainID_DomainID_name_0c87bed3_ntks_PlaceHolder = this.langService.transform('LookupEdit/domainID_DomainID_name_0c87bed3_ntks/placeHolder', this.lang, "");
    LookupEditemployeeIDEmployeeIDNamec9b452010ywtDialogTitle = this.langService.transform('LookupEdit/employeeID_EmployeeID_Name_c9b45201_0ywt/dialogTitle', this.lang, "");
    employeeID_EmployeeID_Name_c9b45201_0ywt_PlaceHolder = this.langService.transform('LookupEdit/employeeID_EmployeeID_Name_c9b45201_0ywt/placeHolder', this.lang, "");
    LookupEditprojectMgrProjectMgrName1394ebafjp1tDialogTitle = this.langService.transform('LookupEdit/projectMgr_ProjectMgr_Name_1394ebaf_jp1t/dialogTitle', this.lang, "");
    projectMgr_ProjectMgr_Name_1394ebaf_jp1t_PlaceHolder = this.langService.transform('LookupEdit/projectMgr_ProjectMgr_Name_1394ebaf_jp1t/placeHolder', this.lang, "");

    totalSum_25264603_rl36_PlaceHolder = this.langService.transform('NumericBox/totalSum_25264603_rl36/placeHolder', this.lang, "");
    totalSum25264603Rl36TextOptions = {
        "type": "number",
        "useThousands": true,
        "precision": 2,
    }
    billDate_3eddf18e_w5ws_PlaceHolder = this.langService.transform('DateBox/billDate_3eddf18e_w5ws/placeHolder', this.lang, "");
    billType_559e98ea_qx5mEnumData = [
        {
            "name": this.langService.transform('EnumField/billType_559e98ea_qx5m/enumData/JT', this.lang, "交通费"),
            "value": "JT"
        },
        {
            "name": this.langService.transform('EnumField/billType_559e98ea_qx5m/enumData/CL', this.lang, "差旅费"),
            "value": "CL"
        },
        {
            "name": this.langService.transform('EnumField/billType_559e98ea_qx5m/enumData/SJ', this.lang, "手机费"),
            "value": "SJ"
        }
    ];
    billType_559e98ea_qx5m_PlaceHolder = this.langService.transform('EnumField/billType_559e98ea_qx5m/placeHolder', this.lang, "");
    billStatus_BillState_5c977852_iripEnumData = [
        {
            "name": this.langService.transform('EnumField/billStatus_BillState_5c977852_irip/enumData/Billing', this.lang, "制单"),
            "value": "Billing"
        },
        {
            "name": this.langService.transform('EnumField/billStatus_BillState_5c977852_irip/enumData/SubmitApproval', this.lang, "提交审批"),
            "value": "SubmitApproval"
        },
        {
            "name": this.langService.transform('EnumField/billStatus_BillState_5c977852_irip/enumData/Approved', this.lang, "审批通过"),
            "value": "Approved"
        },
        {
            "name": this.langService.transform('EnumField/billStatus_BillState_5c977852_irip/enumData/ApprovalNotPassed', this.lang, "审批不通过"),
            "value": "ApprovalNotPassed"
        }
    ];
    billStatus_BillState_5c977852_irip_PlaceHolder = this.langService.transform('EnumField/billStatus_BillState_5c977852_irip/placeHolder', this.lang, "");
    billCode_f9d42426_uf3d_PlaceHolder = this.langService.transform('TextBox/billCode_f9d42426_uf3d/placeHolder', this.lang, "");
}