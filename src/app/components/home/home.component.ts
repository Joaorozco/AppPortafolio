import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  miHome:any;

  constructor(private data: PersonaService) { }

  ngOnInit(): void {
    this.data.getPersona().subscribe(data => {
      this.miHome = data;
    });
  }
}
