
import { Component, OnInit, Injector, AfterViewInit, ViewChild, HostBinding, TemplateRef, ElementRef, ViewContainerRef, NgModuleFactory, Input, ComponentRef} from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Form, FrameEvent, FrameEventBus, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, NgSubscription, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { ExceptionHandler } from '@farris/command-services';
import { FrameworkSessionService, UriService } from '@farris/bef';
import { FrameworkService } from '@gsp-sys/rtf-common';
import { ApplicationParamService } from '@farris/command-services';
import { EventDeclaration } from '../../events/event';
import { FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS} from '@farris/devkit';
import { WFSubmiteService } from '@gsp-wf/rtdevkit';
import { CloudprintService } from '@gsp-svc/cloudprint';
import { WFFlowchartService } from '@gsp-wf/ui-flowchart';

import { TranslateToken } from '@farris/devkit';
import { VerifyDetailService } from '@farris/ui-verify-detail';
import { AppContext, FORM_ID, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS, PARAM_TYPE_TRANSFORM_TOKEN } from '@farris/devkit';
import { BE_SESSION_HANDLING_STRATEGY_TOKEN } from '@farris/bef';
import { BACK_END_MESSAGE_HANDLER_TOKEN } from '@farris/devkit';
import { BackEndMessageHandler } from '@farris/command-services';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { MenuControllerService } from '@qdp/search-join';

import { RootViewmodel } from '../../viewmodels/rootviewmodel';
import { BejiandancxFrmRepository } from '../../models/bejiandancxfrmrepository';
import { LangService } from '../../lang/lang-pipe';

import { RootViewmodelForm } from '../../viewmodels/form/rootviewmodelform';
import { RootViewmodelUIState } from '../../viewmodels/uistate/rootviewmodeluistate';
import { Close1Handler } from '../../viewmodels/handlers/close1handler';
import { Load1Handler } from '../../viewmodels/handlers/load1handler';
import { filterQDP1Handler } from '../../viewmodels/handlers/filterqdp1handler';
import { BejiandancxFrmProxy } from '../../models/bejiandancxfrmproxy';

