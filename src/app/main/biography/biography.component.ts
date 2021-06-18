import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss'],
})
export class BiographyComponent implements OnInit {
  private urlImage: String = '';

  constructor(private httpClient: HttpClient) {}

  get url(): String {
    return this.urlImage;
  }

  ngOnInit(): void {
    this.httpClient
      .get(
        'https://book-store-rg-default-rtdb.europe-west1.firebasedatabase.app/biography.json'
      )
      .subscribe((response) => (this.urlImage = response.toString()));
  }
}
