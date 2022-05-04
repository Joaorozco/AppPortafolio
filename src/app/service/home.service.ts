import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient ) { }

  obtenerDato(): Observable<any>{
    console.log("Es servicio esta corriendo");
    return this.http.get('./assets/data/data.json')
    }
  }
