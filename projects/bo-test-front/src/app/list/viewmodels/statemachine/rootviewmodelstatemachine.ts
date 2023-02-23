
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
        render: (context: any) => context.state === 'init'
    })
    canRemove: RenderState;

    @NgRenderState({
        render: (context: any) => context.state === 'init'
    })
    canEdit: RenderState;

    @NgRenderState({
        render: (context: any) => context.state === 'init'
    })
    canAdd: RenderState;

}