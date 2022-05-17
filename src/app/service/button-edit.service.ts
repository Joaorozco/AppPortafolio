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
  private apiUrl = '../../../assets/data/data.json';

  constructor(
    private http: HttpClient
  ) { }

  getData(dataSobreMi: DataSobreMi): Observable<DataSobreMi>{
    const url = `${this.apiUrl}/${dataSobreMi.file}`;
    console.log(dataSobreMi.file)
    return this.http.put<DataSobreMi>(url, dataSobreMi, httpOptions);
  };
}
