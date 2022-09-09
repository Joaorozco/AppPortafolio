import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  @Input() buttonDowload: String = "Descargar CV";
  sobreMi: any;
  skills: any;
  isLogged: boolean = false;
  constructor(
    private data: PersonaService, private tokenService: TokenService, private activetedRouter: ActivatedRoute, private router: Router

  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.data.getPersona().subscribe(data => {
      this.sobreMi = data;
    })
  }
}
