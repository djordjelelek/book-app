import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  name: String = '';

  constructor(private http: HttpClient) {}

  saveQuoteOnServer(quote: String) {
    return this.http.post(
      'https://book-store-rg-default-rtdb.europe-west1.firebasedatabase.app/quotes.json',
      { '1': quote }
    );
  }

  getQoteFromServer() {
    return this.http.get(
      'https://book-store-rg-default-rtdb.europe-west1.firebasedatabase.app/quotes.json'
    );
  }

  deleteQoteFromServer(quoteIndex: String) {
    let myLink =
      'https://book-store-rg-default-rtdb.europe-west1.firebasedatabase.app/quotes/' +
      quoteIndex +
      '.json';

    this.http.delete(myLink).subscribe();
  }
}
