
import { Component, OnInit, Injector, AfterViewInit, OnDestroy, ViewChild, HostBinding, TemplateRef, ElementRef, ViewContainerRef, NgModuleFactory, Input, ComponentRef} from '@angular/core';
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

import { AttComponentViewmodel } from '../../viewmodels/attcomponentviewmodel';
import { AttachmentEntityRepository } from '../../models/attachmententityrepository';
import { LangService } from '../../lang/lang-pipe';

import { AttComponentViewmodelForm } from '../../viewmodels/form/attcomponentviewmodelform';
import { AttComponentViewmodelUIState } from '../../viewmodels/uistate/attcomponentviewmodeluistate';
import { attAddItem1Handler } from '../../viewmodels/handlers/attadditem1handler';
import { attRemoveItem1Handler } from '../../viewmodels/handlers/attremoveitem1handler';
import { rootviewmodelUploadAndUpdateRow1Handler } from '../../viewmodels/handlers/rootviewmodeluploadandupdaterow1handler';
import { attcomponentviewmodelcloneWithAttachment1Handler } from '../../viewmodels/handlers/attcomponentviewmodelclonewithattachment1handler';

@Component({
    selector: 'app-attcomponent',
    templateUrl: './attcomponent.html',
    styleUrls: ['./attcomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'att-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: AttachmentEntityRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
        { provide: Form, useClass: AttComponentViewmodelForm },
        { provide: UIState, useClass: AttComponentViewmodelUIState },
        { provide: ViewModel, useClass: AttComponentViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: attAddItem1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: attRemoveItem1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: rootviewmodelUploadAndUpdateRow1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: attcomponentviewmodelcloneWithAttachment1Handler, multi: true },
]
})
export class AttComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('dataGrid_attDataGrid')
    dataGrid_attDataGrid: DatagridComponent;
    dataGrid_attColumns =[];

    @HostBinding('class')
    cls = 'f-struct-is-subgrid ';
    public viewModel: AttComponentViewmodel;
    lang: string ="";
    size: any = {};
    enabledLanguageList: any[] = [];
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
            this.focusInvalidService.focusGridCell(verifyInformations, this.dataGrid_attDataGrid);
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
        this.dataGrid_attColumns =[
            [
                {
                    id: 'id_1ca6bc0a_lxp8',
                    field: 'id',
                    width: 120,
                    title: this.langService.transform('id_1ca6bc0a_lxp8', this.lang, "主键"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: {"id":"id_1ca6bc0a_gpba","title":"文本","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":36}
                    },
                    sortable: true,
                    validators: [{"type":"required","message":"该字段不能为空！"}],
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
                    id: 'parentID_494a2f81_8i82',
                    field: 'parentID',
                    width: 120,
                    title: this.langService.transform('parentID_494a2f81_8i82', this.lang, "上级对象主键"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: {"id":"parentID_494a2f81_qzbh","title":"文本","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":36}
                    },
                    sortable: true,
                    validators: [{"type":"required","message":"该字段不能为空！"}],
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
                    id: 's11_fea4ceff_d4un',
                    field: 's11',
                    width: 120,
                    title: this.langService.transform('s11_fea4ceff_d4un', this.lang, "S11"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: {"id":"s11_fea4ceff_c7vo","title":"文本","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":36}
                    },
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
                    id: 'i11_cc9d60a9_4a08',
                    field: 'i11',
                    width: 120,
                    title: this.langService.transform('i11_cc9d60a9_4a08', this.lang, "I11"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: {"id":"i11_cc9d60a9_yznh","title":"数值框","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.NUMBERBOX","precision":0,"step":1,"canNull":true,"bigNumber":false,"showButton":true,"showZero":true}
                    },
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
                    formatter: {"type":"number","options":{"precision":0,"thousand":",","decimal":"."}}
                },
                {
                    id: 'd11_0fe25089_28fo',
                    field: 'd11',
                    width: 120,
                    title: this.langService.transform('d11_0fe25089_28fo', this.lang, "D11"),
                    dataType: 'date',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.DATEPICKER,
                        options: {"id":"d11_0fe25089_ijqg","title":"日期选择","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.DATEPICKER","dateRange":false,"showTime":false,"showType":1,"dateFormat":"yyyy-MM-dd","returnFormat":"yyyy-MM-dd","placeholder":"","showWeekNumbers":false,"dateRangeDatesDelimiter":"~","editable":true,"linkedLabelEnabled":false,"linkedLabelClick":""}
                    },
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
                    formatter: {"type":"datetime","options":{"format":"yyyy-MM-dd"}}
                },
                {
                    id: 'dT11_532a4dc5_528i',
                    field: 'dT11',
                    width: 120,
                    title: this.langService.transform('dT11_532a4dc5_528i', this.lang, "DT11"),
                    dataType: 'datetime',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.DATEPICKER,
                        options: {"id":"dT11_532a4dc5_30ve","title":"日期选择","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.DATEPICKER","dateRange":false,"showTime":true,"showType":1,"dateFormat":"yyyy-MM-dd HH:mm:ss","returnFormat":"yyyy-MM-dd HH:mm:ss","placeholder":"","showWeekNumbers":false,"dateRangeDatesDelimiter":"~","editable":true,"linkedLabelEnabled":false,"linkedLabelClick":""}
                    },
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
                    id: 'attachmentInfo_AttachmentId_7ef8a426_vea2',
                    field: 'attachmentInfo.attachmentId',
                    width: 120,
                    title: this.langService.transform('attachmentInfo_AttachmentId_7ef8a426_vea2', this.lang, "附件Id"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: {"id":"attachmentInfo_AttachmentId_7ef8a426_42mz","title":"文本","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":36}
                    },
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
                    id: 'attachmentInfo_FileName_7ef8a426_1fh4',
                    field: 'attachmentInfo.fileName',
                    width: 120,
                    title: this.langService.transform('attachmentInfo_FileName_7ef8a426_1fh4', this.lang, "附件名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: {"id":"attachmentInfo_FileName_7ef8a426_wl6r","title":"文本","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":128}
                    },
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
                    id: 'attachmentInfo_FileSize_7ef8a426_zouj',
                    field: 'attachmentInfo.fileSize',
                    width: 120,
                    title: this.langService.transform('attachmentInfo_FileSize_7ef8a426_zouj', this.lang, "附件大小"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: {"id":"attachmentInfo_FileSize_7ef8a426_j7v9","title":"数值框","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.NUMBERBOX","precision":8,"step":1,"canNull":true,"bigNumber":false,"showButton":true,"showZero":true}
                    },
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
                    formatter: {"type":"number","options":{"precision":8,"thousand":",","decimal":"."}}
                },
                {
                    id: 'attachmentInfo_FileCreateTime_7ef8a426_xiwg',
                    field: 'attachmentInfo.fileCreateTime',
                    width: 120,
                    title: this.langService.transform('attachmentInfo_FileCreateTime_7ef8a426_xiwg', this.lang, "附件上传时间"),
                    dataType: 'datetime',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.DATEPICKER,
                        options: {"id":"attachmentInfo_FileCreateTime_7ef8a426_3c6r","title":"日期选择","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.DATEPICKER","dateRange":false,"showTime":true,"showType":1,"dateFormat":"yyyy-MM-dd HH:mm:ss","returnFormat":"yyyy-MM-dd HH:mm:ss","placeholder":"","showWeekNumbers":false,"dateRangeDatesDelimiter":"~","editable":true,"linkedLabelEnabled":false,"linkedLabelClick":""}
                    },
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
                }
            ]
        ]; 
        this.viewModel.dataGrid_attColumns= this.dataGrid_attColumns;
        this.viewModel.dataGridColumnsName= "dataGrid_attColumns";
        this.onFormLoad(); 
    }

    ngAfterViewInit(): void {
    }

    ngOnDestroy(): void {
        // 增加表单的自我销毁
        this.context.dispose && this.context.dispose();
        this.context = null;
        this.subscription = null;
        this.declaration = null;
        this.wizardSer = null;
        this.keybindingService = null;
        this.langService = null;
        this.route = null;
        this.router = null;
        this.rootElement = null;
        this.localizationService = null;
        this.frmI18nSettingService = null;
        
        this.focusInvalidService = null;
        this.farrisGridUtils = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];

    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
    } 
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    dataGrid_attlineNumberTitle = this.langService.transform('DataGrid/dataGrid_att/lineNumberTitle', this.lang, "");
}