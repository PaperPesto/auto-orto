export class Orto {
    pianta: string;
    attivo: boolean;
    threshold: number;
    umidita: number;
    imageUrl: string;

    constructor(pianta: string, attivo: boolean, threshold: number, umidita: number, imageUrl: string){
        this.pianta = pianta;
        this.attivo = attivo;
        this.threshold = threshold;
        this.umidita = umidita;
        this.imageUrl = imageUrl;
    }
}