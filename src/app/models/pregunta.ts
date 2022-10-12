export class Pregunta {
    pregunta?:string;
    respuesta?:number; 
    solucionada?: boolean;
    constructor(pregunta?:string, respuesta?:number, solucionada?: boolean){
        this.pregunta = pregunta;
        this.respuesta = respuesta;
        this.solucionada = solucionada;
    }
}
