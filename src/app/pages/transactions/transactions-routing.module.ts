import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactionshomeComponent} from './transactionshome/transactionshome.component';


const routes: Routes = [
  { path: '',  component: TransactionshomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
