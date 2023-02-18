
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: 'searchHome_frm',
    enableValidate: false
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
        id: 'emp_55c1353b_j313',
        name: "{{emp_55c1353b_j313}}",
        binding: 'emp',
        updateOn: 'blur',
        defaultI18nValue: '报销人',
    })
    emp: FormControl;

    @NgFormControl({
        id: 'org_cea34aac_fage',
        name: "{{org_cea34aac_fage}}",
        binding: 'org',
        updateOn: 'blur',
        defaultI18nValue: '所属组织',
    })
    org: FormControl;

}