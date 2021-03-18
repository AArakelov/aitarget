import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class BookFormBuilderService {
  formGroup: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _fb: FormBuilder) {
  }

  public fixedBook(book?: Book): FormGroup {
    if (!book) {
      /*Добавление новой книги*/
      return this.formGroup = this._fb.group({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', Validators.required),
        author: new FormControl('', Validators.required),
        publishing: new FormControl('', Validators.required),
        isbn: new FormControl('', Validators.required),
        year: new FormControl('', Validators.required),
        countPages: new FormControl(''),
        image: new FormControl(''),
        rating: new FormControl(null),
        feedback: new FormControl(''),
        marginalia: new FormControl(''),
      });
    } else {
      /*Редактирование книги*/
      return this.formGroup = this._fb.group({
        name: new FormControl(book.name, [Validators.required]),
        description: new FormControl(book.description, Validators.required),
        author: new FormControl(book.author, Validators.required),
        publishing: new FormControl(book.publishing, Validators.required),
        isbn: new FormControl(book.isbn, Validators.required),
        year: new FormControl(book.year, Validators.required),
        countPages: new FormControl(book.countPages),
        rating: new FormControl(book.rating),
        feedback: new FormControl(book.feedback),
        marginalia: new FormControl(book.marginalia),
      });
    }
  }
}
