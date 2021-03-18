import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderTopComponent} from './header-top.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [HeaderTopComponent],
    imports: [
        CommonModule,
        RouterModule
    ], exports:[HeaderTopComponent]
})
export class HeaderTopModule { }
