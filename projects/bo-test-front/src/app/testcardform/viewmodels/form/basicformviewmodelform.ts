
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '附件',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
        id: 'id_47464863_40ml',
        name: "{{id_47464863_40ml}}",
        binding: 'id',
        updateOn: 'blur',
        defaultI18nValue: '主键',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    id: FormControl;

    @NgFormControl({
        id: 'version_fb798347_1ujk',
        name: "{{version_fb798347_1ujk}}",
        binding: 'version',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '版本',
    })
    version: FormControl;

    @NgFormControl({
        id: 's1_74c1cc20_pcip',
        name: "{{s1_74c1cc20_pcip}}",
        binding: 's1',
        updateOn: 'blur',
        defaultI18nValue: 'S1',
    })
    s1: FormControl;

    @NgFormControl({
        id: 'i1_df866bb8_fliu',
        name: "{{i1_df866bb8_fliu}}",
        binding: 'i1',
        updateOn: 'blur',
        defaultI18nValue: 'I1',
    })
    i1: FormControl;

    @NgFormControl({
        id: 'd1_8fe1d305_5qmt',
        name: "{{d1_8fe1d305_5qmt}}",
        binding: 'd1',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: 'D1',
    })
    d1: FormControl;

}