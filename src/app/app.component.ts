import { Component } from '@angular/core';
import { Persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD

persona: Persona = new Persona();

=======
  persona : Persona = new Persona();
>>>>>>> c466d6c669f99d9821e592081f1ceee432c1e979
  valor: number = 0;
  siguiente(persona: Persona) {
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



}
