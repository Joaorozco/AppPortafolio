import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';

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
    private datos: UsuarioService
  ) { }

  ngOnInit(): void {
    this.datos.obtenerDato().subscribe(data => {
      console.log(data);
      this.sobreMi = data;
    })

    this.datos.obtenerDato().subscribe(data => {
      console.log(data);
      this.skills = data;
    })
  }
}
