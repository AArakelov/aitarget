import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Book} from '../../models/models';
import {BookItems} from '../../book.config';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  public books: Book[] = BookItems;
  public books$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(BookItems);

  constructor() {
  }

  public getBooks(): Observable<Book[]> {
    return this.books$;
  }

  public addBook(book: Book): void {
    this.books.push(book);
    this.books$.next(this.books);
  }

  public updateBook(isbn, book: Book): void {
    this.books = this.books.map(i => {
      if (i.isbn === isbn) {
        return Object.assign({}, i, book);
      }
      return i;
    });
    this.books$.next(this.books);
  }

  getBookById(id): Book {
    const findBook = this.books.filter(item => {
      return item.isbn === id;
    });
    return findBook[0];
  }

}
