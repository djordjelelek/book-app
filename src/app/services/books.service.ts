import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';
import { Firebase } from '../shared/firebase';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}
  getBooks(): Observable<Book> {
    return this.http.get<Book>(`${Firebase.url}${Firebase.bookUrl}`);
  }
}
