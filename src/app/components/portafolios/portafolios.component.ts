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
  expe: any;
  dataPortfolio: any
  isLogged = false

  constructor(
    private sExperiencia: SExperienciaService, private tokenService: TokenService
  ) { }


  ngOnInit(): void {
    this.getData();
    this.getDataLocalStorage();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getData(){
    this.sExperiencia.lista().subscribe(data => {
      this.dataPortfolio = localStorage.setItem("dataPortfolio", JSON.stringify(data));
    })
  }

  getDataLocalStorage(){
    this.expe = JSON.parse(localStorage.getItem("dataPortfolio"));
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
