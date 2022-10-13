import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { Pregunta } from '../models/pregunta';

@Component({
  selector: 'app-estadistica-grafica',
  templateUrl: './estadistica-grafica.component.html',
  styleUrls: ['./estadistica-grafica.component.css']
})
export class EstadisticaGraficaComponent implements OnInit {
  @Input() persona: Persona = new Persona();
  @Input() preguntas: Array<Pregunta> = new Array<Pregunta>;
  constructor() { }

  ngOnInit(): void {
  }

}
