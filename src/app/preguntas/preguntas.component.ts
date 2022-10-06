import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

@Input() persona: Persona = new Persona();


  constructor() { }

  ngOnInit(): void {
  }

}
