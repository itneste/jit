
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { QdpDateUdtA8AAEntity } from './qdpdateudta8aaentity';

@NgEntity({
    originalCode: "bejiandancx_frm",
    nodeCode: "bejiandancx_frms"
})
export class BejiandancxFrmEntity extends Entity {

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
        originalDataField: 'EmployeeID_Name',
        dataField: 'employeeID_Name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'EmployeeID_Name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    employeeID_Name: string;

    @NgField({
        originalDataField: 'DomainID_name',
        dataField: 'domainID_name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'DomainID_name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    domainID_name: string;

    @NgObject({
        dataField: 'billDate',
        originalDataField: 'BillDate',
        type: QdpDateUdtA8AAEntity
    })
    billDate: QdpDateUdtA8AAEntity;
}