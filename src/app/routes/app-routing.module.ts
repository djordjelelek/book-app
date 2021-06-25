import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from '../components/main/biography/biography.component';
import { BooksComponent } from '../components/main/books/books.component';
import { HomeComponent } from '../components/main/home/home.component';
import { BookItemComponent } from '../components/main/books/book-item/book-item.component';
import { QuotesComponent } from '../components/main/quotes/quotes.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'biography', component: BiographyComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookItemComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: '**', component: HomeComponent }, // all others routes
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
