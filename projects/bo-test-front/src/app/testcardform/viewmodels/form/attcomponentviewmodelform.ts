
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
export class AttComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'id',
        name: "{{id_1ca6bc0a_lxp8}}",
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
        id: 'parentID',
        name: "{{parentID_494a2f81_8i82}}",
        binding: 'parentID',
        updateOn: 'blur',
        defaultI18nValue: '上级对象主键',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    parentID: FormControl;

    @NgFormControl({
        id: 's11',
        name: "{{s11_fea4ceff_d4un}}",
        binding: 's11',
        updateOn: 'blur',
        defaultI18nValue: 'S11',
    })
    s11: FormControl;

    @NgFormControl({
        id: 'i11',
        name: "{{i11_cc9d60a9_4a08}}",
        binding: 'i11',
        updateOn: 'blur',
        defaultI18nValue: 'I11',
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
    i11: FormControl;

    @NgFormControl({
        id: 'd11',
        name: "{{d11_0fe25089_28fo}}",
        binding: 'd11',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: 'D11',
    })
    d11: FormControl;

    @NgFormControl({
        id: 'dT11',
        name: "{{dT11_532a4dc5_528i}}",
        binding: 'dT11',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: 'DT11',
    })
    dT11: FormControl;

    @NgFormControl({
        id: 'attachmentInfo.attachmentId',
        name: "{{attachmentInfo_AttachmentId_7ef8a426_vea2}}",
        binding: 'attachmentInfo.attachmentId',
        updateOn: 'blur',
        defaultI18nValue: '附件Id',
    })
    attachmentInfo_AttachmentId: FormControl;

    @NgFormControl({
        id: 'attachmentInfo.fileName',
        name: "{{attachmentInfo_FileName_7ef8a426_1fh4}}",
        binding: 'attachmentInfo.fileName',
        updateOn: 'blur',
        defaultI18nValue: '附件名称',
    })
    attachmentInfo_FileName: FormControl;

    @NgFormControl({
        id: 'attachmentInfo.fileSize',
        name: "{{attachmentInfo_FileSize_7ef8a426_zouj}}",
        binding: 'attachmentInfo.fileSize',
        updateOn: 'blur',
        defaultI18nValue: '附件大小',
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
    attachmentInfo_FileSize: FormControl;

    @NgFormControl({
        id: 'attachmentInfo.fileCreateTime',
        name: "{{attachmentInfo_FileCreateTime_7ef8a426_xiwg}}",
        binding: 'attachmentInfo.fileCreateTime',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '附件上传时间',
    })
    attachmentInfo_FileCreateTime: FormControl;

}