
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "ProjectMgr",
    nodeCode: "projectMgr"
})
export class GspUser46ecEntity extends Entity {

    @NgField({
        originalDataField: 'ProjectMgr',
        dataField: 'projectMgr',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ProjectMgr.ProjectMgr',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    projectMgr: string;

    @NgField({
        originalDataField: 'Code',
        dataField: 'projectMgr_Code',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ProjectMgr.ProjectMgr_Code',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    projectMgr_Code: string;

    @NgField({
        originalDataField: 'Name',
        dataField: 'projectMgr_Name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ProjectMgr.ProjectMgr_Name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    projectMgr_Name: string;

}