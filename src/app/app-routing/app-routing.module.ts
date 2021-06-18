import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from '../main/authors/authors.component';
import { BooksComponent } from '../main/books/books.component';
import { HomeComponent } from '../main/home/home.component';
import { BookItemComponent } from '../main/books/book-item/book-item.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'authors', component: AuthorsComponent },
  {
    path: 'books',
    component: BooksComponent,
    children: [{ path: ':id', component: BookItemComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
