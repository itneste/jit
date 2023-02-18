
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { AttachmentInfo905cEntity } from './attachmentinfo905centity';

@NgEntity({
    originalCode: "files",
    nodeCode: "filess"
})
export class FilesEntity extends Entity {

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
        originalDataField: 'FileName',
        dataField: 'fileName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'FileName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    fileName: string;

    @NgField({
        originalDataField: 'FilePath',
        dataField: 'filePath',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'FilePath',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    filePath: string;

    @NgField({
        originalDataField: 'FileSize',
        dataField: 'fileSize',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'FileSize',
    })
    fileSize: any;

    @NgObject({
        dataField: 'fileInfo',
        originalDataField: 'FileInfo',
        type: AttachmentInfo905cEntity
    })
    fileInfo: AttachmentInfo905cEntity;
}