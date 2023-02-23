
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { AttEntity } from './attentity';

@NgEntity({
    originalCode: "AttachmentEntity",
    nodeCode: "attachmentEntitys"
})
export class AttachmentEntityEntity extends Entity {

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
        originalDataField: 'S1',
        dataField: 's1',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'S1',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    s1: string;

    @NgField({
        originalDataField: 'I1',
        dataField: 'i1',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'I1',
    })
    i1: any;

    @NgField({
        originalDataField: 'D1',
        dataField: 'd1',
        originalDataFieldType: 'Date',
        initValue: '0001-01-01T00:00:00',
        path: 'D1',
    })
    d1: string;

    @NgList({
        dataField: 'atts',
        originalDataField: '',
        type: AttEntity

    })

    atts: EntityList<AttEntity>;
}