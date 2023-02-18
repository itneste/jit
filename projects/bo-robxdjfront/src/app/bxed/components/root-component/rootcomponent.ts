
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
import { RootViewmodel } from '../../viewmodels/rootviewmodel';
import { FybxvoRepository } from '../../models/fybxvorepository';
import { LangService } from '../../lang/lang-pipe';

import { RootViewmodelForm } from '../../viewmodels/form/rootviewmodelform';
import { RootViewmodelStateMachine } from '../../viewmodels/statemachine/rootviewmodelstatemachine';
import { RootViewmodelUIState } from '../../viewmodels/uistate/rootviewmodeluistate';
import { Load1Handler } from '../../viewmodels/handlers/load1handler';
import { Search1Handler } from '../../viewmodels/handlers/search1handler';
import { RemoveRows1Handler } from '../../viewmodels/handlers/removerows1handler';
import { Add1Handler } from '../../viewmodels/handlers/add1handler';
import { View1Handler } from '../../viewmodels/handlers/view1handler';
import { Edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { Remove1Handler } from '../../viewmodels/handlers/remove1handler';
import { Filter1Handler } from '../../viewmodels/handlers/filter1handler';
import { FybxvoProxy } from '../../models/fybxvoproxy';

@Component({
    selector: 'app-rootcomponent',
    templateUrl: './rootcomponent.html',
    styleUrls: ['./rootcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'root-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: FybxvoRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        QDP_COMMAND_SERVICE_PROVIDERS,
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: RootViewmodelForm },
        { provide: StateMachine, useClass: RootViewmodelStateMachine },
        { provide: UIState, useClass: RootViewmodelUIState },
        FrameworkSessionService,
        UriService,
        FybxvoProxy,
        FybxvoRepository,
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
        { provide: FORM_ID, useValue: "20b206f7-a28c-4143-84d4-bfb3fdc4b9eb" },
        { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
        { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
        { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Load1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Search1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: RemoveRows1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Add1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: View1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Edit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Remove1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Filter1Handler, multi: true },
]
})
export class RootComponent extends FrameComponent implements OnInit, AfterViewInit {

    @HostBinding('class')
    cls = 'f-page-root  ';
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
        private frameworkService: FrameworkService,
        private applicationParamsService: ApplicationParamService,
        private verifyService: VerifyDetailService,
        private stateMachine: StateMachine,
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
        this.stateMachine.stateChange.subscribe(() => {
            const pageHeaderToolbarToolbarItemsstates = {
            }
        this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
        });
        
        this.stateMachine.stateChange.subscribe(() => {
            
            const pageHeaderToolbarToolbarItemsvisibleStates = {
        }
            this.pageHeaderToolbarToolbarItemsVisibleStates.next(pageHeaderToolbarToolbarItemsvisibleStates);
    });

        this.pageHeaderToolbarToolbarItems.forEach((toolbarItem) => {
            
            const transformText = this.langService.transform(toolbarItem.resourceId, this.lang, toolbarItem.text);
            if (transformText) {
                toolbarItem.text = transformText;
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
        this.viewModel.Filter1(); 
    } 
    pageHeaderToolbarToolbarItems = [
    ]; 

    pageHeaderToolbarToolbarItemsStates = new BehaviorSubject({});
    pageHeaderToolbarToolbarItemsVisibleStates = new BehaviorSubject({});

    pageHeaderToolbarClickHandler (args) {
        
    }
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    sectionsToolbarStates = new BehaviorSubject({});
    sectionsToolbarVisibleStates = new BehaviorSubject({});
    querySchemeSection = {
        position: 'inHead',
        contents: [
        ]
    }
    SectionqueryschemesectionMainTitle = this.langService.transform('Section/query-scheme-section/mainTitle', this.lang, "");
    SectionqueryschemesectionSubTitle = this.langService.transform('Section/query-scheme-section/subTitle', this.lang, "");
    QuerySolutionqueryscheme1 = this.langService.transform('query-scheme-1', this.lang, "默认筛选方案"); 
    fieldConfigsqueryscheme1 = [
        {
            "id": "46850306-d3b6-480d-9a7b-9797b5c748ea",
            "labelCode": "ID",
            "code": "ID",
            "name": this.langService.transform('QueryScheme/query-scheme-1/46850306-d3b6-480d-9a7b-9797b5c748ea', this.lang, "ID"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/46850306-d3b6-480d-9a7b-9797b5c748ea/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "d90bd8f0-2b89-4609-80a0-7046d6fe2695",
            "labelCode": "org",
            "code": "org",
            "name": this.langService.transform('QueryScheme/query-scheme-1/d90bd8f0-2b89-4609-80a0-7046d6fe2695', this.lang, "组织"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/d90bd8f0-2b89-4609-80a0-7046d6fe2695/placeHolder', this.lang, ""),
            "control": {
                "controltype": "help",
                "require": false,
                "uri": "fybxvo.org",
                "textField": "name",
                "valueField": "id",
                "idField": "id",
                "helpId": "b524a702-7323-4d46-998e-5ba0c6abcd49",
                "displayType": "TreeList",
                "loadTreeDataType": 'default',
                "enableFullTree": false,
                "editable": false,
                "dialogTitle": this.langService.transform('QueryScheme/query-scheme-1/d90bd8f0-2b89-4609-80a0-7046d6fe2695/control/help/dialogTitle', this.lang, ""),
                "singleSelect": true,
                "enableCascade": false,
                "pageSize": 20,
                "pageList": "10,20,30,50,100",
                "nosearch": false,
                "expandLevel": -1,
                "context": {
                    "enableExtendLoadMethod": true
                }
            }
        },
        {
            "id": "061bdc3e-a78c-4738-9cd0-f69b5621954a",
            "labelCode": "emp",
            "code": "emp",
            "name": this.langService.transform('QueryScheme/query-scheme-1/061bdc3e-a78c-4738-9cd0-f69b5621954a', this.lang, "人员"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/061bdc3e-a78c-4738-9cd0-f69b5621954a/placeHolder', this.lang, ""),
            "control": {
                "controltype": "help",
                "require": false,
                "uri": "fybxvo.emp",
                "textField": "name",
                "valueField": "name",
                "idField": "id",
                "helpId": "915a0b20-975a-4df1-8cfd-888c3dda0009",
                "displayType": "List",
                "loadTreeDataType": 'default',
                "enableFullTree": false,
                "editable": false,
                "dialogTitle": this.langService.transform('QueryScheme/query-scheme-1/061bdc3e-a78c-4738-9cd0-f69b5621954a/control/help/dialogTitle', this.lang, ""),
                "singleSelect": true,
                "enableCascade": false,
                "pageSize": 20,
                "pageList": "10,20,30,50,100",
                "nosearch": false,
                "expandLevel": -1,
                "context": {
                    "enableExtendLoadMethod": true
                }
            }
        },
        {
            "id": "d81a2e5e-8e01-41c9-b1f1-b1bbff7a7b82",
            "labelCode": "totalmoney",
            "code": "totalmoney",
            "name": this.langService.transform('QueryScheme/query-scheme-1/d81a2e5e-8e01-41c9-b1f1-b1bbff7a7b82', this.lang, "报销总额"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/d81a2e5e-8e01-41c9-b1f1-b1bbff7a7b82/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "14b1c40f-3b25-4344-80bc-634061db02d2",
            "labelCode": "limmoney",
            "code": "limmoney",
            "name": this.langService.transform('QueryScheme/query-scheme-1/14b1c40f-3b25-4344-80bc-634061db02d2', this.lang, "报销限额"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/14b1c40f-3b25-4344-80bc-634061db02d2/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        }]
    presetFieldConfigsqueryscheme1 = [
        {
            "id": "d90bd8f0-2b89-4609-80a0-7046d6fe2695",
            "labelCode": "org",
            "code": "org",
            "name": this.langService.transform('QueryScheme/query-scheme-1/d90bd8f0-2b89-4609-80a0-7046d6fe2695', this.lang, "组织"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/d90bd8f0-2b89-4609-80a0-7046d6fe2695/placeHolder', this.lang, ""),
            "control": {
                "controltype": "help",
                "require": false,
                "uri": "fybxvo.org",
                "textField": "name",
                "valueField": "id",
                "idField": "id",
                "helpId": "b524a702-7323-4d46-998e-5ba0c6abcd49",
                "displayType": "TreeList",
                "loadTreeDataType": 'default',
                "enableFullTree": false,
                "editable": false,
                "dialogTitle": this.langService.transform('QueryScheme/query-scheme-1/d90bd8f0-2b89-4609-80a0-7046d6fe2695/control/help/dialogTitle', this.lang, ""),
                "singleSelect": true,
                "enableCascade": false,
                "pageSize": 20,
                "pageList": "10,20,30,50,100",
                "nosearch": false,
                "expandLevel": -1,
                "context": {
                    "enableExtendLoadMethod": true
                }
            }
        },
        {
            "id": "061bdc3e-a78c-4738-9cd0-f69b5621954a",
            "labelCode": "emp",
            "code": "emp",
            "name": this.langService.transform('QueryScheme/query-scheme-1/061bdc3e-a78c-4738-9cd0-f69b5621954a', this.lang, "人员"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/061bdc3e-a78c-4738-9cd0-f69b5621954a/placeHolder', this.lang, ""),
            "control": {
                "controltype": "help",
                "require": false,
                "uri": "fybxvo.emp",
                "textField": "name",
                "valueField": "name",
                "idField": "id",
                "helpId": "915a0b20-975a-4df1-8cfd-888c3dda0009",
                "displayType": "List",
                "loadTreeDataType": 'default',
                "enableFullTree": false,
                "editable": false,
                "dialogTitle": this.langService.transform('QueryScheme/query-scheme-1/061bdc3e-a78c-4738-9cd0-f69b5621954a/control/help/dialogTitle', this.lang, ""),
                "singleSelect": true,
                "enableCascade": false,
                "pageSize": 20,
                "pageList": "10,20,30,50,100",
                "nosearch": false,
                "expandLevel": -1,
                "context": {
                    "enableExtendLoadMethod": true
                }
            }
        }]
                
                
}