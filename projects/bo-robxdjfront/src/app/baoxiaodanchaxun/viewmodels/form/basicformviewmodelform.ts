
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: 'baoxiaodanchaxun_frm',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
        id: 'emp_b682dcb2_dhm7',
        name: "{{emp_b682dcb2_dhm7}}",
        binding: 'emp',
        defaultI18nValue: '报销人',
    })
    emp: FormControl;

    @NgFormControl({
        id: 'org_0067feb1_nkog',
        name: "{{org_0067feb1_nkog}}",
        binding: 'org',
        defaultI18nValue: '所属组织',
    })
    org: FormControl;

}