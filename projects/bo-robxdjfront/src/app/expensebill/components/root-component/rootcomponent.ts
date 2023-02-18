
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
import { ROBXDJRepository } from '../../models/robxdjrepository';
import { LangService } from '../../lang/lang-pipe';

import { RootViewmodelForm } from '../../viewmodels/form/rootviewmodelform';
import { RootViewmodelStateMachine } from '../../viewmodels/statemachine/rootviewmodelstatemachine';
import { RootViewmodelUIState } from '../../viewmodels/uistate/rootviewmodeluistate';
import { Load1Handler } from '../../viewmodels/handlers/load1handler';
import { LoadAndAdd1Handler } from '../../viewmodels/handlers/loadandadd1handler';
import { LoadAndView1Handler } from '../../viewmodels/handlers/loadandview1handler';
import { LoadAndEdit1Handler } from '../../viewmodels/handlers/loadandedit1handler';
import { Add1Handler } from '../../viewmodels/handlers/add1handler';
import { Edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { Save1Handler } from '../../viewmodels/handlers/save1handler';
import { Cancel1Handler } from '../../viewmodels/handlers/cancel1handler';
import { ChangeItem1Handler } from '../../viewmodels/handlers/changeitem1handler';
import { ChangeItem2Handler } from '../../viewmodels/handlers/changeitem2handler';
import { submitWithBizDefKey1Handler } from '../../viewmodels/handlers/submitwithbizdefkey1handler';
import { cancelSubmitWithDataId1Handler } from '../../viewmodels/handlers/cancelsubmitwithdataid1handler';
import { rootviewmodelUploadAndBatchAddRows1Handler } from '../../viewmodels/handlers/rootviewmodeluploadandbatchaddrows1handler';
import { rootviewmodeldownload1Handler } from '../../viewmodels/handlers/rootviewmodeldownload1handler';
import { rootviewmodelPreviewByAttachmentInfoFieldPath1Handler } from '../../viewmodels/handlers/rootviewmodelpreviewbyattachmentinfofieldpath1handler';
import { rootviewmodelBatchDownloadByDataIds1Handler } from '../../viewmodels/handlers/rootviewmodelbatchdownloadbydataids1handler';
import { ROBXDJProxy } from '../../models/robxdjproxy';

@Component({
    selector: 'app-rootcomponent',
    templateUrl: './rootcomponent.html',
    styleUrls: ['./rootcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'root-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: ROBXDJRepository },
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
        ROBXDJProxy,
        ROBXDJRepository,
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
        { provide: FORM_ID, useValue: "a68c7dc8-4412-40f0-afdc-89f8740f8f84" },
        { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
        { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
        { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Load1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndAdd1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndView1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndEdit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Add1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Edit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Save1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Cancel1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangeItem1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangeItem2Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: submitWithBizDefKey1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: cancelSubmitWithDataId1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelUploadAndBatchAddRows1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodeldownload1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelPreviewByAttachmentInfoFieldPath1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelBatchDownloadByDataIds1Handler, multi: true },
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
                'button-add': !this.viewModel.stateMachine['canAdd'],
                'button-edit': !this.viewModel.stateMachine['canEdit'],
                'button-save': !this.viewModel.stateMachine['canSave'],
                'button-cancel': !this.viewModel.stateMachine['canCancel'],
                'button-approve': !this.viewModel.stateMachine['canApprove'],
                'button-cancel-approve': !this.viewModel.stateMachine['canCancelApprove'],
            }
        this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
        });
        
        this.stateMachine.stateChange.subscribe(() => {
            
            const pageHeaderToolbarToolbarItemsvisibleStates = {
            'button-add': true,
            'button-edit': true,
            'button-save': true,
            'button-cancel': true,
            'button-approve': true,
            'button-cancel-approve': true,
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
                
        this.stateMachine.stateChange.subscribe(() => {
    
        const states = {
                'itemsAddButton': !this.viewModel.stateMachine['canAddDetail'],
                'itemsRemoveButton': !this.viewModel.stateMachine['canRemoveDetail'],
                'filesAddButton': !this.viewModel.stateMachine['canAddDetail'],
                'filesRemoveButton': !this.viewModel.stateMachine['canRemoveDetail'],
                'tabToolbarItem_5910': false,
                'tabToolbarItem_1264': false,
                'tabToolbarItem_9524': false,
                'tabToolbarItem_6582': false,
        }; 
        this.tabsToolbarStates.next(states);
        });
        this.stateMachine.stateChange.subscribe(() => {
    
        const visibleStates = {
            'itemsAddButton': true,
            'itemsRemoveButton': true,
            'filesAddButton': true,
            'filesRemoveButton': true,
            'tabToolbarItem_5910': true,
            'tabToolbarItem_1264': true,
            'tabToolbarItem_9524': true,
            'tabToolbarItem_6582': true,
        };
        this.tabsToolbarVisibleStates.next(visibleStates);
        });
    }

    ngAfterViewInit(): void {
    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
        this.viewModel.Load1(); 
    } 
    pageHeaderToolbarToolbarItems = [{
        "id": "button-add",
        "text": this.langService.transform('button-add', this.lang, "新增"),
        "resourceId": "button-add",
        "isDP": false,
        "class": "btn-primary",
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-edit",
        "text": this.langService.transform('button-edit', this.lang, "编辑"),
        "resourceId": "button-edit",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-save",
        "text": this.langService.transform('button-save', this.lang, "保存"),
        "resourceId": "button-save",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-cancel",
        "text": this.langService.transform('button-cancel', this.lang, "取消"),
        "resourceId": "button-cancel",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-approve",
        "text": this.langService.transform('button-approve', this.lang, "提交审批"),
        "resourceId": "button-approve",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-cancel-approve",
        "text": this.langService.transform('button-cancel-approve', this.lang, "取消提交审批"),
        "resourceId": "button-cancel-approve",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        }
    ]; 

    pageHeaderToolbarToolbarItemsStates = new BehaviorSubject({});
    pageHeaderToolbarToolbarItemsVisibleStates = new BehaviorSubject({});

    pageHeaderToolbarClickHandler (args) {
        
        switch (args.id) {

            case 'button-add': 
                this.viewModel.Add1(args);
                break;
            case 'button-edit': 
                this.viewModel.Edit1(args);
                break;
            case 'button-save': 
                this.viewModel.Save1(args);
                break;
            case 'button-cancel': 
                this.viewModel.Cancel1(args);
                break;
            case 'button-approve': 
                this.viewModel.submitWithBizDefKey1(args);
                break;
            case 'button-cancel-approve': 
                this.viewModel.cancelSubmitWithDataId1(args);
                break;
        }
    }
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    itemsTabToolbar = {
        position: 'inHead',
        contents: [
            {
                id: 'itemsAddButton',
                disable: !this.viewModel.stateMachine['canAddDetail'],
                visible: true,
                title: this.langService.transform('itemsAddButton', this.lang, "新增"),
                click: () => { this.viewModel.itemsComponentViewmodel.itemsAddItem1(); },
                appearance: {
                    "class": "btn btn-secondary f-btn-ml"
                }
            },
            {
                id: 'itemsRemoveButton',
                disable: !this.viewModel.stateMachine['canRemoveDetail'],
                visible: true,
                title: this.langService.transform('itemsRemoveButton', this.lang, "删除"),
                click: () => { this.viewModel.itemsComponentViewmodel.itemsRemoveItem1(); },
                appearance: {
                    "class": "btn btn-secondary f-btn-ml"
                }
            }
        ]
    }
    filesTabToolbar = {
        position: 'inHead',
        contents: [
            {
                id: 'filesAddButton',
                disable: !this.viewModel.stateMachine['canAddDetail'],
                visible: true,
                title: this.langService.transform('filesAddButton', this.lang, "新增"),
                click: () => { this.viewModel.filesComponentViewmodel.filesAddItem1(); },
                appearance: {
                    "class": "btn btn-secondary f-btn-ml"
                }
            },
            {
                id: 'filesRemoveButton',
                disable: !this.viewModel.stateMachine['canRemoveDetail'],
                visible: true,
                title: this.langService.transform('filesRemoveButton', this.lang, "删除"),
                click: () => { this.viewModel.filesComponentViewmodel.filesRemoveItem1(); },
                appearance: {
                    "class": "btn btn-secondary f-btn-ml"
                }
            },
            {
                id: 'tabToolbarItem_5910',
                disable: false,
                visible: true,
                title: this.langService.transform('tabToolbarItem_5910', this.lang, "上传"),
                click: () => { this.viewModel.rootviewmodelUploadAndBatchAddRows1(); },
                appearance: {
                    "class": "btn btn-secondary f-btn-ml"
                }
            },
            {
                id: 'tabToolbarItem_1264',
                disable: false,
                visible: true,
                title: this.langService.transform('tabToolbarItem_1264', this.lang, "下载"),
                click: () => { this.viewModel.rootviewmodeldownload1(); },
                appearance: {
                    "class": "btn btn-secondary f-btn-ml"
                }
            },
            {
                id: 'tabToolbarItem_9524',
                disable: false,
                visible: true,
                title: this.langService.transform('tabToolbarItem_9524', this.lang, "批量下载"),
                click: () => { this.viewModel.rootviewmodelBatchDownloadByDataIds1(); },
                appearance: {
                    "class": "btn btn-secondary f-btn-ml"
                }
            },
            {
                id: 'tabToolbarItem_6582',
                disable: false,
                visible: true,
                title: this.langService.transform('tabToolbarItem_6582', this.lang, "预览"),
                click: () => { this.viewModel.rootviewmodelPreviewByAttachmentInfoFieldPath1(); },
                appearance: {
                    "class": "btn btn-secondary f-btn-ml"
                }
            }
        ]
    }
    itemstabpage = this.langService.transform('items-tab-page', this.lang, "报销明细");
    filestabpage = this.langService.transform('files-tab-page', this.lang, "附件列表");
    sectionsToolbarStates = new BehaviorSubject({});
    sectionsToolbarVisibleStates = new BehaviorSubject({});
    detailSection = {
        position: 'inHead',
        contents: [
        ]
    }
    SectiondetailsectionMainTitle = this.langService.transform('Section/detail-section/mainTitle', this.lang, "");
    SectiondetailsectionSubTitle = this.langService.transform('Section/detail-section/subTitle', this.lang, "");
}