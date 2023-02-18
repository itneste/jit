
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

import { EditorTypes } from '@farris/ui-datagrid-editors';
import { CalculationType, DatagridComponent, GRID_SETTINGS_HTTP } from '@farris/ui-datagrid';
import { CommonUtils } from '@farris/ui-common';

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { DataGridComponentViewmodel } from '../../viewmodels/datagridcomponentviewmodel';
import { ROBXDJRepository } from '../../models/robxdjrepository';
import { LangService } from '../../lang/lang-pipe';

import { DataGridComponentViewmodelForm } from '../../viewmodels/form/datagridcomponentviewmodelform';
import { DataGridComponentViewmodelUIState } from '../../viewmodels/uistate/datagridcomponentviewmodeluistate';
import { ChangePage1Handler } from '../../viewmodels/handlers/changepage1handler';
import { datagridcomponentviewmodelexecute1Handler } from '../../viewmodels/handlers/datagridcomponentviewmodelexecute1handler';
import { datagridcomponentviewmodelexecute2Handler } from '../../viewmodels/handlers/datagridcomponentviewmodelexecute2handler';
import { datagridcomponentviewmodelexecute3Handler } from '../../viewmodels/handlers/datagridcomponentviewmodelexecute3handler';
import { datagridcomponentviewmodelAuditBill1Handler } from '../../viewmodels/handlers/datagridcomponentviewmodelauditbill1handler';
import { datagridcomponentviewmodelAuditBill2Handler } from '../../viewmodels/handlers/datagridcomponentviewmodelauditbill2handler';
import { datagridcomponentviewmodelshowChangeLog1Handler } from '../../viewmodels/handlers/datagridcomponentviewmodelshowchangelog1handler';
import { ExpenseListFrmBXDJControllerService as ExpenseListFrmBXDJControllerService1 } from '../../services/expenselist_frm_bxdjcontroller';

@Component({
    selector: 'app-datagridcomponent',
    templateUrl: './datagridcomponent.html',
    styleUrls: ['./datagridcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'data-grid-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: ROBXDJRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        QDP_COMMAND_SERVICE_PROVIDERS,
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
        { provide: Form, useClass: DataGridComponentViewmodelForm },
        { provide: UIState, useClass: DataGridComponentViewmodelUIState },
        ExpenseListFrmBXDJControllerService1,
        { provide: ViewModel, useClass: DataGridComponentViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangePage1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelexecute1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelexecute2Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelexecute3Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelAuditBill1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelAuditBill2Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelshowChangeLog1Handler, multi: true },
]
})
export class DataGridComponent extends FrameComponent implements OnInit, AfterViewInit {
    @ViewChild('dataGridDataGrid')
    dataGridDataGrid: DatagridComponent;
    dataGridColumns =[];
    @ViewChild('dataGridbillTypeTemplate') dataGridbillTypeTemplate: TemplateRef<any>;
    @ViewChild('dataGridbillCodeTemplate') dataGridbillCodeTemplate: TemplateRef<any>;
    @ViewChild('dataGridmanageTemplate') dataGridmanageTemplate: TemplateRef<any>;

