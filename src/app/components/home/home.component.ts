import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  miHome:any;
  dataHome:any;
  isLogged: boolean = false;

  constructor(private data: PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.data.getPersona().subscribe(data => {
      this.dataHome = localStorage.setItem("data", JSON.stringify(data));
    });
    this.getDataLocalStorage();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  getDataLocalStorage(){
    this.miHome = JSON.parse(localStorage.getItem("data"));
  }
}
