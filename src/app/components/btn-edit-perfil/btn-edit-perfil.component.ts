import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-edit-perfil',
  templateUrl: './btn-edit-perfil.component.html',
  styleUrls: ['./btn-edit-perfil.component.css']
})
export class BtnEditPerfilComponent implements OnInit {
  toolEditor = false;

  constructor() { }

  ngOnInit(): void {
  }

  openEditor(): void {
    this.toolEditor = !this.toolEditor;
  }

  closeEditor(): void {
    this.toolEditor = false
  }

}
