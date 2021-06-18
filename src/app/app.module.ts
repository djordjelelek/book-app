import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { MenuComponent } from './header/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AuthorsComponent } from './main/authors/authors.component';
import { BooksComponent } from './main/books/books.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './main/home/home.component';
import { BookItemComponent } from './main/books/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,
    AuthorsComponent,
    BooksComponent,
    HomeComponent,
    BookItemComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
