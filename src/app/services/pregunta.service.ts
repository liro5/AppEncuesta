import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
public preguntas: Array<Pregunta>;
  constructor() { 
    this.preguntas=[
      new Pregunta("1.¿ El vendedor que te atendió, esta bien informado sobre el producto?", 0, false),
      new Pregunta("2.¿ El vendedor que te atendió, esta bien informado sobre el producto?", 0, false),
      new Pregunta("3.¿ El vendedor que te atendió, esta bien informado sobre el producto?", 0, false),
      new Pregunta("4.¿ El vendedor que te atendió, esta bien informado sobre el producto?", 0, false)
    ]
  }
  public darPreguntas():Promise<Pregunta[]> {

    return new Promise<Pregunta[]>((resolve,reject)=>{

       resolve(this.preguntas);    

    })  

  };
}
