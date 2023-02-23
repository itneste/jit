
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateResolveService } from './lang/lang-pipe';
import { RootComponent } from './components/root-component/rootcomponent';

const routes: Routes = [
    {
        path: '',
        component: RootComponent,
        children: [
        ],
        resolve: {
            'translate': TranslateResolveService
        }
    
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class listRoutingModule {}
