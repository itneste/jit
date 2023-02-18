import { Injectable } from '@angular/core';
import { Repository, FrameContext } from '@farris/devkit';
import { of } from 'rxjs';

@Injectable()
export class ExpenseBillFrmBxdjServiceService {
    constructor(private frameContext: FrameContext) { }

    afterClearBumen() {
        this.frameContext.bindingData.setValue(['employeeID', 'employeeID'], null, true, true);
        this.frameContext.bindingData.setValue(['employeeID', 'employeeID_Code'], null, true, true);
        this.frameContext.bindingData.setValue(['employeeID', 'employeeID_Name'], null, true, true);
    }

    // 报销人帮助前事件
    beforeEmpHlp() {
        const uiState = this.frameContext.appContext.frameContextManager.getFrameContextById('root-component').uiState;
        const orgId = this.frameContext.bindingData['domainID']['domainID'];
        uiState.setPropertyValue('orgid', orgId);
        return of(true);
    }
}
