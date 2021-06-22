import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: any[] = [
    'https://www.nationalgeographic.rs//files/images/2019/03/mesec_snimljen_aps_671315071.jpg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
