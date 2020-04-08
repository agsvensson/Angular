import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  { path: '',
    component:HomeComponent   //assim que acessar a rota pai vai acessar o HomeComponent
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
exports: [ RouterModule ]
})
export class HomeRoutingModule { }