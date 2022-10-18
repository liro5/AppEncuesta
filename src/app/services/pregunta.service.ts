import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pregunta } from '../models/pregunta';
import { Encuesta } from '../models/Encuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
public preguntas: Array<Pregunta> = new Array<Pregunta>();
public encuestaR: Encuesta = new Encuesta();
  constructor(private httpRest: HttpClient) {    }

  public darPreguntas():Promise<Pregunta[]> {
    return new Promise<Pregunta[]>((resolve,reject)=>{
       this.httpRest.get<Array<Pregunta>>("http://localhost:8081/darPreguntas")
       .subscribe(preguntas => {this.preguntas = preguntas;resolve(this.preguntas ); });
      
    })  
  };
  public AgregarEncuesta(encuesta: Encuesta):Promise<string> {
    return new Promise<string>((resolve,reject)=>{
       this.httpRest.post<Pregunta>("http://localhost:8081/agregarEncuesta",encuesta)
       .subscribe(e => {resolve("")});      
    })  
  };

  //
}
