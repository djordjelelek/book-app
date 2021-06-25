import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes.component';

import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { QuotesPipe } from '../../../pipes/quotes.pipe';

@NgModule({
  declarations: [QuotesComponent, QuotesPipe],
  imports: [
    CommonModule,
    ButtonModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    InputTextModule,
    FormsModule,
  ],
  exports: [QuotesComponent],
})
export class QuotesModule {}
