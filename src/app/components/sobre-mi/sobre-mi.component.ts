import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { HttpClient } from '@angular/common/http';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit{
  @Input() buttonDowload: String = "Descargar CV";
  sobreMi: any;
  aboutMe:any;

  skills: any;
  isLogged: boolean = false;
  skill: any;

  constructor(
    private data: PersonaService, private tokenService: TokenService, private router: Router, private httpClient: HttpClient, private skillService: SkillService) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.updownSkills();
    this.getDataLocalStorage();

    this.data.getPersona().subscribe(data => {
      this.aboutMe = localStorage.setItem("data", JSON.stringify(data));
    })
  }

  updownSkills(){
    this.skillService.list().subscribe((data) => {
      this.skills = localStorage.setItem("dataSkills", JSON.stringify(data));
    })
  }

  getDataLocalStorage(){
    this.sobreMi = JSON.parse(localStorage.getItem("data"));
    this.skill = JSON.parse(localStorage.getItem("dataSkills"));
  }

  delete(id: number) {
    if (id != undefined) {
      this.skillService.delete(id).subscribe(
        data => {
          this.updownSkills();
        }, err =>{
          alert("No se puedo borrar la skill")
        }
      )
    }
  }
}
