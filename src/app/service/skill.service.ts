import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL = "https://backend-portfolio-service.onrender.com/api/skills/"
  // URL = "http://localhost:8080/api/skills/"

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.URL + "lista");
  }

  public detail(id: number):Observable<Skill>{
    console.log("Traer detalles...." + id)
    return this.httpClient.get<Skill>(this.URL + `detail/${id}`);
  }

  public save(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.URL + "create", skill);
  }

  public update(id: number, skill: Skill):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }
}
