import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firebase } from '../shared/firebase';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}
  getImages() {
    return this.http.get(`${Firebase.url}${Firebase.picturesUrl}`);
  }
}
