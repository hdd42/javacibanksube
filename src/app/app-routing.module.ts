import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthenticationGuard} from './authentication.guard';
import {Four04Component} from './four04/four04.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'accounts', canActivate:[AuthenticationGuard], loadChildren: () => import('./pages/accounts/accounts.module').then(m => m.AccountsModule) },
  { path: 'transactions',canActivate:[AuthenticationGuard], loadChildren: () => import('./pages/transactions/transactions.module').then(m => m.TransactionsModule) },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: '**', component:Four04Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
