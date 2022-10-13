import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-btn-add-skill',
  templateUrl: './btn-add-skill.component.html',
  styleUrls: ['./btn-add-skill.component.css']
})
export class BtnAddSkillComponent implements OnInit {
  toolEditor = false;
  name: string;
  porcentaje: number;

  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  openEditor(): void {
    this.toolEditor = !this.toolEditor;
  }

  closeEditor(): void {
    this.toolEditor = false
  }

  onCreate() {
    const skill = new Skill(this.name, this.porcentaje);
    this.skillService.save(skill).subscribe(
      (data) => {
        location.reload();
      }, (err) => {
        alert("Fallo al añadir la skill");
      })
  }
}
