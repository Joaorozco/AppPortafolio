import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-btn-add-edu',
  templateUrl: './btn-add-edu.component.html',
  styleUrls: ['./btn-add-edu.component.css']
})
export class BtnAddEduComponent implements OnInit {
  toolEditor = false;
  nombreE: string;
  tituloE: string;
  descripcionE: string;
  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  openEditor(): void {
    this.toolEditor = !this.toolEditor;
  }

  closeEditor(): void {
    this.toolEditor = false
  }

  onCreate():void{
    const educacion = new Educacion(this.nombreE, this.tituloE, this.descripcionE);
    this.educacionService.save(educacion).subscribe(
      data => {
        location.reload();
      }, err => {
        alert("Error al añadir");
        this.router.navigate(['']);
      }
    )
  }

}
