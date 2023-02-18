
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { ItemsEntity } from './itemsentity';
import { FilesEntity } from './filesentity';
import { BillState769dEntity } from './billstate769dentity';
import { ProcessInstance8e87Entity } from './processinstance8e87entity';
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
        dataField: 'projectID',
        originalDataFieldType: 'String',
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
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'None',
        path: 'AuditStatus',
    })
    auditStatus: any;

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
        type: BillState769dEntity
    })
    billStatus: BillState769dEntity;
    @NgObject({
        dataField: 'processInstance',
        originalDataField: 'ProcessInstance',
        type: ProcessInstance8e87Entity
    })
    processInstance: ProcessInstance8e87Entity;
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