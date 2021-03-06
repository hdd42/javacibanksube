import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {LoginComponent} from './login/login.component';
import {AntUiModule} from './ant-ui.module';
import {RegisterComponent} from './register/register.component';
import {environment} from '../environments/environment';
import { Four04Component } from './four04/four04.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    Four04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    AntUiModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US},
    {provide: 'API', useValue: environment.api}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
