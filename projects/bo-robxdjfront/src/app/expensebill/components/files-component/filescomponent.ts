
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
import { FilesComponentViewmodel } from '../../viewmodels/filescomponentviewmodel';
import { ROBXDJRepository } from '../../models/robxdjrepository';
import { LangService } from '../../lang/lang-pipe';

import { FilesComponentViewmodelForm } from '../../viewmodels/form/filescomponentviewmodelform';
import { FilesComponentViewmodelUIState } from '../../viewmodels/uistate/filescomponentviewmodeluistate';
import { filesAddItem1Handler } from '../../viewmodels/handlers/filesadditem1handler';
import { filesRemoveItem1Handler } from '../../viewmodels/handlers/filesremoveitem1handler';

@Component({
    selector: 'app-filescomponent',
    templateUrl: './filescomponent.html',
    styleUrls: ['./filescomponent.scss'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'files-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: ROBXDJRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        QDP_COMMAND_SERVICE_PROVIDERS,
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
        { provide: Form, useClass: FilesComponentViewmodelForm },
        { provide: UIState, useClass: FilesComponentViewmodelUIState },
        { provide: ViewModel, useClass: FilesComponentViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: filesAddItem1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: filesRemoveItem1Handler, multi: true },
]
})
export class FilesComponent extends FrameComponent implements OnInit, AfterViewInit {
    @ViewChild('dataGrid_filesDataGrid')
    dataGrid_filesDataGrid: DatagridComponent;
    dataGrid_filesColumns =[];

    @HostBinding('class')
    cls = 'f-struct-is-subgrid ';
    public viewModel: FilesComponentViewmodel;
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
            this.focusInvalidService.focusGridCell(verifyInformations, this.dataGrid_filesDataGrid);
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
        this.dataGrid_filesColumns =[
            [
                {
                    id: 'fileInfo_FileName_905c5431_8m01',
                    field: 'fileInfo.fileName',
                    width: 120,
                    title: this.langService.transform('fileInfo_FileName_905c5431_8m01', this.lang, "附件名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: {"id":"fileInfo_FileName_905c5431_02yz","title":"附件名称","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":128}
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
                    id: 'fileInfo_FileSize_905c5431_6bzx',
                    field: 'fileInfo.fileSize',
                    width: 120,
                    title: this.langService.transform('fileInfo_FileSize_905c5431_6bzx', this.lang, "附件大小"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: {"id":"fileInfo_FileSize_905c5431_831u","title":"附件大小","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.NUMBERBOX","precision":8,"step":1,"canNull":true,"bigNumber":false,"showButton":true,"showZero":true}
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
                    id: 'fileInfo_FileCreateTime_905c5431_4lhi',
                    field: 'fileInfo.fileCreateTime',
                    width: 120,
                    title: this.langService.transform('fileInfo_FileCreateTime_905c5431_4lhi', this.lang, "附件上传时间"),
                    dataType: 'datetime',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.DATEPICKER,
                        options: {"id":"fileInfo_FileCreateTime_905c5431_rj46","title":"附件上传时间","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.DATEPICKER","format":"yyyy-MM-dd","dateRange":false,"showTime":true,"showType":1,"dateFormat":"yyyy-MM-dd HH:mm:ss","returnFormat":"yyyy-MM-dd HH:mm:ss","placeholder":"","showWeekNumbers":false,"editable":true,"linkedLabelEnabled":false,"linkedLabelClick":""}
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
        this.viewModel.dataGrid_filesColumns= this.dataGrid_filesColumns;
        this.viewModel.dataGridColumnsName= "dataGrid_filesColumns";
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
    dataGrid_fileslineNumberTitle = this.langService.transform('DataGrid/dataGrid_files/lineNumberTitle', this.lang, "");
}