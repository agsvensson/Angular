import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'


const routes: Routes = [
  {
     path: 'home',
     loadChildren:'./home/home.module#HomeModule' //toda vez que chamarem a rota home, vai carregar o módulo homemodule
  },
{ path: 'usuario',
    loadChildren:'./usuario/usuario.module#UsuarioModule'
},
{ path:'',
    pathMatch:'full',
    redirectTo:'./home'
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash:true}) //linka o módulo às rotas
  ],
exports: [ RouterModule ]
})
export class AppRoutingModule { }