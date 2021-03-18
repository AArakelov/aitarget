import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookingService} from '../../services/api/booking.service';
import {Book} from '../../models/models';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit, OnDestroy {
  public books: Book[] = [];
  subscription: Subscription;

  // tslint:disable-next-line:variable-name
  constructor(private _bookingService: BookingService) {
  }

  ngOnInit(): void {
    this.subscription = this._bookingService.getBooks().subscribe(value => {
      this.books = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
