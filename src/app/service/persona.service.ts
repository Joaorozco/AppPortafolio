import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://backend-portfolio-service.onrender.com/';

  constructor(private http: HttpClient) { }

  public getPersona():Observable<Persona>{
    return this.http.get<Persona>(this.URL + 'datap')
  }

  public getDetails():Observable<Persona>{
    return this.http.get<Persona>(this.URL + 'detailp/1');
  }

  public update(persona: Persona):Observable<any>{
    return this.http.put<any>(this.URL + 'update/1', persona);
  }

}
