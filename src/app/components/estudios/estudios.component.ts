import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  educacionSendLocalStorage: any;
  educacion:any;
  isLogged = false;

  constructor(private educacionService: EducacionService, private tokenService: TokenService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarEducacion();
    this.getDataLocalStorage();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarEducacion():void{
    this.educacionService.lista().subscribe(
      data=> {
        this.educacionSendLocalStorage = localStorage.setItem("dataEdu", JSON.stringify(data))
      }
    )
  }

  getDataLocalStorage(){
    this.educacion = JSON.parse(localStorage.getItem("dataEdu"))
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
