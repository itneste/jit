import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'testCardForm', loadChildren:'./testcardform/testcardform#testCardFormModule'},
  { path: 'list', loadChildren:'./list/list#listModule'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }