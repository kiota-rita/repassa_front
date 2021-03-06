import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

import { EquipeComponent } from './equipe/equipe.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DenyLoginComponent } from './deny-login/deny-login.component';
import { SobreComponent } from './sobre/sobre.component';

import { MissaoComponent } from './missao/missao.component';

import { VisaoComponent } from './visao/visao.component';
import { ValoresComponent } from './valores/valores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';

import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { AlertasComponent } from './alertas/alertas.component';


import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { OrderModule } from 'ngx-order-pipe';





@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    RodapeComponent,
    CadastroComponent,
    DenyLoginComponent,
    SobreComponent,
    EquipeComponent,
    InicioComponent,
    HomeComponent,

    MissaoComponent,
    VisaoComponent,
    ValoresComponent,
    InicioComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    AlertasComponent,
    UserEditComponent

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
