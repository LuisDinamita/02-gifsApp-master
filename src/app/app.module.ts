import { NgModule } from '@angular/core';// Importamos el decorador NgModule
import { BrowserModule } from '@angular/platform-browser';// Importamos el módulo de navegación
import { HttpClientModule } from '@angular/common/http'; // Para poder usar el servicio de http

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  //todos los modulos que se usan en el app.module, todos los modules van en import
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
