import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';


const routes: Routes = [
  {
    path: 'index',
    component: LoginComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'index'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
