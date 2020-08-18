// ESTE ARQUIVO FOI CRIADO PQ PRECISA CRIAR AS ROTAS DO usuario ESPECÍFICO

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';


const routes: Routes = [
  { path: '',
    component:UsuarioComponent  //assim que acessar a rota pai vai acessar o UsuarioComponent
  },
  
  { path: 'add',
    component:UsuarioCadastroComponent  //assim que acessar a rota pai vai acessar o UsuarioCadastroComponent
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
exports: [ RouterModule ]
})
export class UsuarioRoutingModule { }