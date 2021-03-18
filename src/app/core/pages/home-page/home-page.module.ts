import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderTopModule} from '../../components/header-top/header-top.module';
import {BookCardModule} from '../../components/book-card/book-card.module';
import {BookListModule} from '../../components/book-list/book-list.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), HeaderTopModule, BookCardModule, BookListModule
  ], exports: [HomePageComponent, RouterModule]
})
export class HomePageModule {
}
