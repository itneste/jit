
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "FileInfo",
    nodeCode: "fileInfo"
})
export class AttachmentInfo905cEntity extends Entity {

    @NgField({
        originalDataField: 'AttachmentId',
        dataField: 'attachmentId',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'FileInfo.AttachmentId',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    attachmentId: string;

    @NgField({
        originalDataField: 'FileName',
        dataField: 'fileName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'FileInfo.FileName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [128],
                message: '最大长度为128',
            }
        ]
    })
    fileName: string;

    @NgField({
        originalDataField: 'FileSize',
        dataField: 'fileSize',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'FileInfo.FileSize',
    })
    fileSize: any;

    @NgField({
        originalDataField: 'FileCreateTime',
        dataField: 'fileCreateTime',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'FileInfo.FileCreateTime',
        enableTimeZone: true,
    })
    fileCreateTime: string;

}