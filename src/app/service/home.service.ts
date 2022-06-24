import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient ) { }

  obtenerDato(): Observable<any>{
    console.log("corriendo")
    return this.http.get(this.apiUrl);
  }
}
