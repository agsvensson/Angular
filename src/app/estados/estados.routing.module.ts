// ESTE ARQUIVO FOI CRIADO PQ PRECISA CRIAR AS ROTAS DO usuario ESPECÍFICO

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { EstadosComponent } from './estados.component';


const routes: Routes = [
  { path: '',
    component:EstadosComponent  //assim que acessar a rota pai vai acessar o EstadosComponent
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
exports: [ RouterModule ]
})
export class EstadosRoutingModule { }