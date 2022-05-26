import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ButtonEditService {
  constructor(
    private http: HttpClient
  ) { }

  public put(url:string, body:any){
    return this.http.put(url, body)
  }
}
