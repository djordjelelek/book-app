import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firebase } from '../shared/firebase';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  name: String = '';

  constructor(private http: HttpClient) {}

  saveQuoteOnServer(quote: String) {
    return this.http.post(`${Firebase.url}${Firebase.quotesUrl}`, {
      '1': quote,
    });
  }

  getQoteFromServer() {
    return this.http.get(`${Firebase.url}${Firebase.quotesUrl}`);
  }

  deleteQoteFromServer(quoteIndex: String) {
    let myLink = `${Firebase.url}/quotes/` + quoteIndex + '.json';

    this.http.delete(myLink).subscribe();
  }
}
