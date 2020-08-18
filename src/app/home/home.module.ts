import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [HomeComponent], // módulo responsável por carregar o component home
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }