export class Educacion {
  id: number;
  nombreE: string;
  tituloE: string;
  descripcionE: string;

  constructor(nombreE: string, tituloE: string, descripcionE: string){
    this.nombreE = nombreE;
    this.tituloE = tituloE;
    this.descripcionE = descripcionE;
  }
}
