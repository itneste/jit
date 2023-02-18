
import { Injectable } from '@angular/core';
import { UIState, NgParam } from '@farris/devkit';

@Injectable()
export class RootViewmodelUIState extends UIState {

    @NgParam({ originalDataType: "String", category: "locale"})
    public originalFilterConditionList: string = '';

}