import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, LogoComponent],
  imports: [CommonModule, AppRoutingModule, HttpClientModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
