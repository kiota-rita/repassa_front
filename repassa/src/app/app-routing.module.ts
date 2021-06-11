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
import { UserEditComponent } from './edit/user-edit/user-edit.component';



const routes: Routes = [
  {path: '', redirectTo: 'logar', pathMatch: 'full'},

 {path: 'logar', component: DenyLoginComponent},
 {path: 'cadastrar', component: CadastroComponent},

 {path: 'home', component: HomeComponent},
 {path: 'inicio', component: InicioComponent},
 {path: 'tema', component: TemaComponent},
 {path: 'tema-edit/:id', component: TemaEditComponent},
 {path: 'tema-delete/:id', component: TemaDeleteComponent},
 {path: 'postagem-edit/:id', component: PostagemEditComponent},
 {path: 'postagem-delete/:id', component: PostagemDeleteComponent},
 {path: 'user-edit/:id', component: UserEditComponent},
 {path: 'sobre', component: SobreComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
