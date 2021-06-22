import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookItemComponent } from './book-item/book-item.component';
import { TheBridgeOnTheDrinaComponent } from './book-item/the-bridge-on-the-drina/the-bridge-on-the-drina.component';
import { OmerPasaLatasComponent } from './book-item/omer-pasa-latas/omer-pasa-latas.component';
import { BosnianChronicleComponent } from './book-item/bosnian-chronicle/bosnian-chronicle.component';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BooksComponent,
    BookItemComponent,
    TheBridgeOnTheDrinaComponent,
    OmerPasaLatasComponent,
    BosnianChronicleComponent,
  ],
  imports: [CommonModule, AppRoutingModule, HttpClientModule],
  exports: [BooksComponent],
})
export class BooksModule {}
