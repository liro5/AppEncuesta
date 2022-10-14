import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pregunta } from '../models/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
public preguntas: Array<Pregunta> = new Array<Pregunta>();
  constructor(private httpRest: HttpClient) {    }

  public darPreguntas():Promise<Pregunta[]> {
    return new Promise<Pregunta[]>((resolve,reject)=>{
       this.httpRest.get<Array<Pregunta>>("http://localhost:8081/darPreguntas")
       .subscribe(preguntas => {this.preguntas = preguntas;resolve(this.preguntas ); });
      
    })  
  };
}
