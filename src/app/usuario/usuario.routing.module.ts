import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { UsuarioComponent } from './usuario.component';


const routes: Routes = [
  { path: '',
    component:UsuarioComponent  //assim que acessar a rota pai vai acessar o UsuarioComponent
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