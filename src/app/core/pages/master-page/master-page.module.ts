import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MasterPageComponent} from './master-page.component';
import {RouterModule} from '@angular/router';
import {HeaderTopModule} from '../../components/header-top/header-top.module';



@NgModule({
  declarations: [MasterPageComponent],
  imports: [
    CommonModule, RouterModule, HeaderTopModule
  ], exports: [MasterPageComponent]
})
export class MasterPageModule { }
