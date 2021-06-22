import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StorageService } from '../../shared/storage.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  quotes: Array<String> = [];
  pathSegment: Array<String> = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.getQoteFromServer().subscribe((response) => {
      Object.values(response.valueOf()).map((arr) => this.quotes.push(arr[1]));
      Object.keys(response.valueOf()).map((arr) => this.pathSegment.push(arr));
    });
  }

  saveQuote(form: NgForm) {
    let quoteInput = form.value.input;
    form.resetForm();

    // Add quote
    let quotesCopy = [...this.quotes, quoteInput];
    this.quotes = quotesCopy;

    this.storageService.saveQuoteOnServer(quoteInput).subscribe((quote) => {
      let pathSegmentCopy = [...this.pathSegment, Object.values(quote)[0]];
      this.pathSegment = pathSegmentCopy;
    });
  }

  deleteQuote(quoteIndex: number) {
    // Path
    let path = this.pathSegment[quoteIndex];
    // Delete quote
    let quotesCopy = [...this.quotes];
    quotesCopy.splice(quoteIndex, 1);
    this.quotes = quotesCopy;

    // Delete pathSegment
    let pathSegmentCopy = [...this.pathSegment];
    pathSegmentCopy.splice(quoteIndex, 1);
    this.pathSegment = pathSegmentCopy;

    // Delete quote
    this.storageService.deleteQoteFromServer(path);
  }
}
