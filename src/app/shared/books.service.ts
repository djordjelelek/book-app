import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}
  getBooks() {
    return this.http.get(
      'https://book-store-rg-default-rtdb.europe-west1.firebasedatabase.app/books.json'
    );
  }
}
