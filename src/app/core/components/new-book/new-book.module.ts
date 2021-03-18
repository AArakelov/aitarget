import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewBookComponent} from './new-book.component';
import {RouterModule, Routes} from '@angular/router';
import {BookDetailModule} from '../book-detail/book-detail.module';
import {RatingModule} from '../rating/rating.module';
import {ReactiveFormsModule} from '@angular/forms';
import {BookListModule} from '../book-list/book-list.module';

const routes: Routes = [
  {
    path: '',
    component: NewBookComponent
  }
];
@NgModule({
  declarations: [NewBookComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), RatingModule, ReactiveFormsModule, BookListModule
  ], exports: [NewBookComponent, RouterModule]
})
export class NewBookModule {
}
