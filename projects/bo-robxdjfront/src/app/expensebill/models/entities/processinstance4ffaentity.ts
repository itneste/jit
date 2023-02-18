
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "ProcessInstance",
    nodeCode: "processInstance"
})
export class ProcessInstance4ffaEntity extends Entity {

    @NgField({
        originalDataField: 'ProcessInstance',
        dataField: 'processInstance',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ProcessInstance.ProcessInstance',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    processInstance: string;

}