@Component({
    selector: 'app-rootcomponent',
    templateUrl: './rootcomponent.html',
    styleUrls: ['./rootcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'root-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: BejiandancxFrmRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        QDP_COMMAND_SERVICE_PROVIDERS,
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: RootViewmodelForm },
        { provide: UIState, useClass: RootViewmodelUIState },
        FrameworkSessionService,
        UriService,
        BejiandancxFrmProxy,
        BejiandancxFrmRepository,
        { provide: ViewModel, useClass: RootViewmodel },
        { provide: Declaration, useClass: EventDeclaration },
        { provide: TranslateToken, useExisting: LangService },
        VerifyDetailService,
        { provide: WFSubmiteService, useClass: WFSubmiteService },
        { provide: CloudprintService, useClass: CloudprintService },
        { provide: WFFlowchartService, useClass: WFFlowchartService },
        FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS,
        FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS,
    
        AppContext,
        ComponentManagerService,
        FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS,
        { provide: PARAM_TYPE_TRANSFORM_TOKEN, useValue: false },
        { provide: FORM_ID, useValue: "3ec21cfe-4485-427f-9f63-e083f6022971" },
        { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
        { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
        { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Close1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Load1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: filterQDP1Handler, multi: true },
]
})
export class RootComponent extends FrameComponent implements OnInit, AfterViewInit {

    @HostBinding('class')
    cls = 'f-page-root  ';
        @ViewChild('menu', { read: ElementRef }) public menuElement: ElementRef;
        @ViewChild(QdpViewComponent, { read: ElementRef }) public qdpViewElementRef: ElementRef;
        @ViewChild(QdpViewComponent) public qdpView: any;
    
    public viewModel: RootViewmodel;
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
        public menuController: MenuControllerService,
        private frameworkService: FrameworkService,
        private applicationParamsService: ApplicationParamService,
        private verifyService: VerifyDetailService,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
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
        this.viewModel.verifycationChanged.subscribe((verifyInformations) => {
            if (verifyInformations.length) {
                this.verifyService.createVerify({
                    'parent': this.rootElement,
                    'verifyList': verifyInformations,
                    'showType': 'all'
                });
            } else {
                this.verifyService.clear();
            }
        });
        this.applicationParamsService.parseParams(this.route, this.frameworkService, this.viewModel, () => {
            this.onFormLoad();
        })
                
    }

    ngAfterViewInit(): void {
    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
    } 
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    SectionqueryschemesectionMainTitle = this.langService.transform('Section/query-scheme-section/mainTitle', this.lang, "");
    SectionqueryschemesectionSubTitle = this.langService.transform('Section/query-scheme-section/subTitle', this.lang, "");
    QuerySolutionqueryscheme1 = this.langService.transform('query-scheme-1', this.lang, "默认筛选方案"); 
    fieldConfigsqueryscheme1 = [
        {
            "id": "a14f9af1-92e8-4fe8-85ac-ef6e0f30c110",
            "labelCode": "ID",
            "code": "ID",
            "name": this.langService.transform('QueryScheme/query-scheme-1/a14f9af1-92e8-4fe8-85ac-ef6e0f30c110', this.lang, "ID"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/a14f9af1-92e8-4fe8-85ac-ef6e0f30c110/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "d390355f-7cd7-42c6-b199-76279a5abf61",
            "labelCode": "EmployeeID_Name",
            "code": "EmployeeID_Name",
            "name": this.langService.transform('QueryScheme/query-scheme-1/d390355f-7cd7-42c6-b199-76279a5abf61', this.lang, "报销人"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/d390355f-7cd7-42c6-b199-76279a5abf61/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "6e524d45-5810-4b3a-bcf2-d1bafe67e2fb",
            "labelCode": "DomainID_name",
            "code": "DomainID_name",
            "name": this.langService.transform('QueryScheme/query-scheme-1/6e524d45-5810-4b3a-bcf2-d1bafe67e2fb', this.lang, "所属组织"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/6e524d45-5810-4b3a-bcf2-d1bafe67e2fb/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "a8aa3c47-9a1d-4bfd-a661-f03356a507b6",
            "labelCode": "BillDate.Begin;BillDate.End",
            "code": "Equal",
            "name": this.langService.transform('QueryScheme/query-scheme-1/a8aa3c47-9a1d-4bfd-a661-f03356a507b6', this.lang, "制单日期"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/a8aa3c47-9a1d-4bfd-a661-f03356a507b6/placeHolder', this.lang, ""),
            "control": {"controltype":"date","require":false,"format":"yyyy-MM-dd","returnFormat":"yyyy-MM-dd","weekSelect":false,"className":""}
        }]
    presetFieldConfigsqueryscheme1 = [
        {
            "id": "d390355f-7cd7-42c6-b199-76279a5abf61",
            "labelCode": "EmployeeID_Name",
            "code": "EmployeeID_Name",
            "name": this.langService.transform('QueryScheme/query-scheme-1/d390355f-7cd7-42c6-b199-76279a5abf61', this.lang, "报销人"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/d390355f-7cd7-42c6-b199-76279a5abf61/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "6e524d45-5810-4b3a-bcf2-d1bafe67e2fb",
            "labelCode": "DomainID_name",
            "code": "DomainID_name",
            "name": this.langService.transform('QueryScheme/query-scheme-1/6e524d45-5810-4b3a-bcf2-d1bafe67e2fb', this.lang, "所属组织"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/6e524d45-5810-4b3a-bcf2-d1bafe67e2fb/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "a8aa3c47-9a1d-4bfd-a661-f03356a507b6",
            "labelCode": "BillDate.Begin;BillDate.End",
            "code": "Equal",
            "name": this.langService.transform('QueryScheme/query-scheme-1/a8aa3c47-9a1d-4bfd-a661-f03356a507b6', this.lang, "制单日期"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/a8aa3c47-9a1d-4bfd-a661-f03356a507b6/placeHolder', this.lang, ""),
            "control": {"controltype":"date","require":false,"format":"yyyy-MM-dd","returnFormat":"yyyy-MM-dd","weekSelect":false,"className":""}
        }]
                
                
QdpFrameworkQueryNameqdpframeworkcomponent = this.langService.transform('qdp-framework-component', this.lang, "BE简单查询");
}