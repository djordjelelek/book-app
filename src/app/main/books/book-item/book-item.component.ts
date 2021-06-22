import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  url: String = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((el) => (this.url = el[1].path));
  }
}
