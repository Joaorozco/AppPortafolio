import { Component, OnInit } from '@angular/core';
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

  constructor(private educacionService: EducacionService, private tokenService: TokenService) { }
  isLogged = false;

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
        console.log(data);

      }
    )
  }

  borrar(id:number){
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
