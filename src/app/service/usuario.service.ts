import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/persona/traer';

  constructor(private http: HttpClient) { }

  obtenerDato(): Observable<any>{
    return this.http.get(this.apiUrl, {responseType: 'text'})
  }

  public post(url:string, body:any){
    return this.http.post(url, body);
  }
}
