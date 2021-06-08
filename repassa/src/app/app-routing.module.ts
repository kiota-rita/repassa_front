import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DenyLoginComponent } from './deny-login/deny-login.component';
import { logging } from 'selenium-webdriver'; 
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},

 {path: 'login', component: DenyLoginComponent},
 {path: 'cadastro', component: CadastroComponent},
 {path: 'inicio', component: InicioComponent},

 {path: 'home', component: HomeComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
