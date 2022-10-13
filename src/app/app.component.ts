import { PrefixNot } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Persona } from './models/persona';
import { Pregunta } from './models/pregunta';
import { PreguntaService } from './services/pregunta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

persona: Persona = new Persona();
public preguntas: Array<Pregunta> = new Array<Pregunta>;
pregunta: Pregunta = new Pregunta();

valor: number = 0;

constructor(private preguntaService: PreguntaService){}

ngOnInit(): void {   
  this.preguntaService.darPreguntas().then(j => this.preguntas = j);
}

  siguiente(persona: Persona) {
    this.darPregunta();
    this.persona = persona;
    this.valor = this.valor + 1;
    if (this.valor == 3) {
      this.valor = 0;
    }
   
  }
  atras() {
    this.valor = this.valor - 1;
    if (this.valor == -1) {
      this.valor = 0;
    }
  }
  
  darPregunta(){
    let index = this.preguntas.findIndex(e => e.solucionada == false)
    if (index != -1) {
      this.pregunta = this.preguntas[index];      
    } else{
      this.valor = 2;
    }
  }

  valorarPregunta(valor: number){
    this.pregunta.solucionada = true;
    this.pregunta.respuesta = valor;
    this.darPregunta();
  }



}
