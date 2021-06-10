import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DenyLoginComponent } from './deny-login/deny-login.component';
import { logging } from 'selenium-webdriver'; 

import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';

import { SobreComponent } from './sobre/sobre.component';



const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},

 {path: 'login', component: DenyLoginComponent},
 {path: 'cadastro', component: CadastroComponent},

 {path: 'home', component: HomeComponent},
 {path: 'inicio', component: InicioComponent},
 {path: 'tema', component: TemaComponent},
 {path: 'tema-edit/:id', component: TemaEditComponent},
 {path: 'tema-delete/:id', component: TemaDeleteComponent},
 {path: 'postagem-edit/:id', component: PostagemEditComponent},
 {path: 'postagem-delete/:id', component: PostagemDeleteComponent},

 {path: 'sobre', component: SobreComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
