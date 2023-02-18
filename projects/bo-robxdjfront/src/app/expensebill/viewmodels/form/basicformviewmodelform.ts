
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '报销单据',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
        id: 'billStatus_BillState_5c977852_irip',
        name: "{{billStatus_BillState_5c977852_irip}}",
        binding: 'billStatus.billState',
        updateOn: 'change',
        defaultI18nValue: '状态',
    })
    billStatus_BillState: FormControl;

    @NgFormControl({
        id: 'employeeID_EmployeeID_Name_c9b45201_0ywt',
        name: "{{employeeID_EmployeeID_Name_c9b45201_0ywt}}",
        binding: 'employeeID.employeeID_Name',
        updateOn: 'blur',
        defaultI18nValue: '报销人',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    employeeID_EmployeeID_Name: FormControl;

    @NgFormControl({
        id: 'billCode_f9d42426_uf3d',
        name: "{{billCode_f9d42426_uf3d}}",
        binding: 'billCode',
        updateOn: 'blur',
        defaultI18nValue: '单据编号',
    })
    billCode: FormControl;

    @NgFormControl({
        id: 'totalSum_25264603_rl36',
        name: "{{totalSum_25264603_rl36}}",
        binding: 'totalSum',
        updateOn: 'blur',
        defaultI18nValue: '报账金额',
    })
    totalSum: FormControl;

    @NgFormControl({
        id: 'billType_559e98ea_qx5m',
        name: "{{billType_559e98ea_qx5m}}",
        binding: 'billType',
        updateOn: 'change',
        defaultI18nValue: '报销类型',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    billType: FormControl;

    @NgFormControl({
        id: 'projectID_4f86bd9a_4ytt',
        name: "{{projectID_4f86bd9a_4ytt}}",
        binding: 'projectID',
        updateOn: 'blur',
        defaultI18nValue: '所属项目',
        valueConverter: new MultiLangConverter(),
    })
    projectID: FormControl;

    @NgFormControl({
        id: 'billNote_70100057_nqkf',
        name: "{{billNote_70100057_nqkf}}",
        binding: 'billNote',
        updateOn: 'blur',
        defaultI18nValue: '报销说明',
    })
    billNote: FormControl;

    @NgFormControl({
        id: 'projectMgr_ProjectMgr_Name_1394ebaf_jp1t',
        name: "{{projectMgr_ProjectMgr_Name_1394ebaf_jp1t}}",
        binding: 'projectMgr.projectMgr_Name',
        updateOn: 'blur',
        defaultI18nValue: '项目经理',
    })
    projectMgr_ProjectMgr_Name: FormControl;

    @NgFormControl({
        id: 'domainID_DomainID_name_0c87bed3_ntks',
        name: "{{domainID_DomainID_name_0c87bed3_ntks}}",
        binding: 'domainID.domainID_name',
        updateOn: 'blur',
        defaultI18nValue: '所属组织',
    })
    domainID_DomainID_name: FormControl;

    @NgFormControl({
        id: 'billDate_3eddf18e_w5ws',
        name: "{{billDate_3eddf18e_w5ws}}",
        binding: 'billDate',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '制单日期',
    })
    billDate: FormControl;

}