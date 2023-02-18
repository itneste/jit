
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '报销限额',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'org',
        name: "{{org_d90bd8f0_zfii}}",
        binding: 'org',
        updateOn: 'blur',
        defaultI18nValue: '组织',
    })
    org: FormControl;

    @NgFormControl({
        id: 'emp',
        name: "{{emp_061bdc3e_yint}}",
        binding: 'emp',
        updateOn: 'blur',
        defaultI18nValue: '人员',
    })
    emp: FormControl;

    @NgFormControl({
        id: 'totalmoney',
        name: "{{totalmoney_d81a2e5e_hlir}}",
        binding: 'totalmoney',
        updateOn: 'blur',
        defaultI18nValue: '报销总额',
    })
    totalmoney: FormControl;

    @NgFormControl({
        id: 'limmoney',
        name: "{{limmoney_14b1c40f_39u9}}",
        binding: 'limmoney',
        updateOn: 'blur',
        defaultI18nValue: '报销限额',
    })
    limmoney: FormControl;

}