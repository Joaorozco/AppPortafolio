import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = "http://localhost:5000/portfolio";

  constructor(
    private http: HttpClient
  ) { }

  obtenerDatosPortfolio(): Observable<any>{
    return this.http.get(this.apiUrl)

  }
}
