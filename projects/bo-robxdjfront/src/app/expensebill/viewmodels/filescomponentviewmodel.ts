
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class FilesComponentViewmodel extends ViewModel {
    public bindingPath = '/filess';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGrid_filesColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
  "dataGrid_files": {
    "type": "DataGrid",
    "resourceId": "dataGrid_files",
    "visible": {
      "useQuote": false,
      "isExpression": false,
      "value": true
    },
    "id": "dataGrid_files",
    "size": {},
    "readonly": {
      "useQuote": false,
      "isExpression": false,
      "value": false
    },
    "fields": [
      {
        "type": "GridField",
        "resourceId": "fileInfo_FileName_905c5431_8m01",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "fileInfo_FileName_905c5431_8m01",
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
          "path": "fileInfo_FileName",
          "fullPath": "FileInfo.FileName",
          "isExpression": false,
          "value": "fileInfo_FileName"
        },
        "dataField": "fileInfo.fileName",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "附件名称",
        "editor": {
          "type": "TextBox",
          "isTextArea": true,
          "resourceId": "fileInfo_FileName_905c5431_02yz",
          "defaultI18nValue": "附件名称",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "fileInfo_FileName_905c5431_02yz",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "fileInfo_FileName",
            "fullPath": "FileInfo.FileName",
            "isExpression": false,
            "value": "fileInfo_FileName"
          },
          "disable": false,
          "maxLength": 128,
          "isPassword": false,
          "enableViewPassword": false
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
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
        "resourceId": "fileInfo_FileSize_905c5431_6bzx",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "fileInfo_FileSize_905c5431_6bzx",
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
          "path": "fileInfo_FileSize",
          "fullPath": "FileInfo.FileSize",
          "isExpression": false,
          "value": "fileInfo_FileSize"
        },
        "dataField": "fileInfo.fileSize",
        "dataType": "number",
        "multiLanguage": false,
        "caption": "附件大小",
        "editor": {
          "type": "FarrisNumberSpinner",
          "isTextArea": true,
          "resourceId": "fileInfo_FileSize_905c5431_831u",
          "defaultI18nValue": "附件大小",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "fileInfo_FileSize_905c5431_831u",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "fileInfo_FileSize",
            "fullPath": "FileInfo.FileSize",
            "isExpression": false,
            "value": "fileInfo_FileSize"
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
        "resourceId": "fileInfo_FileCreateTime_905c5431_4lhi",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "fileInfo_FileCreateTime_905c5431_4lhi",
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
          "path": "fileInfo_FileCreateTime",
          "fullPath": "FileInfo.FileCreateTime",
          "isExpression": false,
          "value": "fileInfo_FileCreateTime"
        },
        "dataField": "fileInfo.fileCreateTime",
        "dataType": "datetime",
        "multiLanguage": false,
        "caption": "附件上传时间",
        "editor": {
          "type": "EditableField",
          "disable": false,
          "editable": true,
          "dateRange": false,
          "showTime": true,
          "title": "附件上传时间",
          "showType": 1,
          "locale": "zh-cn",
          "dateFormat": "yyyy-MM-dd HH:mm:ss",
          "format": "'yyyy-MM-dd'",
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
          "resourceId": "fileInfo_FileCreateTime_905c5431_rj46",
          "defaultI18nValue": "附件上传时间",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "fileInfo_FileCreateTime_905c5431_rj46",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "fileInfo_FileCreateTime",
            "fullPath": "FileInfo.FileCreateTime",
            "isExpression": false,
            "value": "fileInfo_FileCreateTime"
          }
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
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
        name: 'filesAddItem1',
        params: {
        }
    })
    public filesAddItem1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'filesRemoveItem1',
        params: {
            id: '{DATA~/#{files-component}/filess/id}',
            successMsg: ''
        },
        paramDescriptions: {
            id: { type: 'string' },
            successMsg: { type: '' }
        }
    })
    public filesRemoveItem1(commandParam?: any): Observable<any> { return; }

}