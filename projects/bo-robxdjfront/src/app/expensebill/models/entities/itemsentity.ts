
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "items",
    nodeCode: "itemss"
})
export class ItemsEntity extends Entity {

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
        originalDataField: 'BillDetailDate',
        dataField: 'billDetailDate',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'BillDetailDate',
        enableTimeZone: true,
    })
    billDetailDate: string;

    @NgField({
        originalDataField: 'BillDetailAmount',
        dataField: 'billDetailAmount',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'BillDetailAmount',
    })
    billDetailAmount: any;

    @NgField({
        originalDataField: 'DetailNote',
        dataField: 'detailNote',
        originalDataFieldType: 'Text',
        initValue: '',
        path: 'DetailNote',
    })
    detailNote: any;

    @NgField({
        originalDataField: 'InvoiceNO',
        dataField: 'invoiceNO',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'InvoiceNO',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    invoiceNO: string;

}