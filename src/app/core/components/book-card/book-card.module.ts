import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookCardComponent} from './book-card.component';
import {RouterModule} from '@angular/router';
import {RatingModule} from '../rating/rating.module';



@NgModule({
  declarations: [BookCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule
  ], exports: [BookCardComponent]
})
export class BookCardModule { }
