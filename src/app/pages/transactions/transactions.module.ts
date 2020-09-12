import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionshomeComponent } from './transactionshome/transactionshome.component';
import {TransactionsRoutingModule} from './transactions-routing.module';



@NgModule({
  declarations: [TransactionshomeComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ],
  exports:[TransactionshomeComponent]
})
export class TransactionsModule { }
