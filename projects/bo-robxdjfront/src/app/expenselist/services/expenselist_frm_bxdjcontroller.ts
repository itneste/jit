import { Injectable } from '@angular/core';
import { ChgdrListUiService } from '@gsp-cmp/chgdr';
import { AppContext } from '@farris/devkit';
import { FrameContext, BindingData, Repository } from '@farris/devkit';
import { BefRepository, RequestInfo, ResponseInfo } from '@farris/bef';
import { CardDataService, ListDataService, BeActionService, FormMessageService } from '@farris/command-services';
import { tap } from 'rxjs/operators';

@Injectable()
export class ExpenseListFrmBXDJControllerService {
    constructor(
        private chgdrListUiService: ChgdrListUiService,
        private appContext: AppContext,
        private frameContext: FrameContext,
        private cardDataService: CardDataService,
        private beActionService: BeActionService,
        private messageService: FormMessageService
    ) { }

    // 稽核方法 
    public audit(id, flag) {
        const bindingData = this.frameContext.bindingData;
        const repository = this.frameContext.repository as BefRepository<any>;
        const requestInfo = repository.restService.buildRequestInfo();
        const actionUri = 'auditbill';
        const body = {
            id: id,
            flag: flag,
            requestInfo: requestInfo
        }
        const action$ = this.beActionService.invokeAction(actionUri, 'PUT', null, null, body);
        return action$.pipe(
            tap((responseInfo: ResponseInfo) => {
                this.messageService.info("已稽核完成!");
            })
        )
    }

    public showChgdrList() {
​        const entityId = "80307b1d-5a80-429f-9ce9-92e2fbcf94e5";
​        const dataId = this.appContext.getFrameContext('data-grid-component').bindingData.list.currentItem.getValue("id");
​        this.chgdrListUiService.showDialog(entityId, dataId);
​    }
}
