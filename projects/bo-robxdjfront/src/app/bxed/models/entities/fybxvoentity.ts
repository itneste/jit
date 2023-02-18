
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "fybxvo",
    nodeCode: "fybxvos"
})
export class FybxvoEntity extends Entity {

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
        originalDataField: 'org',
        dataField: 'org',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'org',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    org: string;

    @NgField({
        originalDataField: 'emp',
        dataField: 'emp',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'emp',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    emp: string;

    @NgField({
        originalDataField: 'totalmoney',
        dataField: 'totalmoney',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'totalmoney',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    totalmoney: string;

    @NgField({
        originalDataField: 'limmoney',
        dataField: 'limmoney',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'limmoney',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    limmoney: string;

}