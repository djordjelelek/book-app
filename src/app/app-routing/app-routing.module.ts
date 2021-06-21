import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from '../main/biography/biography.component';
import { BooksComponent } from '../main/books/books.component';
import { HomeComponent } from '../main/home/home.component';
import { BookItemComponent } from '../main/books/book-item/book-item.component';
import { QuotesComponent } from '../main/quotes/quotes.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'biography', component: BiographyComponent },
  {
    path: 'books',
    component: BooksComponent,
    children: [{ path: ':id', component: BookItemComponent }],
  },
  { path: 'quotes', component: QuotesComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
