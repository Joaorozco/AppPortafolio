import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'http://localhost:5000/home';

  constructor(private http: HttpClient ) { }

  obtenerDato(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
