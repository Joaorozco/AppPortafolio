import { Component, OnInit } from '@angular/core';
import { dataRedes } from './redes-data';

@Component({
  selector: 'app-button-redes-sociales',
  templateUrl: './button-redes-sociales.component.html',
  styleUrls: ['./button-redes-sociales.component.css']
})
export class ButtonRedesSocialesComponent implements OnInit {
  dataRedes = dataRedes;

  constructor() { }

  ngOnInit(): void {
  }

}
