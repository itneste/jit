
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '报销明细',
    enableValidate: true
})

@Injectable()
export class ItemsComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'billDetailDate',
        name: "{{billDetailDate_57c21192_ztrj}}",
        binding: 'billDetailDate',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '费用日期',
    })
    billDetailDate: FormControl;

    @NgFormControl({
        id: 'billDetailAmount',
        name: "{{billDetailAmount_5f8e1561_ebx1}}",
        binding: 'billDetailAmount',
        updateOn: 'blur',
        defaultI18nValue: '费用金额',
        validRules: [
            {
                type: 'maxValue',
                constraints: [1.7976931348623157e+308],
            },
            {
                type: 'minValue',
                constraints: [-1.7976931348623157e+308],
            }
        ]
    })
    billDetailAmount: FormControl;

    @NgFormControl({
        id: 'detailNote',
        name: "{{detailNote_37529f62_izd1}}",
        binding: 'detailNote',
        updateOn: 'blur',
        defaultI18nValue: '费用说明',
    })
    detailNote: FormControl;

    @NgFormControl({
        id: 'invoiceNO',
        name: "{{invoiceNO_0d97df4c_q3s9}}",
        binding: 'invoiceNO',
        updateOn: 'blur',
        defaultI18nValue: '发票号码',
    })
    invoiceNO: FormControl;

}