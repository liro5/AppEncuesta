import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-datos-encuesta',
  templateUrl: './datos-encuesta.component.html',
  styleUrls: ['./datos-encuesta.component.css']
})
export class DatosEncuestaComponent implements OnInit {
persona:Persona = new Persona();
  constructor() { }

  ngOnInit(): void {
  }

}
