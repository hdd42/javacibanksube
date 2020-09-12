import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {AntUiModule} from '../../ant-ui.module';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [WelcomeRoutingModule, AntUiModule,CommonModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
