import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { QuotesComponent } from './quotes.component';

@NgModule({
  declarations: [QuotesComponent],
  imports: [CommonModule, ButtonModule],
  exports: [QuotesComponent],
})
export class QuotesModule {}
