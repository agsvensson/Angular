import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, //componente home
  { path: 'usuario', component: UsuarioComponent }, //componente usuario
  { path: '', pathMatch:'full', redirectTo:'/home' } //caso não ache as rotas, é direcionado para componente home pelo path
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) //linka o módulo às rotas
  ],
exports: [ RouterModule ]
})
export class AppRoutingModule { }
