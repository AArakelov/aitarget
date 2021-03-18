import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BookFormBuilderService} from '../../services/forms/book-form-builder.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {BookingService} from '../../services/api/booking.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  form: FormGroup;
  showButton = false;
  subscription: Subscription;


  constructor(private _fb: BookFormBuilderService,
              private route: ActivatedRoute,
              private _bookService: BookingService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.route.params.pipe(
      map(item => item.id))
      .subscribe(value => {
        const book = this._bookService.getBookById(value);
        this.form = this._fb.fixedBook(book);
        this.form.disable();
      });

  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const isbn = this.form.get('isbn').value;
    this._bookService.updateBook(isbn, this.form.value);
  }

  /* Разблокируем форму для редактирования*/
  editForm(): void {
    this.showButton = true;
    this.form.enable();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
