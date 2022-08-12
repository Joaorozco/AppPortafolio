import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  miHome:any;

  constructor(private datosHome: UsuarioService) { }

  ngOnInit(): void {
    this.datosHome.obtenerDato().subscribe(data => {
      this.miHome = data;
    });
  }


}
