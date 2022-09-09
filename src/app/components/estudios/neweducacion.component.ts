import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string;
  tituloE: string;
  descripcionE: string;
  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const educacion = new Educacion(this.nombreE, this.tituloE, this.descripcionE);
    this.educacionService.save(educacion).subscribe(
      data => {
        alert("Añadido correctamente");
        this.router.navigate(['/educacion']);
      }, err => {
        alert("Error al añadir");
        this.router.navigate(['']);
      }
    )
  }
}
