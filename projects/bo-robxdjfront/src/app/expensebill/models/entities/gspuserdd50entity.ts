
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "EmployeeID",
    nodeCode: "employeeID"
})
export class GspUserDD50Entity extends Entity {

    @NgField({
        originalDataField: 'EmployeeID',
        dataField: 'employeeID',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'EmployeeID.EmployeeID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    employeeID: string;

    @NgField({
        originalDataField: 'Code',
        dataField: 'employeeID_Code',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'EmployeeID.EmployeeID_Code',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    employeeID_Code: string;

    @NgField({
        originalDataField: 'Name',
        dataField: 'employeeID_Name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'EmployeeID.EmployeeID_Name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    employeeID_Name: string;

}