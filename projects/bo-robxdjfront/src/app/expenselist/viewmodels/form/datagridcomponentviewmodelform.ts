
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '报销单据',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'billStatus.billState',
        name: "{{billStatus_BillState_769d96b8_r5mi}}",
        binding: 'billStatus.billState',
        updateOn: 'change',
        defaultI18nValue: '制单状态',
    })
    billStatus_BillState: FormControl;

    @NgFormControl({
        id: 'employeeID.employeeID_Name',
        name: "{{employeeID_EmployeeID_Name_2d7db0e1_rh1h}}",
        binding: 'employeeID.employeeID_Name',
        updateOn: 'blur',
        defaultI18nValue: '报销人',
    })
    employeeID_EmployeeID_Name: FormControl;

    @NgFormControl({
        id: 'domainID.domainID_name',
        name: "{{domainID_DomainID_name_e3bdb6f3_kr50}}",
        binding: 'domainID.domainID_name',
        updateOn: 'blur',
        defaultI18nValue: '所属组织',
    })
    domainID_DomainID_name: FormControl;

    @NgFormControl({
        id: 'billCode',
        name: "{{billCode_bc0603e3_qyu1}}",
        binding: 'billCode',
        updateOn: 'blur',
        defaultI18nValue: '单据编号',
    })
    billCode: FormControl;

    @NgFormControl({
        id: 'totalSum',
        name: "{{totalSum_383b62f2_ng5l}}",
        binding: 'totalSum',
        updateOn: 'blur',
        defaultI18nValue: '报账金额',
    })
    totalSum: FormControl;

    @NgFormControl({
        id: 'billType',
        name: "{{billType_ccdcdcfd_lkao}}",
        binding: 'billType',
        updateOn: 'change',
        defaultI18nValue: '报销类型',
    })
    billType: FormControl;

    @NgFormControl({
        id: 'billDate',
        name: "{{billDate_0ccc134a_9yle}}",
        binding: 'billDate',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '制单日期',
    })
    billDate: FormControl;

    @NgFormControl({
        id: 'auditStatus',
        name: "{{auditStatus_4fc67503_2l7d}}",
        binding: 'auditStatus',
        updateOn: 'blur',
        defaultI18nValue: '稽核状态',
    })
    auditStatus: FormControl;

    @NgFormControl({
        id: 'billNote',
        name: "{{billNote_95792e85_bfz8}}",
        binding: 'billNote',
        updateOn: 'blur',
        defaultI18nValue: '报销说明',
    })
    billNote: FormControl;

}