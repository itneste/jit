
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { AttachmentInfoBed9Entity } from './attachmentinfobed9entity';

@NgEntity({
    originalCode: "Att",
    nodeCode: "atts"
})
export class AttEntity extends Entity {

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
        originalDataField: 'ParentID',
        dataField: 'parentID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ParentID',

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
    parentID: string;

    @NgField({
        originalDataField: 'S11',
        dataField: 's11',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'S11',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    s11: string;

    @NgField({
        originalDataField: 'I11',
        dataField: 'i11',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'I11',
    })
    i11: any;

    @NgField({
        originalDataField: 'D11',
        dataField: 'd11',
        originalDataFieldType: 'Date',
        initValue: '0001-01-01T00:00:00',
        path: 'D11',
    })
    d11: string;

    @NgField({
        originalDataField: 'DT11',
        dataField: 'dT11',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'DT11',
        enableTimeZone: true,
    })
    dT11: string;

    @NgObject({
        dataField: 'attachmentInfo',
        originalDataField: 'AttachmentInfo',
        type: AttachmentInfoBed9Entity
    })
    attachmentInfo: AttachmentInfoBed9Entity;
}