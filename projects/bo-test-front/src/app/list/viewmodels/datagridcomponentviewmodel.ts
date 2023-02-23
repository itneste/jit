
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class DataGridComponentViewmodel extends ViewModel {
    public bindingPath = '/';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGridColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
  "dataGrid": {
    "type": "DataGrid",
    "resourceId": "dataGrid",
    "visible": {
      "useQuote": false,
      "isExpression": false,
      "value": true
    },
    "id": "dataGrid",
    "size": {},
    "readonly": {
      "useQuote": false,
      "isExpression": false,
      "value": false
    },
    "fields": [
      {
        "type": "GridField",
        "resourceId": "id_5a79ad6b_usx1",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "id_5a79ad6b_usx1",
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
        "resourceId": "version_e90d6a92_kjmr",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "version_e90d6a92_kjmr",
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
          "path": "version",
          "isExpression": false,
          "value": "version"
        },
        "dataField": "version",
        "dataType": "datetime",
        "multiLanguage": false,
        "caption": "版本",
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
        "resourceId": "s1_25a39e32_cxkc",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "s1_25a39e32_cxkc",
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
          "path": "s1",
          "isExpression": false,
          "value": "s1"
        },
        "dataField": "s1",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "S1",
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
        "resourceId": "i1_62b09912_ls77",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "i1_62b09912_ls77",
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
          "path": "i1",
          "isExpression": false,
          "value": "i1"
        },
        "dataField": "i1",
        "dataType": "number",
        "multiLanguage": false,
        "caption": "I1",
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
        "resourceId": "d1_98ed86ce_u2q7",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "d1_98ed86ce_u2q7",
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
          "path": "d1",
          "isExpression": false,
          "value": "d1"
        },
        "dataField": "d1",
        "dataType": "date",
        "multiLanguage": false,
        "caption": "D1",
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
      }
    ],
    "multiSelect": false,
    "showLineNumber": false,
    "lineNumberTitle": "#",
    "groupTotalText": "Total",
    "filterable": false,
    "groupable": false,
    "rowClass": ""
  }
};
    @NgCommand({
        name: 'ChangePage1',
        params: {
            loadCommandName: 'Load1',
            loadCommandFrameId: 'root-component'
        },
        paramDescriptions: {
            loadCommandName: { type: 'string' },
            loadCommandFrameId: { type: 'string' }
        }
    })
    public ChangePage1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridcomponentviewmodelFilter1',
        params: {
            commandName: '',
            frameId: ''
        },
        paramDescriptions: {
            commandName: { type: 'string' },
            frameId: { type: 'string' }
        }
    })
    public datagridcomponentviewmodelFilter1(commandParam?: any): Observable<any> { return; }

}