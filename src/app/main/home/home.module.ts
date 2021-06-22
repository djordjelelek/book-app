import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, GalleriaModule],
  exports: [HomeComponent],
})
export class HomeModule {}
