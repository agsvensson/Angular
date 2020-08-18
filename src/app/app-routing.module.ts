import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

// CARREGAR ROTAS
const routes: Routes = [
  {
     path: 'home',
     loadChildren: () => import('./home/home.module').then(m => m.HomeModule) //toda vez que chamarem a rota home, vai carregar o módulo homemodule
  },
{ path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)  //toda vez que chamarem a rota home, vai carregar o módulo usuariomodule
},
{ path: 'estados',
    loadChildren: () => import('./estados/estados.module').then(m => m.EstadosModule)  //toda vez que chamarem a rota home, vai carregar o módulo usuariomodule
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