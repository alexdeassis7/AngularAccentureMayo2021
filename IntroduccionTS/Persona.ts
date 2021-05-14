export class Persona {

    //atributos 
    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;

    constructor(km: number) {
        this.kilometros = km;
    }

    caminar() {
        console.log('estoy caminando ' + this.kilometros + ' por semana');
    }
}