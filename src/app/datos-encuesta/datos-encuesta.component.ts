import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-datos-encuesta',
  templateUrl: './datos-encuesta.component.html',
  styleUrls: ['./datos-encuesta.component.css']
})
export class DatosEncuestaComponent implements OnInit {
persona:Persona = new Persona();

@Output() iniciarEncuesta = new EventEmitter<Persona>()
  constructor() { }

  ngOnInit(): void {
  }
  iniciar(){
    this.IniciarEncuesta.emit(this.persona)
  }

iniciar(){
  this.iniciarEncuesta.emit(this.persona)
}
}
