import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { MenuComponent } from './header/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BiographyComponent } from './main/biography/biography.component';
import { BooksComponent } from './main/books/books.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './main/home/home.component';
import { BookItemComponent } from './main/books/book-item/book-item.component';
import { QuotesComponent } from './main/quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,
    BiographyComponent,
    BooksComponent,
    HomeComponent,
    BookItemComponent,
    QuotesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
