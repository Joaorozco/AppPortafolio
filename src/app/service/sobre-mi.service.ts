import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SobreMiService {
  private apiURl = 'http://localhost:8080/usuario';
  private apiskillsUrl = 'http://localhost:5000/skills'

  constructor(
    private http: HttpClient
  ) { }

  obtenerDatosSobreMi(): Observable<any>{
    return this.http.get(this.apiURl);
  }

  obtenerDatosSkills(): Observable<any>{
    return this.http.get(this.apiskillsUrl)
  }
}
