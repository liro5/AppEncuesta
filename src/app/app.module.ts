import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosEncuestaComponent } from './datos-encuesta/datos-encuesta.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { EstadisticaGraficaComponent } from './estadistica-grafica/estadistica-grafica.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DatosEncuestaComponent,
    PreguntasComponent,
    EstadisticaGraficaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
