import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valor: number = 0;
  siguiente() {
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
