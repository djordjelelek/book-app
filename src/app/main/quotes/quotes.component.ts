import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../shared/storage.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  saveData() {
    this.storageService.saveExercise('Djole');
  }
}
