import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: Array<Object> = [];
  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService.getImages().subscribe((images) => {
      let copyImages = Object.values(images);
      copyImages.shift();
      this.images = [...copyImages];
    });
  }
}
