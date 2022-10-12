import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from '../models/persona';
import { Pregunta } from '../models/pregunta';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
@Input() persona: Persona = new Persona();

@Input() pregunta: Pregunta = new Pregunta();

@Output() valorarRespuesta = new EventEmitter<number>();

constructor() { }
  
  ngOnInit(): void {

  }

  valorar(valor: number){
    this.valorarRespuesta.emit(valor);   
  }

}
