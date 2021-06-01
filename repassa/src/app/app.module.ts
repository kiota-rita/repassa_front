import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

import { EquipeComponent } from './equipe/equipe.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DenyLoginComponent } from './deny-login/deny-login.component';
import { SobreComponent } from './sobre/sobre.component';


@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    RodapeComponent,
    CadastroComponent,
    DenyLoginComponent,
    SobreComponent,
    EquipeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
