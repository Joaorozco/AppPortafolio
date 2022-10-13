export class Persona {
  nombreCompleto: string;
  profesion: string;
  descripcion: string;
  imagen: string

  constructor(nombreCompleto:string, profesion:string, descripcion:string, imagen:string){
    this.nombreCompleto = nombreCompleto;
    this.profesion = profesion;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
}
