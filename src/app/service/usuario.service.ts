import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://backend-portfolio-service.onrender.com/api/usuario';
  // private apiUrl = 'http://localhost:8080/api/usuario';

  constructor(private http: HttpClient) { }

  obtenerDato(): Observable<any>{
    return this.http.get(this.apiUrl)
  }

  public post(url:string, body:any){
    return this.http.post(url, body);
  }
}
