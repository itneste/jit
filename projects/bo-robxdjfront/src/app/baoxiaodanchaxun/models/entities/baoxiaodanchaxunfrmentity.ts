
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "baoxiaodanchaxun_frm",
    nodeCode: "baoxiaodanchaxun_frms"
})
export class BaoxiaodanchaxunFrmEntity extends Entity {

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

}