
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
        "resourceId": "billType_ccdcdcfd_lkao",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "billType_ccdcdcfd_lkao",
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
          "path": "billType",
          "isExpression": false,
          "value": "billType"
        },
        "dataField": "billType",
        "dataType": "enum",
        "multiLanguage": false,
        "caption": "报销类型",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "enumData": [
          {
            "name": "交通费",
            "value": "JT"
          },
          {
            "name": "差旅费",
            "value": "CL"
          },
          {
            "name": "手机费",
            "value": "SJ"
          }
        ],
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
        "updateOn": "change",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "employeeID_EmployeeID_Name_2d7db0e1_rh1h",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "employeeID_EmployeeID_Name_2d7db0e1_rh1h",
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
          "path": "employeeID_EmployeeID_Name",
          "isExpression": false,
          "value": "employeeID_EmployeeID_Name"
        },
        "dataField": "employeeID.employeeID_Name",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "报销人",
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
        "resourceId": "domainID_DomainID_name_e3bdb6f3_kr50",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "domainID_DomainID_name_e3bdb6f3_kr50",
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
          "path": "domainID_DomainID_name",
          "isExpression": false,
          "value": "domainID_DomainID_name"
        },
        "dataField": "domainID.domainID_name",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "所属组织",
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
        "resourceId": "billCode_bc0603e3_qyu1",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "billCode_bc0603e3_qyu1",
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
          "path": "billCode",
          "isExpression": false,
          "value": "billCode"
        },
        "dataField": "billCode",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "单据编号",
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
        "linkedLabelEnabled": true,
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "totalSum_383b62f2_ng5l",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "totalSum_383b62f2_ng5l",
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
          "path": "totalSum",
          "isExpression": false,
          "value": "totalSum"
        },
        "dataField": "totalSum",
        "dataType": "number",
        "multiLanguage": false,
        "caption": "报账金额",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "sum",
          "formatter": {
            "precision": 2,
            "thousand": ",",
            "prefix": "￥",
            "suffix": "元",
            "decimal": ".",
            "type": "number"
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
          "decimal": ".",
          "prefix": "￥",
          "suffix": ""
        }
      },
      {
        "type": "GridField",
        "resourceId": "billDate_0ccc134a_9yle",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "billDate_0ccc134a_9yle",
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
          "path": "billDate",
          "isExpression": false,
          "value": "billDate"
        },
        "dataField": "billDate",
        "dataType": "datetime",
        "multiLanguage": false,
        "caption": "制单日期",
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
        "resourceId": "billNote_95792e85_bfz8",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "billNote_95792e85_bfz8",
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
          "path": "billNote",
          "fullPath": "BillNote",
          "isExpression": false,
          "value": "billNote"
        },
        "dataField": "billNote",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "报销说明",
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
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "auditStatus_4fc67503_2l7d",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "auditStatus_4fc67503_2l7d",
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
          "path": "auditStatus",
          "fullPath": "AuditStatus",
          "isExpression": false,
          "value": "auditStatus"
        },
        "dataField": "auditStatus",
        "dataType": "enum",
        "multiLanguage": false,
        "caption": "稽核状态",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "enumData": [
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
        ],
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
          "type": "custom",
          "customFormat": "(value, rowData) => {\r\n    const arr = [\r\n        {\r\n            \"name\": \"未稽核\",\r\n            \"value\": \"None\"\r\n        },\r\n        {\r\n            \"name\": \"稽核通过\",\r\n            \"value\": \"Passed\"\r\n        },\r\n        {\r\n            \"name\": \"稽核不通过\",\r\n            \"value\": \"Reject\"\r\n        }\r\n    ];\r\n      if (value) { \r\n          var item = arr.find(n => n.value == value);\r\n          if (item) {\r\n              return item.name;\r\n          } else { \r\n              return '未稽核'\r\n          }\r\n      }\r\n      return '未稽核'\r\n  }"
        }
      },
      {
        "type": "GridField",
        "resourceId": "billStatus_BillState_769d96b8_r5mi",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "billStatus_BillState_769d96b8_r5mi",
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
          "path": "billStatus_BillState",
          "isExpression": false,
          "value": "billStatus_BillState"
        },
        "dataField": "billStatus.billState",
        "dataType": "enum",
        "multiLanguage": false,
        "caption": "制单状态",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "enumData": [
          {
            "name": "制单",
            "value": "Billing"
          },
          {
            "name": "提交审批",
            "value": "SubmitApproval"
          },
          {
            "name": "审批通过",
            "value": "Approved"
          },
          {
            "name": "审批不通过",
            "value": "ApprovalNotPassed"
          }
        ],
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
            loadCommandName: 'Filter1',
            loadCommandFrameId: 'root-component'
        },
        paramDescriptions: {
            loadCommandName: { type: 'string' },
            loadCommandFrameId: { type: 'string' }
        }
    })
    public ChangePage1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridcomponentviewmodelexecute1',
        params: {
            commandName: 'View1',
            frameId: '#{root-component}'
        },
        paramDescriptions: {
            commandName: { type: 'string' },
            frameId: { type: 'string' }
        }
    })
    public datagridcomponentviewmodelexecute1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridcomponentviewmodelexecute2',
        params: {
            commandName: 'Edit1',
            frameId: '#{root-component}'
        },
        paramDescriptions: {
            commandName: { type: 'string' },
            frameId: { type: 'string' }
        }
    })
    public datagridcomponentviewmodelexecute2(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridcomponentviewmodelexecute3',
        params: {
            commandName: 'Remove1',
            frameId: '#{root-component}'
        },
        paramDescriptions: {
            commandName: { type: 'string' },
            frameId: { type: 'string' }
        }
    })
    public datagridcomponentviewmodelexecute3(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridcomponentviewmodelAuditBill1',
        params: {
            audit_id: '{DATA~/data-grid-component/id}',
            audit_flag: '1',
            refresh_数据刷新命令名称: 'Load1',
            refresh_数据刷新命令对应的FrameId: 'root-component'
        },
        paramDescriptions: {
            audit_id: { type: '' },
            audit_flag: { type: '' },
            refresh_数据刷新命令名称: { type: '' },
            refresh_数据刷新命令对应的FrameId: { type: '' }
        }
    })
    public datagridcomponentviewmodelAuditBill1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridcomponentviewmodelAuditBill2',
        params: {
            audit_id: '{DATA~/data-grid-component/id}',
            audit_flag: '0',
            refresh_数据刷新命令名称: 'Load1',
            refresh_数据刷新命令对应的FrameId: 'root-component'
        },
        paramDescriptions: {
            audit_id: { type: '' },
            audit_flag: { type: '' },
            refresh_数据刷新命令名称: { type: '' },
            refresh_数据刷新命令对应的FrameId: { type: '' }
        }
    })
    public datagridcomponentviewmodelAuditBill2(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridcomponentviewmodelshowChangeLog1',
        params: {
        }
    })
    public datagridcomponentviewmodelshowChangeLog1(commandParam?: any): Observable<any> { return; }

}