
import { Injectable } from '@angular/core';
import { StateMachine, State, NgState, RenderState, NgRenderState, Action, NgAction } from '@farris/devkit';

@Injectable()
export class RootViewmodelStateMachine extends StateMachine {

    @NgState({
        initialState: true,
        name: "初始"  
    })
    init: State;

    @NgRenderState({
        render: (context: any) => context.state === 'init'
    })
    canView: RenderState;

    @NgRenderState({
        render: (context: any) => context.state === 'init' && (context.getData('{DATA~/root-component/auditStatus}') === 'None' || context.getData('{DATA~/root-component/auditStatus}') === null)
    })
    canRemove: RenderState;

    @NgRenderState({
        render: (context: any) => context.state === 'init'
    })
    canCancelApprove: RenderState;

    @NgRenderState({
        render: (context: any) => context.state === 'init'
    })
    canApprove: RenderState;

    @NgRenderState({
        render: (context: any) => context.state === 'init' && (context.getData('{DATA~/root-component/auditStatus}') === 'None' || context.getData('{DATA~/root-component/auditStatus}') === null)
    })
    canEdit: RenderState;

    @NgRenderState({
        render: (context: any) => context.state === 'init'
    })
    canAdd: RenderState;

    @NgRenderState({
        render: (context: any) => context.getData('{DATA~/root-component/auditStatus}') === 'None' || context.getData('{DATA~/root-component/auditStatus}') === null
    })
    canAudit: RenderState;

}