    @HostBinding('class')
    cls = 'f-struct-wrapper f-utils-fill-flex-column ';
    public viewModel: DataGridComponentViewmodel;
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
        private farrisGridUtils: CommonUtils,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        this.viewModel.verifycationChanged.subscribe((verifyInformations: any) => {
            this.focusInvalidService.focusGridCell(verifyInformations, this.dataGridDataGrid);
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
        this.dataGridColumns =[
            [
                {
                    id: 'billType_ccdcdcfd_lkao',
                    field: 'billType',
                    width: 120,
                    title: this.langService.transform('billType_ccdcdcfd_lkao', this.lang, "报销类型"),
                    dataType: 'enum',
                    template: this.dataGridbillTypeTemplate,
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: 
                    {
                        "type": "enum",
                        "options":
                        {
                            "valueField": "value",
                            "textField": "name",
                            "data": [
                                {
                                    "value": "JT",
                                    "name": this.langService.transform('GridField/billType_ccdcdcfd_lkao/enumData/JT', this.lang, "交通费")
                                },
                                {
                                    "value": "CL",
                                    "name": this.langService.transform('GridField/billType_ccdcdcfd_lkao/enumData/CL', this.lang, "差旅费")
                                },
                                {
                                    "value": "SJ",
                                    "name": this.langService.transform('GridField/billType_ccdcdcfd_lkao/enumData/SJ', this.lang, "手机费")
                                }]
                        }
                    }
                },
                {
                    id: 'employeeID_EmployeeID_Name_2d7db0e1_rh1h',
                    field: 'employeeID.employeeID_Name',
                    width: 120,
                    title: this.langService.transform('employeeID_EmployeeID_Name_2d7db0e1_rh1h', this.lang, "报销人"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'domainID_DomainID_name_e3bdb6f3_kr50',
                    field: 'domainID.domainID_name',
                    width: 120,
                    title: this.langService.transform('domainID_DomainID_name_e3bdb6f3_kr50', this.lang, "所属组织"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'billCode_bc0603e3_qyu1',
                    field: 'billCode',
                    width: 120,
                    title: this.langService.transform('billCode_bc0603e3_qyu1', this.lang, "单据编号"),
                    dataType: 'string',
                    template: this.dataGridbillCodeTemplate,
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'totalSum_383b62f2_ng5l',
                    field: 'totalSum',
                    width: 120,
                    title: this.langService.transform('totalSum_383b62f2_ng5l', this.lang, "报账金额"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        calculationType: CalculationType.sum,
                        },
                    formatter: {"precision":2,"thousand":",","prefix":"￥","suffix":"元","decimal":".","type":"number"},
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {"type":"number","options":{"precision":2,"thousand":",","prefix":"￥","suffix":"","decimal":"."}}
                },
                {
                    id: 'billDate_0ccc134a_9yle',
                    field: 'billDate',
                    width: 120,
                    title: this.langService.transform('billDate_0ccc134a_9yle', this.lang, "制单日期"),
                    dataType: 'datetime',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {"type":"datetime","options":{"format":"yyyy-MM-dd HH:mm:ss"}}
                },
                {
                    id: 'billNote_95792e85_bfz8',
                    field: 'billNote',
                    width: 120,
                    title: this.langService.transform('billNote_95792e85_bfz8', this.lang, "报销说明"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'auditStatus_4fc67503_2l7d',
                    field: 'auditStatus',
                    width: 120,
                    title: this.langService.transform('auditStatus_4fc67503_2l7d', this.lang, "稽核状态"),
                    dataType: 'enum',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: (value, rowData) => {
    const arr = [
        {
            "name": "未稽核",
            "value": "None"
        },
        {
            "name": "稽核通过",
            "value": "Passed"
        },
        {
            "name": "稽核不通过",
            "value": "Reject"
        }
    ];
      if (value) { 
          var item = arr.find(n => n.value == value);
          if (item) {
              return item.name;
          } else { 
              return '未稽核'
          }
      }
      return '未稽核'
  }
                },
                {
                    id: 'billStatus_BillState_769d96b8_r5mi',
                    field: 'billStatus.billState',
                    width: 120,
                    title: this.langService.transform('billStatus_BillState_769d96b8_r5mi', this.lang, "制单状态"),
                    dataType: 'enum',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: 
                    {
                        "type": "enum",
                        "options":
                        {
                            "valueField": "value",
                            "textField": "name",
                            "data": [
                                {
                                    "value": "Billing",
                                    "name": this.langService.transform('GridField/billStatus_BillState_769d96b8_r5mi/enumData/Billing', this.lang, "制单")
                                },
                                {
                                    "value": "SubmitApproval",
                                    "name": this.langService.transform('GridField/billStatus_BillState_769d96b8_r5mi/enumData/SubmitApproval', this.lang, "提交审批")
                                },
                                {
                                    "value": "Approved",
                                    "name": this.langService.transform('GridField/billStatus_BillState_769d96b8_r5mi/enumData/Approved', this.lang, "审批通过")
                                },
                                {
                                    "value": "ApprovalNotPassed",
                                    "name": this.langService.transform('GridField/billStatus_BillState_769d96b8_r5mi/enumData/ApprovalNotPassed', this.lang, "审批不通过")
                                }]
                        }
                    }
                },
                {
                    width: 120,
                    title: this.langService.transform('DataGrid/dataGrid/OperateColumn', this.lang, "操作"),
                    dataType: 'string',
                    template: this.dataGridmanageTemplate,
                    align: 'center',
                    halign: 'center',
                    isMultilingualField: false,
                    fixed: 'right',
                    visible: true,
                    filter: false,
                }
            ]
        ]; 
        this.viewModel.dataGridColumns= this.dataGridColumns;
        this.viewModel.dataGridColumnsName= "dataGridColumns";
        this.onFormLoad(); 
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
    SectiondatagridsectionMainTitle = this.langService.transform('Section/data-grid-section/mainTitle', this.lang, "");
    SectiondatagridsectionSubTitle = this.langService.transform('Section/data-grid-section/subTitle', this.lang, "");
    dataGridRowStyle= (rowData) => {
    if (rowData.auditStatus == "Reject") {
        return {
            style: {
                color: 'red',
                background: 'yellow'
            }
        };
    }
}
    dataGridlineNumberTitle = this.langService.transform('DataGrid/dataGrid/lineNumberTitle', this.lang, "");
}