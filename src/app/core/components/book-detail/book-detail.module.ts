import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookDetailComponent} from './book-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {RatingModule} from '../rating/rating.module';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: BookDetailComponent
  }
];

@NgModule({
  declarations: [BookDetailComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), RatingModule, ReactiveFormsModule
  ], exports: [BookDetailComponent]
})
export class BookDetailModule {
}
