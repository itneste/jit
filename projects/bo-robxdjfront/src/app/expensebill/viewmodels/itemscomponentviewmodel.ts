
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class ItemsComponentViewmodel extends ViewModel {
    public bindingPath = '/itemss';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGrid_itemsColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
  "dataGrid_items": {
    "type": "DataGrid",
    "resourceId": "dataGrid_items",
    "visible": {
      "useQuote": false,
      "isExpression": false,
      "value": true
    },
    "id": "dataGrid_items",
    "size": {},
    "readonly": {
      "useQuote": false,
      "isExpression": false,
      "value": false
    },
    "fields": [
      {
        "type": "GridField",
        "resourceId": "billDetailDate_57c21192_ztrj",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "billDetailDate_57c21192_ztrj",
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
          "path": "billDetailDate",
          "isExpression": false,
          "value": "billDetailDate"
        },
        "dataField": "billDetailDate",
        "dataType": "datetime",
        "multiLanguage": false,
        "caption": "费用日期",
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
          "resourceId": "billDetailDate_57c21192_ogl5",
          "defaultI18nValue": "日期选择",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "billDetailDate_57c21192_ogl5",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "billDetailDate",
            "isExpression": false,
            "value": "billDetailDate"
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
        "resourceId": "billDetailAmount_5f8e1561_ebx1",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "billDetailAmount_5f8e1561_ebx1",
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
          "path": "billDetailAmount",
          "isExpression": false,
          "value": "billDetailAmount"
        },
        "dataField": "billDetailAmount",
        "dataType": "number",
        "multiLanguage": false,
        "caption": "费用金额",
        "editor": {
          "type": "FarrisNumberSpinner",
          "isTextArea": true,
          "resourceId": "billDetailAmount_5f8e1561_0dvv",
          "defaultI18nValue": "数值框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "billDetailAmount_5f8e1561_0dvv",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "billDetailAmount",
            "isExpression": false,
            "value": "billDetailAmount"
          },
          "disable": false,
          "step": 1,
          "useThousands": true,
          "textAlign": "left",
          "precision": 2
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
          "precision": 2,
          "thousand": ",",
          "decimal": "."
        }
      },
      {
        "type": "GridField",
        "resourceId": "detailNote_37529f62_izd1",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "detailNote_37529f62_izd1",
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
          "path": "detailNote",
          "isExpression": false,
          "value": "detailNote"
        },
        "dataField": "detailNote",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "费用说明",
        "editor": {
          "type": "MultiTextBox",
          "isTextArea": true,
          "resourceId": "detailNote_37529f62_pdf7",
          "defaultI18nValue": "多行文本框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "detailNote_37529f62_pdf7",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "detailNote",
            "isExpression": false,
            "value": "detailNote"
          },
          "disable": false,
          "maxLength": 0
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
        "resourceId": "invoiceNO_0d97df4c_q3s9",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "invoiceNO_0d97df4c_q3s9",
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
          "path": "invoiceNO",
          "isExpression": false,
          "value": "invoiceNO"
        },
        "dataField": "invoiceNO",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "发票号码",
        "editor": {
          "type": "TextBox",
          "isTextArea": true,
          "resourceId": "invoiceNO_0d97df4c_j78n",
          "defaultI18nValue": "文本",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "invoiceNO_0d97df4c_j78n",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "invoiceNO",
            "isExpression": false,
            "value": "invoiceNO"
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
        name: 'itemsAddItem1',
        params: {
        }
    })
    public itemsAddItem1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'itemsRemoveItem1',
        params: {
            id: '{DATA~/#{items-component}/itemss/id}'
        },
        paramDescriptions: {
            id: { type: 'string' }
        }
    })
    public itemsRemoveItem1(commandParam?: any): Observable<any> { return; }

}