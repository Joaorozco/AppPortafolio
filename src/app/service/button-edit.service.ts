import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSobreMi } from '../DataSobreMi';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ButtonEditService {
  private apiUrl = 'http://localhost:5000';

  constructor(
    private http: HttpClient
  ) { }

  getData(dataSobreMi: DataSobreMi): Observable<DataSobreMi>{
    const url = `${this.apiUrl}/${dataSobreMi.file}`;
    console.log('Corriendo')
    return this.http.put<DataSobreMi>(url, dataSobreMi, httpOptions);
  };
}
