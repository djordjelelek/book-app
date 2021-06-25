import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiographyComponent } from './biography/biography.component';

import { AppRoutingModule } from '../../routes/app-routing.module';
import { MainComponent } from './main.component';
import { QuotesModule } from './quotes/quotes.module';
import { BooksModule } from './books/books.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [MainComponent, BiographyComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    QuotesModule,
    BooksModule,
    HomeModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
