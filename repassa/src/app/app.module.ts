import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

import { EquipeComponent } from './equipe/equipe.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DenyLoginComponent } from './deny-login/deny-login.component';
import { SobreComponent } from './sobre/sobre.component';

import { MissaoComponent } from './missao/missao.component';
import { InicioComponent } from './inicio/inicio.component';




@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    RodapeComponent,
    CadastroComponent,
    DenyLoginComponent,
    SobreComponent,
    EquipeComponent,
    MissaoComponent
    InicioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
