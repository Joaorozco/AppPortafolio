import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { EditorService } from 'src/app/service/editor.service';

@Component({
  selector: 'app-btn-edit-perfil',
  templateUrl: './btn-edit-perfil.component.html',
  styleUrls: ['./btn-edit-perfil.component.css']
})
export class BtnEditPerfilComponent implements OnInit {
  toolEditor = false;

  constructor(
    private restApi: EditorService
  ) { }

  ngOnInit(): void {
  }

  openEditor(): void {
    this.toolEditor = !this.toolEditor;
  }

  closeEditor(): void {
    this.toolEditor = false
  }

  file = new FormGroup({
    imgPerfil : new FormControl()
  })

  public sendImg():void {
    this.restApi.postImg('http://localhost:5000/sobreMi',
    this.file.value)
    .subscribe(data => {
      console.log(data);

    });
  }

  capturandoFile(event:any) {
    console.log(event)
  }
}
