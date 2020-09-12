import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountshomeComponent} from './accountshome/accountshome.component';

const routes: Routes = [
  { path: '',  component: AccountshomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
