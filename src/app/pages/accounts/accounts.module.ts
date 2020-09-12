import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountshomeComponent } from './accountshome/accountshome.component';
import {AccountsRoutingModule} from './accounts-routing.module';



@NgModule({
  declarations: [AccountshomeComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ],
  exports:[AccountshomeComponent]
})
export class AccountsModule { }
