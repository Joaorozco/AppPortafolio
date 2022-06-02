import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(
    private http: HttpClient
  ) { }

  public postImg(url:string, body:void){
    return this.http.put(url, body)
  }
}
