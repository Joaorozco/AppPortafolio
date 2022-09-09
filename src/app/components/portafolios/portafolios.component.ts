import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-portafolios',
  templateUrl: './portafolios.component.html',
  styleUrls: ['./portafolios.component.css']
})
export class PortafoliosComponent implements OnInit {
  expe: Experiencia[] = [];
  isLogged = false

  constructor(
    private sExperiencia: SExperienciaService, private tokenService: TokenService
  ) { }


  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }

  delete(id : number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(data => {
        this.ngOnInit();
      }, err => {
        alert('No se pudo eliminar')
      })
    }
  }
}
