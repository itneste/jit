
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '附件列表',
    enableValidate: true
})

@Injectable()
export class FilesComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'fileInfo.fileName',
        name: "{{fileInfo_FileName_905c5431_8m01}}",
        binding: 'fileInfo.fileName',
        updateOn: 'blur',
        defaultI18nValue: '附件名称',
    })
    fileInfo_FileName: FormControl;

    @NgFormControl({
        id: 'fileInfo.fileSize',
        name: "{{fileInfo_FileSize_905c5431_6bzx}}",
        binding: 'fileInfo.fileSize',
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
    fileInfo_FileSize: FormControl;

    @NgFormControl({
        id: 'fileInfo.fileCreateTime',
        name: "{{fileInfo_FileCreateTime_905c5431_4lhi}}",
        binding: 'fileInfo.fileCreateTime',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '附件上传时间',
    })
    fileInfo_FileCreateTime: FormControl;

}