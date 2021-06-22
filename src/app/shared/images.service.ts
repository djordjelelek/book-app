import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}
  getImages() {
    return this.http.get(
      'https://book-store-rg-default-rtdb.europe-west1.firebasedatabase.app/pictures.json'
    );
  }
}
