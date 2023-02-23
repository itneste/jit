
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class AttComponentViewmodel extends ViewModel {
    public bindingPath = '/atts';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGrid_attColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
  "dataGrid_att": {
    "type": "DataGrid",
    "resourceId": "dataGrid_att",
    "visible": {
      "useQuote": false,
      "isExpression": false,
      "value": true
    },
    "id": "dataGrid_att",
    "size": {},
    "readonly": {
      "useQuote": false,
      "isExpression": false,
      "value": false
    },
    "fields": [
      {
        "type": "GridField",
        "resourceId": "id_1ca6bc0a_lxp8",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "id_1ca6bc0a_lxp8",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "id",
          "isExpression": false,
          "value": "id"
        },
        "dataField": "id",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "主键",
        "editor": {
          "type": "TextBox",
          "isTextArea": true,
          "resourceId": "id_1ca6bc0a_gpba",
          "defaultI18nValue": "文本",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "id_1ca6bc0a_gpba",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "id",
            "isExpression": false,
            "value": "id"
          },
          "disable": false,
          "maxLength": 36,
          "isPassword": false,
          "enableViewPassword": false
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "parentID_494a2f81_8i82",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "parentID_494a2f81_8i82",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "parentID",
          "isExpression": false,
          "value": "parentID"
        },
        "dataField": "parentID",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "上级对象主键",
        "editor": {
          "type": "TextBox",
          "isTextArea": true,
          "resourceId": "parentID_494a2f81_qzbh",
          "defaultI18nValue": "文本",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "parentID_494a2f81_qzbh",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "parentID",
            "isExpression": false,
            "value": "parentID"
          },
          "disable": false,
          "maxLength": 36,
          "isPassword": false,
          "enableViewPassword": false
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "s11_fea4ceff_d4un",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "s11_fea4ceff_d4un",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "s11",
          "isExpression": false,
          "value": "s11"
        },
        "dataField": "s11",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "S11",
        "editor": {
          "type": "TextBox",
          "isTextArea": true,
          "resourceId": "s11_fea4ceff_c7vo",
          "defaultI18nValue": "文本",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "s11_fea4ceff_c7vo",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "s11",
            "isExpression": false,
            "value": "s11"
          },
          "disable": false,
          "maxLength": 36,
          "isPassword": false,
          "enableViewPassword": false
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "i11_cc9d60a9_4a08",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "i11_cc9d60a9_4a08",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "i11",
          "isExpression": false,
          "value": "i11"
        },
        "dataField": "i11",
        "dataType": "number",
        "multiLanguage": false,
        "caption": "I11",
        "editor": {
          "type": "FarrisNumberSpinner",
          "isTextArea": true,
          "resourceId": "i11_cc9d60a9_yznh",
          "defaultI18nValue": "数值框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "i11_cc9d60a9_yznh",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "i11",
            "isExpression": false,
            "value": "i11"
          },
          "disable": false,
          "step": 1,
          "useThousands": true,
          "textAlign": "left",
          "precision": 0
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "number",
          "precision": 0,
          "thousand": ",",
          "decimal": "."
        }
      },
      {
        "type": "GridField",
        "resourceId": "d11_0fe25089_28fo",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "d11_0fe25089_28fo",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "d11",
          "isExpression": false,
          "value": "d11"
        },
        "dataField": "d11",
        "dataType": "date",
        "multiLanguage": false,
        "caption": "D11",
        "editor": {
          "type": "EditableField",
          "disable": false,
          "editable": true,
          "dateRange": false,
          "showTime": false,
          "title": "日期选择",
          "showType": 1,
          "locale": "zh-cn",
          "dateFormat": "yyyy-MM-dd",
          "placeHolder": "",
          "linkedLabelEnabled": false,
          "disableDates": [],
          "returnType": "Date",
          "useDefault": false,
          "showWeekNumbers": false,
          "dateRangeDatesDelimiter": "~",
          "shortcuts": [],
          "holdPlace": false,
          "returnFormat": "yyyy-MM-dd",
          "titleWidth": null,
          "localization": false,
          "isTextArea": true,
          "resourceId": "d11_0fe25089_ijqg",
          "defaultI18nValue": "日期选择",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "d11_0fe25089_ijqg",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "d11",
            "isExpression": false,
            "value": "d11"
          }
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "date",
          "dateFormat": "yyyy-MM-dd"
        }
      },
      {
        "type": "GridField",
        "resourceId": "dT11_532a4dc5_528i",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "dT11_532a4dc5_528i",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "dT11",
          "isExpression": false,
          "value": "dT11"
        },
        "dataField": "dT11",
        "dataType": "datetime",
        "multiLanguage": false,
        "caption": "DT11",
        "editor": {
          "type": "EditableField",
          "disable": false,
          "editable": true,
          "dateRange": false,
          "showTime": true,
          "title": "日期选择",
          "showType": 1,
          "locale": "zh-cn",
          "dateFormat": "yyyy-MM-dd HH:mm:ss",
          "placeHolder": "",
          "linkedLabelEnabled": false,
          "disableDates": [],
          "returnType": "Date",
          "useDefault": false,
          "showWeekNumbers": false,
          "dateRangeDatesDelimiter": "~",
          "shortcuts": [],
          "holdPlace": false,
          "returnFormat": "yyyy-MM-dd HH:mm:ss",
          "titleWidth": null,
          "localization": false,
          "isTextArea": true,
          "resourceId": "dT11_532a4dc5_30ve",
          "defaultI18nValue": "日期选择",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "dT11_532a4dc5_30ve",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "dT11",
            "isExpression": false,
            "value": "dT11"
          }
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "date",
          "dateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      {
        "type": "GridField",
        "resourceId": "attachmentInfo_AttachmentId_7ef8a426_vea2",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "attachmentInfo_AttachmentId_7ef8a426_vea2",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "attachmentInfo_AttachmentId",
          "isExpression": false,
          "value": "attachmentInfo_AttachmentId"
        },
        "dataField": "attachmentInfo.attachmentId",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "附件Id",
        "editor": {
          "type": "TextBox",
          "isTextArea": true,
          "resourceId": "attachmentInfo_AttachmentId_7ef8a426_42mz",
          "defaultI18nValue": "文本",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "attachmentInfo_AttachmentId_7ef8a426_42mz",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "attachmentInfo_AttachmentId",
            "isExpression": false,
            "value": "attachmentInfo_AttachmentId"
          },
          "disable": false,
          "maxLength": 36,
          "isPassword": false,
          "enableViewPassword": false
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "attachmentInfo_FileName_7ef8a426_1fh4",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "attachmentInfo_FileName_7ef8a426_1fh4",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "attachmentInfo_FileName",
          "isExpression": false,
          "value": "attachmentInfo_FileName"
        },
        "dataField": "attachmentInfo.fileName",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "附件名称",
        "editor": {
          "type": "TextBox",
          "isTextArea": true,
          "resourceId": "attachmentInfo_FileName_7ef8a426_wl6r",
          "defaultI18nValue": "文本",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "attachmentInfo_FileName_7ef8a426_wl6r",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "attachmentInfo_FileName",
            "isExpression": false,
            "value": "attachmentInfo_FileName"
          },
          "disable": false,
          "maxLength": 128,
          "isPassword": false,
          "enableViewPassword": false
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "attachmentInfo_FileSize_7ef8a426_zouj",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "attachmentInfo_FileSize_7ef8a426_zouj",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "attachmentInfo_FileSize",
          "isExpression": false,
          "value": "attachmentInfo_FileSize"
        },
        "dataField": "attachmentInfo.fileSize",
        "dataType": "number",
        "multiLanguage": false,
        "caption": "附件大小",
        "editor": {
          "type": "FarrisNumberSpinner",
          "isTextArea": true,
          "resourceId": "attachmentInfo_FileSize_7ef8a426_j7v9",
          "defaultI18nValue": "数值框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "attachmentInfo_FileSize_7ef8a426_j7v9",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "attachmentInfo_FileSize",
            "isExpression": false,
            "value": "attachmentInfo_FileSize"
          },
          "disable": false,
          "step": 1,
          "useThousands": true,
          "textAlign": "left",
          "precision": 8
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "formatter": {
          "type": "number",
          "precision": 8,
          "thousand": ",",
          "decimal": "."
        }
      },
      {
        "type": "GridField",
        "resourceId": "attachmentInfo_FileCreateTime_7ef8a426_xiwg",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "attachmentInfo_FileCreateTime_7ef8a426_xiwg",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "attachmentInfo_FileCreateTime",
          "isExpression": false,
          "value": "attachmentInfo_FileCreateTime"
        },
        "dataField": "attachmentInfo.fileCreateTime",
        "dataType": "datetime",
        "multiLanguage": false,
        "caption": "附件上传时间",
        "editor": {
          "type": "EditableField",
          "disable": false,
          "editable": true,
          "dateRange": false,
          "showTime": true,
          "title": "日期选择",
          "showType": 1,
          "locale": "zh-cn",
          "dateFormat": "yyyy-MM-dd HH:mm:ss",
          "placeHolder": "",
          "linkedLabelEnabled": false,
          "disableDates": [],
          "returnType": "Date",
          "useDefault": false,
          "showWeekNumbers": false,
          "dateRangeDatesDelimiter": "~",
          "shortcuts": [],
          "holdPlace": false,
          "returnFormat": "yyyy-MM-dd HH:mm:ss",
          "titleWidth": null,
          "localization": false,
          "isTextArea": true,
          "resourceId": "attachmentInfo_FileCreateTime_7ef8a426_3c6r",
          "defaultI18nValue": "日期选择",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "attachmentInfo_FileCreateTime_7ef8a426_3c6r",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "attachmentInfo_FileCreateTime",
            "isExpression": false,
            "value": "attachmentInfo_FileCreateTime"
          }
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "formatter": {
          "type": "date",
          "dateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      }
    ],
    "multiSelect": false,
    "editable": "viewModel.stateMachine['editable']",
    "showLineNumber": false,
    "lineNumberTitle": "#",
    "groupTotalText": "Total",
    "filterable": false,
    "groupable": false,
    "rowClass": ""
  }
};
    @NgCommand({
        name: 'attAddItem1',
        params: {
        }
    })
    public attAddItem1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'attRemoveItem1',
        params: {
            id: '{DATA~/#{att-component}/atts/id}',
            successMsg: ''
        },
        paramDescriptions: {
            id: { type: 'string' },
            successMsg: { type: '' }
        }
    })
    public attRemoveItem1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootviewmodelUploadAndUpdateRow1',
        params: {
            attachmentInfoFieldPath: '/atts/attachmentInfo',
            rootDirId: 'default-root',
            subDirName: 'docs',
            fileType: '',
            id: ''
        },
        paramDescriptions: {
            attachmentInfoFieldPath: { type: 'string' },
            rootDirId: { type: 'string' },
            subDirName: { type: 'string' },
            fileType: { type: 'string' },
            id: { type: 'string' }
        }
    })
    public rootviewmodelUploadAndUpdateRow1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'attcomponentviewmodelcloneWithAttachment1',
        params: {
            id: '{DATA~/att-component/atts/id}',
            url: '/service/copymainobjvoaction',
            attachmentInfoFieldPath: '/atts/attachmentInfo',
            rootId: 'default-root',
            path: 'docs'
        },
        paramDescriptions: {
            id: { type: 'string' },
            url: { type: 'string' },
            attachmentInfoFieldPath: { type: 'string' },
            rootId: { type: 'string' },
            path: { type: 'string' }
        }
    })
    public attcomponentviewmodelcloneWithAttachment1(commandParam?: any): Observable<any> { return; }

}