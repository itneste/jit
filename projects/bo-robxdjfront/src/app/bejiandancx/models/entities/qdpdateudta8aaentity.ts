
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "BillDate",
    nodeCode: "billDate"
})
export class QdpDateUdtA8AAEntity extends Entity {

    @NgField({
        originalDataField: 'Equal',
        dataField: 'equal',
        originalDataFieldType: 'Date',
        initValue: '0001-01-01T00:00:00',
        path: 'BillDate.Equal',
    })
    equal: string;

    @NgField({
        originalDataField: 'Begin',
        dataField: 'begin',
        originalDataFieldType: 'Date',
        initValue: '0001-01-01T00:00:00',
        path: 'BillDate.Begin',
    })
    begin: string;

    @NgField({
        originalDataField: 'End',
        dataField: 'end',
        originalDataFieldType: 'Date',
        initValue: '0001-01-01T00:00:00',
        path: 'BillDate.End',
    })
    end: string;

}