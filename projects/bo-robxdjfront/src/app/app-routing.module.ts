import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'ExpenseBill', loadChildren:'./expensebill/expensebill#ExpenseBillModule'},
  { path: 'ExpenseList', loadChildren:'./expenselist/expenselist#ExpenseListModule'},
  { path: 'bxed', loadChildren:'./bxed/bxed#bxedModule'},
  { path: 'baoxiaodanchaxun', loadChildren:'./baoxiaodanchaxun/baoxiaodanchaxun#baoxiaodanchaxunModule'},
  { path: 'bejiandancx', loadChildren:'./bejiandancx/bejiandancx#bejiandancxModule'},
  { path: 'bxdzdycx', loadChildren:'./bxdzdycx/bxdzdycx#bxdzdycxModule'},
  { path: 'searchHome', loadChildren:'./searchhome/searchhome#searchHomeModule'},
  { path: 'searchHomequeryResult', loadChildren:'./searchhomequeryresult/searchhomequeryresult#searchHomequeryResultModule'},
  { path: 'searchResult', loadChildren:'./searchresult/searchresult#searchResultModule'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }