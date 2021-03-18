import {Component, OnInit} from '@angular/core';
import {BookFormBuilderService} from '../../services/forms/book-form-builder.service';
import {BookingService} from '../../services/api/booking.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
})
export class NewBookComponent implements OnInit {
  form: FormGroup;

  constructor(private _fb: BookFormBuilderService,
              private _bookService: BookingService) {
  }

  ngOnInit(): void {
    this.form = this._fb.fixedBook();
  }

  onSubmit(): void{
    if (this.form.invalid) {
      return;
    }
    this.form.get('image').setValue('no-photo');
    this._bookService.addBook(this.form.value);
  }
}
