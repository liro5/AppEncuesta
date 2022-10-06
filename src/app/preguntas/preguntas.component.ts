import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

<<<<<<< HEAD
@Input() persona:Persona = new Persona();
=======
@Input() persona: Persona = new Persona();


>>>>>>> c466d6c669f99d9821e592081f1ceee432c1e979
  constructor() { }

  ngOnInit(): void {
  }

}
