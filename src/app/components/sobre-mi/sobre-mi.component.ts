import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  sobreMi:any;
  constructor(
    private datos: HomeService
  ) { }

  ngOnInit(): void {
    this.datos.obtenerDato().subscribe(data => {
      this.sobreMi = data;
    })
  }

}
