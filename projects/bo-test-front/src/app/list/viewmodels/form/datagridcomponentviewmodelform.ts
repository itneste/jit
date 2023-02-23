
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '附件',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'id',
        name: "{{id_5a79ad6b_usx1}}",
        binding: 'id',
        updateOn: 'blur',
        defaultI18nValue: '主键',
    })
    id: FormControl;

    @NgFormControl({
        id: 'version',
        name: "{{version_e90d6a92_kjmr}}",
        binding: 'version',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '版本',
    })
    version: FormControl;

    @NgFormControl({
        id: 's1',
        name: "{{s1_25a39e32_cxkc}}",
        binding: 's1',
        updateOn: 'blur',
        defaultI18nValue: 'S1',
    })
    s1: FormControl;

    @NgFormControl({
        id: 'i1',
        name: "{{i1_62b09912_ls77}}",
        binding: 'i1',
        updateOn: 'blur',
        defaultI18nValue: 'I1',
    })
    i1: FormControl;

    @NgFormControl({
        id: 'd1',
        name: "{{d1_98ed86ce_u2q7}}",
        binding: 'd1',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: 'D1',
    })
    d1: FormControl;

}