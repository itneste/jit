
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { ItemsEntity } from './itemsentity';
import { FilesEntity } from './filesentity';
import { BillState5c97Entity } from './billstate5c97entity';
import { ProcessInstance4ffaEntity } from './processinstance4ffaentity';
import { GspUserDD50Entity } from './gspuserdd50entity';
import { SysOrg95ccEntity } from './sysorg95ccentity';
import { GspUser46ecEntity } from './gspuser46ecentity';

@NgEntity({
    originalCode: "ROBXDJ",
    nodeCode: "robxdjs"
})
export class ROBXDJEntity extends Entity {

    @NgField({
        originalDataField: 'ID',
        dataField: 'id',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ID',

        validRules: [
            {
                type: 'required',
                constraints: [true],
            },
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    id: string;

    @NgField({
        originalDataField: 'Version',
        dataField: 'version',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'Version',
        enableTimeZone: true,
    })
    version: string;

    @NgField({
        originalDataField: 'BillCode',
        dataField: 'billCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'BillCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    billCode: string;

    @NgField({
        originalDataField: 'TotalSum',
        dataField: 'totalSum',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'TotalSum',
    })
    totalSum: any;

    @NgField({
        originalDataField: 'BillType',
        dataField: 'billType',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'JT',
        path: 'BillType',
    })
    billType: any;

    @NgField({
        originalDataField: 'SecID',
        dataField: 'secID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'SecID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    secID: string;

    @NgField({
        originalDataField: 'SecLevel',
        dataField: 'secLevel',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'SecLevel',
    })
    secLevel: any;

    @NgField({
        originalDataField: 'ProjectID',
        dataField: 'projectID_MULTILANGUAGE',
        originalDataFieldType: 'String',
        enableMultiLangInput: true,
        initValue: '',
        path: 'ProjectID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    projectID: string;

    @NgField({
        originalDataField: 'BillNote',
        dataField: 'billNote',
        originalDataFieldType: 'Text',
        initValue: '',
        path: 'BillNote',
    })
    billNote: any;

    @NgField({
        originalDataField: 'AuditStatus',
        dataField: 'auditStatus',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'AuditStatus',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    auditStatus: string;

    @NgField({
        originalDataField: 'BillDate',
        dataField: 'billDate',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'BillDate',
        enableTimeZone: true,
    })
    billDate: string;

    @NgList({
        dataField: 'itemss',
        originalDataField: '',
        type: ItemsEntity

    })

    itemss: EntityList<ItemsEntity>;
    @NgList({
        dataField: 'filess',
        originalDataField: '',
        type: FilesEntity

    })

    filess: EntityList<FilesEntity>;
    @NgObject({
        dataField: 'billStatus',
        originalDataField: 'BillStatus',
        type: BillState5c97Entity
    })
    billStatus: BillState5c97Entity;
    @NgObject({
        dataField: 'processInstance',
        originalDataField: 'ProcessInstance',
        type: ProcessInstance4ffaEntity
    })
    processInstance: ProcessInstance4ffaEntity;
    @NgObject({
        dataField: 'employeeID',
        originalDataField: 'EmployeeID',
        type: GspUserDD50Entity
    })
    employeeID: GspUserDD50Entity;
    @NgObject({
        dataField: 'domainID',
        originalDataField: 'DomainID',
        type: SysOrg95ccEntity
    })
    domainID: SysOrg95ccEntity;
    @NgObject({
        dataField: 'projectMgr',
        originalDataField: 'ProjectMgr',
        type: GspUser46ecEntity
    })
    projectMgr: GspUser46ecEntity;
}