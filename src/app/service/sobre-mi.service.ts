import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SobreMiService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerDatosSobreMi(): Observable<any>{
    console.log("Servicio sobre mi funcionando")
    return this.http.get('./assets/data/data.json')
  }
}
