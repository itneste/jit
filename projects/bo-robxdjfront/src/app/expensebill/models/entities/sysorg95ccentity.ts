
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "DomainID",
    nodeCode: "domainID"
})
export class SysOrg95ccEntity extends Entity {

    @NgField({
        originalDataField: 'DomainID',
        dataField: 'domainID',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'DomainID.DomainID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    domainID: string;

    @NgField({
        originalDataField: 'code',
        dataField: 'domainID_code',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'DomainID.DomainID_code',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    domainID_code: string;

    @NgField({
        originalDataField: 'name',
        dataField: 'domainID_name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'DomainID.DomainID_name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    domainID_name: string;

}