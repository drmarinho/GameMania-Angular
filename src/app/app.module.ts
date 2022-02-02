import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { DepartamentosComponent } from './views/departamentos/departamentos.component';
import { BanerComponent } from './views/baner/baner.component';
import { GamelistaComponent } from './views/gamelista/gamelista.component';
import { ProdutoComponent } from './views/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    DepartamentosComponent,
    BanerComponent,
    GamelistaComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
