import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private http: HttpClient) {}

  saveExercise(sacuvatiString: String) {
    this.http
      .post(
        'https://book-store-rg-default-rtdb.europe-west1.firebasedatabase.app/quotes.json',
        { '1': sacuvatiString }
      )
      .subscribe((response) => console.log(response));
  }
}
