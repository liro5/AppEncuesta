import { PrefixNot } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Encuesta } from './models/Encuesta';
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
public encuestaR: Encuesta = new Encuesta();
valor: number = 0;

constructor(private preguntaService: PreguntaService){}

ngOnInit(): void {   
  this.preguntaService.darPreguntas().then(j => this.preguntas = j );
  if (this.preguntas.length == 0) {
    console.error("Servidor no responde")
  }
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
    console.log(index);
    if (index != -1) {
      this.pregunta = this.preguntas[index];      
    } else{
      if (this.valor != 0)
      {
        this.valor = 2;             
        this.finalizarEncuesta();        
      }
    }
  }

  valorarPregunta(valor: number){
    this.pregunta.solucionada = true;
    this.pregunta.respuesta = valor;
    this.darPregunta();
  }

  finalizarEncuesta(){
    this.encuestaR.Preguntas = this.preguntas;
    this.encuestaR.persona = this.persona.nombre + " " + this.persona.apellido; 
     this.preguntaService.AgregarEncuesta(this.encuestaR).then(e=>e);
  }


}
