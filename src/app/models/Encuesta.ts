import { Pregunta } from "./pregunta";

export class Encuesta {
    persona?:string;
    Preguntas?:Pregunta[];    
    constructor(persona?:string, Preguntas?:Pregunta[]){
        this.persona=persona;
        this.Preguntas=Preguntas;      
    }
}