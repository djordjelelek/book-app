import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiographyComponent } from './biography/biography.component';
import { HomeComponent } from './home/home.component';
import { BookItemComponent } from './books/book-item/book-item.component';
import { BooksComponent } from './books/books.component';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { MainComponent } from './main.component';
import { QuotesModule } from './quotes/quotes.module';

@NgModule({
  declarations: [
    MainComponent,
    BiographyComponent,
    HomeComponent,
    BookItemComponent,
    BooksComponent,
  ],
  imports: [CommonModule, AppRoutingModule, QuotesModule],
  exports: [MainComponent],
})
export class MainModule {}
