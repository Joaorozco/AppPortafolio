import { Component, Input, OnInit } from '@angular/core';
import { SobreMiService } from 'src/app/service/sobre-mi.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  @Input() buttonDowload:String = "Descargar CV";
  sobreMi:any;
  skills:any;

  constructor(
    private datos: SobreMiService
  ) { }

  ngOnInit(): void {
    this.datos.obtenerDatosSobreMi().subscribe(data => {
      console.log(data);
      this.sobreMi = data[0];
    })

    this.datos.obtenerDatosSkills().subscribe(data => {
      console.log(data[0]);
      this.skills = data[0];

    })
  }

}
