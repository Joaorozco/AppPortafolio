import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  educacion: Educacion[] = [];
  isLogged = false;

  constructor(private educacionService: EducacionService, private tokenService: TokenService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

  }

  cargarEducacion():void{
    this.educacionService.lista().subscribe(
      data=> {
        this.educacion = data
      }
    )
  }

  delete(id:number){
    if(id != undefined){
      this.educacionService.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("no se pudo eliminar");
        }
      )
    }
  }
}
