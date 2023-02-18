
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
import { Search1Handler } from '../../viewmodels/handlers/search1handler';
import { RemoveRows1Handler } from '../../viewmodels/handlers/removerows1handler';
import { Add1Handler } from '../../viewmodels/handlers/add1handler';
import { View1Handler } from '../../viewmodels/handlers/view1handler';
import { Edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { Remove1Handler } from '../../viewmodels/handlers/remove1handler';
import { Filter1Handler } from '../../viewmodels/handlers/filter1handler';
import { submitWithBizDefKey1Handler } from '../../viewmodels/handlers/submitwithbizdefkey1handler';
import { cancelSubmitWithDataId1Handler } from '../../viewmodels/handlers/cancelsubmitwithdataid1handler';
import { rootviewmodelprintByIds1Handler } from '../../viewmodels/handlers/rootviewmodelprintbyids1handler';
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
        { provide: FORM_ID, useValue: "925550cd-bd30-4f7f-8e49-64db7b96424b" },
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
        { provide: COMMAND_HANDLERS_TOKEN, useClass: submitWithBizDefKey1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: cancelSubmitWithDataId1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelprintByIds1Handler, multi: true },
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
                'button-view': !this.viewModel.stateMachine['canView'],
                'button-delete': !this.viewModel.stateMachine['canRemove'],
                'button-approve': !this.viewModel.stateMachine['canApprove'],
                'button-cancel-approve': !this.viewModel.stateMachine['canCancelApprove'],
                'toolBarItem_3988': false,
                'toolBarItem_0236': !this.viewModel.stateMachine['canAudit'],
                'toolBarItem_8535': !this.viewModel.stateMachine['canAudit'],
                'toolBarItem_1154': false,
            }
        this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
        });
        
        this.stateMachine.stateChange.subscribe(() => {
            
            const pageHeaderToolbarToolbarItemsvisibleStates = {
            'button-add': true,
            'button-edit': true,
            'button-view': true,
            'button-delete': true,
            'button-approve': true,
            'button-cancel-approve': true,
            'toolBarItem_3988': true,
            'toolBarItem_0236': true,
            'toolBarItem_8535': true,
            'toolBarItem_1154': true,
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
        "id": "button-view",
        "text": this.langService.transform('button-view', this.lang, "查看"),
        "resourceId": "button-view",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-delete",
        "text": this.langService.transform('button-delete', this.lang, "删除"),
        "resourceId": "button-delete",
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
        },{
        "id": "toolBarItem_3988",
        "text": this.langService.transform('toolBarItem_3988', this.lang, "打印"),
        "resourceId": "toolBarItem_3988",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "toolBarItem_0236",
        "text": this.langService.transform('toolBarItem_0236', this.lang, "稽核通过"),
        "resourceId": "toolBarItem_0236",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "toolBarItem_8535",
        "text": this.langService.transform('toolBarItem_8535', this.lang, "稽核不通过"),
        "resourceId": "toolBarItem_8535",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "toolBarItem_1154",
        "text": this.langService.transform('toolBarItem_1154', this.lang, "查看变更日志"),
        "resourceId": "toolBarItem_1154",
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
            case 'button-view': 
                this.viewModel.View1(args);
                break;
            case 'button-delete': 
                this.viewModel.Remove1(args);
                break;
            case 'button-approve': 
                this.viewModel.submitWithBizDefKey1(args);
                break;
            case 'button-cancel-approve': 
                this.viewModel.cancelSubmitWithDataId1(args);
                break;
            case 'toolBarItem_3988': 
                this.viewModel.rootviewmodelprintByIds1(args);
                break;
            case 'toolBarItem_0236': 
                this.viewModel.dataGridComponentViewmodel.datagridcomponentviewmodelAuditBill1(args);
                break;
            case 'toolBarItem_8535': 
                this.viewModel.dataGridComponentViewmodel.datagridcomponentviewmodelAuditBill2(args);
                break;
            case 'toolBarItem_1154': 
                this.viewModel.dataGridComponentViewmodel.datagridcomponentviewmodelshowChangeLog1(args);
                break;
        }
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
            "id": "66ed1973-9baf-4088-b439-99d16ab8a3e5",
            "labelCode": "ID",
            "code": "ID",
            "name": this.langService.transform('QueryScheme/query-scheme-1/66ed1973-9baf-4088-b439-99d16ab8a3e5', this.lang, "ID"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/66ed1973-9baf-4088-b439-99d16ab8a3e5/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "40ab6af5-3e4d-4e59-95c7-5d94b7e6927d",
            "labelCode": "Version",
            "code": "Version",
            "name": this.langService.transform('QueryScheme/query-scheme-1/40ab6af5-3e4d-4e59-95c7-5d94b7e6927d', this.lang, "Version"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/40ab6af5-3e4d-4e59-95c7-5d94b7e6927d/placeHolder', this.lang, ""),
            "control": {"controltype":"date","require":false,"format":"yyyy-MM-dd","className":"","weekSelect":false,"returnFormat":"yyyy-MM-dd"}
        },
        {
            "id": "769d96b8-0101-468f-ae3f-40c76c0f06b0",
            "labelCode": "BillStatus.BillState",
            "code": "BillState",
            "name": this.langService.transform('QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0', this.lang, "状态"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/placeHolder', this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "Billing",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Billing', this.lang, "制单")
                    },
                    {
                        "value": "SubmitApproval",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/control/enumValues/SubmitApproval', this.lang, "提交审批")
                    },
                    {
                        "value": "Approved",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Approved', this.lang, "审批通过")
                    },
                    {
                        "value": "ApprovalNotPassed",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/control/enumValues/ApprovalNotPassed', this.lang, "审批不通过")
                    }]
            }
        },
        {
            "id": "8e877e37-ad8f-4da3-a430-c8a7f2162135",
            "labelCode": "ProcessInstance.ProcessInstance",
            "code": "ProcessInstance",
            "name": this.langService.transform('QueryScheme/query-scheme-1/8e877e37-ad8f-4da3-a430-c8a7f2162135', this.lang, "流程实例"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/8e877e37-ad8f-4da3-a430-c8a7f2162135/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "dd508847-8491-40f0-9f38-1b5e96a5d367",
            "labelCode": "EmployeeID.EmployeeID",
            "code": "EmployeeID",
            "name": this.langService.transform('QueryScheme/query-scheme-1/dd508847-8491-40f0-9f38-1b5e96a5d367', this.lang, "报销人员"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/dd508847-8491-40f0-9f38-1b5e96a5d367/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":"","modalConfig":{"modalCmp":null,"mapFields":null,"showHeader":true,"title":"","showCloseButton":true,"showMaxButton":true,"width":800,"height":600,"showFooterButtons":true,"footerButtons":[]}}
        },
        {
            "id": "5b7e6604-4932-4d3e-859c-1c6ef73c0e0e",
            "labelCode": "EmployeeID.EmployeeID_Code",
            "code": "Code",
            "name": this.langService.transform('QueryScheme/query-scheme-1/5b7e6604-4932-4d3e-859c-1c6ef73c0e0e', this.lang, "编号"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/5b7e6604-4932-4d3e-859c-1c6ef73c0e0e/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "2d7db0e1-cfc2-491d-818c-432bf64eceec",
            "labelCode": "EmployeeID.EmployeeID_Name",
            "code": "Name",
            "name": this.langService.transform('QueryScheme/query-scheme-1/2d7db0e1-cfc2-491d-818c-432bf64eceec', this.lang, "报销人"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/2d7db0e1-cfc2-491d-818c-432bf64eceec/placeHolder', this.lang, ""),
            "control": {
                "controltype": "help",
                "require": false,
                "uri": "ROBXDJ.employeeID_EmployeeID_Name",
                "textField": "name",
                "valueField": "id",
                "idField": "id",
                "helpId": "915a0b20-975a-4df1-8cfd-888c3dda0009",
                "displayType": "List",
                "loadTreeDataType": 'default',
                "enableFullTree": false,
                "editable": false,
                "dialogTitle": this.langService.transform('QueryScheme/query-scheme-1/2d7db0e1-cfc2-491d-818c-432bf64eceec/control/help/dialogTitle', this.lang, ""),
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
            "id": "95ccaa3e-72ab-43e5-840b-536556756e5b",
            "labelCode": "DomainID.DomainID",
            "code": "DomainID",
            "name": this.langService.transform('QueryScheme/query-scheme-1/95ccaa3e-72ab-43e5-840b-536556756e5b', this.lang, "所属部门"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/95ccaa3e-72ab-43e5-840b-536556756e5b/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "a1f04b3a-2701-4e09-a81a-9f29d6b51dcb",
            "labelCode": "DomainID.DomainID_code",
            "code": "code",
            "name": this.langService.transform('QueryScheme/query-scheme-1/a1f04b3a-2701-4e09-a81a-9f29d6b51dcb', this.lang, "编号"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/a1f04b3a-2701-4e09-a81a-9f29d6b51dcb/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "e3bdb6f3-e86d-4e6a-9637-169e7764a146",
            "labelCode": "DomainID.DomainID_name",
            "code": "name",
            "name": this.langService.transform('QueryScheme/query-scheme-1/e3bdb6f3-e86d-4e6a-9637-169e7764a146', this.lang, "所属组织"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/e3bdb6f3-e86d-4e6a-9637-169e7764a146/placeHolder', this.lang, ""),
            "control": {
                "controltype": "help",
                "require": false,
                "uri": "ROBXDJ.domainID_DomainID_name",
                "textField": "name",
                "valueField": "id",
                "idField": "id",
                "helpId": "b524a702-7323-4d46-998e-5ba0c6abcd49",
                "displayType": "TreeList",
                "loadTreeDataType": 'default',
                "enableFullTree": false,
                "editable": false,
                "dialogTitle": this.langService.transform('QueryScheme/query-scheme-1/e3bdb6f3-e86d-4e6a-9637-169e7764a146/control/help/dialogTitle', this.lang, ""),
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
            "id": "bc0603e3-4edc-4432-93e2-4c0bdbe89342",
            "labelCode": "BillCode",
            "code": "BillCode",
            "name": this.langService.transform('QueryScheme/query-scheme-1/bc0603e3-4edc-4432-93e2-4c0bdbe89342', this.lang, "单据编号"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/bc0603e3-4edc-4432-93e2-4c0bdbe89342/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "383b62f2-4a5b-4340-bf34-71c5dfeda178",
            "labelCode": "TotalSum",
            "code": "TotalSum",
            "name": this.langService.transform('QueryScheme/query-scheme-1/383b62f2-4a5b-4340-bf34-71c5dfeda178', this.lang, "报账金额"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/383b62f2-4a5b-4340-bf34-71c5dfeda178/placeHolder', this.lang, ""),
            "control": {"controltype":"number","require":false,"className":"","textAlign":"left","precision":2,"isBigNumber":false}
        },
        {
            "id": "ccdcdcfd-7217-4cfb-8ceb-79a65b18a953",
            "labelCode": "BillType",
            "code": "BillType",
            "name": this.langService.transform('QueryScheme/query-scheme-1/ccdcdcfd-7217-4cfb-8ceb-79a65b18a953', this.lang, "报销类型"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/ccdcdcfd-7217-4cfb-8ceb-79a65b18a953/placeHolder', this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "JT",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/ccdcdcfd-7217-4cfb-8ceb-79a65b18a953/control/enumValues/JT', this.lang, "交通费")
                    },
                    {
                        "value": "CL",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/ccdcdcfd-7217-4cfb-8ceb-79a65b18a953/control/enumValues/CL', this.lang, "差旅费")
                    },
                    {
                        "value": "SJ",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/ccdcdcfd-7217-4cfb-8ceb-79a65b18a953/control/enumValues/SJ', this.lang, "手机费")
                    }]
            }
        },
        {
            "id": "9667c000-983e-49e0-8ced-7fc39c049f1c",
            "labelCode": "SecID",
            "code": "SecID",
            "name": this.langService.transform('QueryScheme/query-scheme-1/9667c000-983e-49e0-8ced-7fc39c049f1c', this.lang, "密级ID"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/9667c000-983e-49e0-8ced-7fc39c049f1c/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "ca02ba71-63e6-4c07-bc3a-42c34e0f226d",
            "labelCode": "SecLevel",
            "code": "SecLevel",
            "name": this.langService.transform('QueryScheme/query-scheme-1/ca02ba71-63e6-4c07-bc3a-42c34e0f226d', this.lang, "密级"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/ca02ba71-63e6-4c07-bc3a-42c34e0f226d/placeHolder', this.lang, ""),
            "control": {"controltype":"number","require":false,"className":"","textAlign":"left","precision":0,"isBigNumber":false}
        },
        {
            "id": "f9a6a341-98a7-4bc7-8f75-ac41db512efe",
            "labelCode": "ProjectID",
            "code": "ProjectID",
            "name": this.langService.transform('QueryScheme/query-scheme-1/f9a6a341-98a7-4bc7-8f75-ac41db512efe', this.lang, "所属项目"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/f9a6a341-98a7-4bc7-8f75-ac41db512efe/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "46ecd27c-0b6c-41b0-a62b-8871be8a49db",
            "labelCode": "ProjectMgr.ProjectMgr",
            "code": "ProjectMgr",
            "name": this.langService.transform('QueryScheme/query-scheme-1/46ecd27c-0b6c-41b0-a62b-8871be8a49db', this.lang, "项目经理"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/46ecd27c-0b6c-41b0-a62b-8871be8a49db/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "423edf37-cb74-4a0d-8edb-5cc80375a071",
            "labelCode": "ProjectMgr.ProjectMgr_Code",
            "code": "Code",
            "name": this.langService.transform('QueryScheme/query-scheme-1/423edf37-cb74-4a0d-8edb-5cc80375a071', this.lang, "编号"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/423edf37-cb74-4a0d-8edb-5cc80375a071/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "2743e014-2f51-4557-aaf3-42cb6d5660d1",
            "labelCode": "ProjectMgr.ProjectMgr_Name",
            "code": "Name",
            "name": this.langService.transform('QueryScheme/query-scheme-1/2743e014-2f51-4557-aaf3-42cb6d5660d1', this.lang, "名称"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/2743e014-2f51-4557-aaf3-42cb6d5660d1/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "4fc67503-b1b9-4a45-8ae4-12a6e4a8fc56",
            "labelCode": "AuditStatus",
            "code": "AuditStatus",
            "name": this.langService.transform('QueryScheme/query-scheme-1/4fc67503-b1b9-4a45-8ae4-12a6e4a8fc56', this.lang, "稽核状态"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/4fc67503-b1b9-4a45-8ae4-12a6e4a8fc56/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "0ccc134a-b6cf-4844-bd85-52eef12ed9ba",
            "labelCode": "BillDate",
            "code": "BillDate",
            "name": this.langService.transform('QueryScheme/query-scheme-1/0ccc134a-b6cf-4844-bd85-52eef12ed9ba', this.lang, "制单日期"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/0ccc134a-b6cf-4844-bd85-52eef12ed9ba/placeHolder', this.lang, ""),
            "control": {"controltype":"date","require":false,"format":"yyyy-MM-dd","className":"","weekSelect":false,"returnFormat":"yyyy-MM-dd"}
        }]
    presetFieldConfigsqueryscheme1 = [
        {
            "id": "769d96b8-0101-468f-ae3f-40c76c0f06b0",
            "labelCode": "BillStatus.BillState",
            "code": "BillState",
            "name": this.langService.transform('QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0', this.lang, "状态"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/placeHolder', this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "Billing",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Billing', this.lang, "制单")
                    },
                    {
                        "value": "SubmitApproval",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/control/enumValues/SubmitApproval', this.lang, "提交审批")
                    },
                    {
                        "value": "Approved",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Approved', this.lang, "审批通过")
                    },
                    {
                        "value": "ApprovalNotPassed",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/769d96b8-0101-468f-ae3f-40c76c0f06b0/control/enumValues/ApprovalNotPassed', this.lang, "审批不通过")
                    }]
            }
        },
        {
            "id": "2d7db0e1-cfc2-491d-818c-432bf64eceec",
            "labelCode": "EmployeeID.EmployeeID_Name",
            "code": "Name",
            "name": this.langService.transform('QueryScheme/query-scheme-1/2d7db0e1-cfc2-491d-818c-432bf64eceec', this.lang, "报销人"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/2d7db0e1-cfc2-491d-818c-432bf64eceec/placeHolder', this.lang, ""),
            "control": {
                "controltype": "help",
                "require": false,
                "uri": "ROBXDJ.employeeID_EmployeeID_Name",
                "textField": "name",
                "valueField": "id",
                "idField": "id",
                "helpId": "915a0b20-975a-4df1-8cfd-888c3dda0009",
                "displayType": "List",
                "loadTreeDataType": 'default',
                "enableFullTree": false,
                "editable": false,
                "dialogTitle": this.langService.transform('QueryScheme/query-scheme-1/2d7db0e1-cfc2-491d-818c-432bf64eceec/control/help/dialogTitle', this.lang, ""),
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
            "id": "e3bdb6f3-e86d-4e6a-9637-169e7764a146",
            "labelCode": "DomainID.DomainID_name",
            "code": "name",
            "name": this.langService.transform('QueryScheme/query-scheme-1/e3bdb6f3-e86d-4e6a-9637-169e7764a146', this.lang, "所属组织"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/e3bdb6f3-e86d-4e6a-9637-169e7764a146/placeHolder', this.lang, ""),
            "control": {
                "controltype": "help",
                "require": false,
                "uri": "ROBXDJ.domainID_DomainID_name",
                "textField": "name",
                "valueField": "id",
                "idField": "id",
                "helpId": "b524a702-7323-4d46-998e-5ba0c6abcd49",
                "displayType": "TreeList",
                "loadTreeDataType": 'default',
                "enableFullTree": false,
                "editable": false,
                "dialogTitle": this.langService.transform('QueryScheme/query-scheme-1/e3bdb6f3-e86d-4e6a-9637-169e7764a146/control/help/dialogTitle', this.lang, ""),
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
            "id": "0ccc134a-b6cf-4844-bd85-52eef12ed9ba",
            "labelCode": "BillDate",
            "code": "BillDate",
            "name": this.langService.transform('QueryScheme/query-scheme-1/0ccc134a-b6cf-4844-bd85-52eef12ed9ba', this.lang, "制单日期"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/0ccc134a-b6cf-4844-bd85-52eef12ed9ba/placeHolder', this.lang, ""),
            "control": {"controltype":"date","require":false,"format":"yyyy-MM-dd","className":"","weekSelect":false,"returnFormat":"yyyy-MM-dd"}
        }]
                
                
}