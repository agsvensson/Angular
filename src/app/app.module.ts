import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // chama o HttpClientModule para poder usar os métodos http
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // configuração do site do PrimeNG (AngularAnimations)
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    // componentes home e usuário foram retirados daqui, pq eles não serão mais carregados por aqui. Serão chamados POR DEMANDA
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
