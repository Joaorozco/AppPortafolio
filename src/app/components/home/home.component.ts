import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  miHome:any;
  constructor(private datosHome: HomeService) { }

  ngOnInit(): void {
    this.datosHome.obtenerDato().subscribe(data => {
      console.log(data);
      this.miHome = data
    });
  }
}
