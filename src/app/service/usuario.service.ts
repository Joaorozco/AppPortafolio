import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient ) { }

  obtenerDato(): Observable<any>{
    console.log("corriendo")
    return this.http.get(this.apiUrl);
  }

  public post(url:string, body:any){

    return this.http.post(url, body);
  }
}
