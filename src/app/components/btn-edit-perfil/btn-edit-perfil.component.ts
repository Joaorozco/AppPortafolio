import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-btn-edit-perfil',
  templateUrl: './btn-edit-perfil.component.html',
  styleUrls: ['./btn-edit-perfil.component.css']
})
export class BtnEditPerfilComponent implements OnInit {
  toolEditor = false;

  constructor(
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
    imgPerfil : new FormControl(),
    description: new FormControl()
  })

  public sendImg():void {
    /* this.restApi.postImg('http://localhost:5000/sobreMi',
    this.file.value)
    .subscribe((data:any )=> {
      console.log(data);
    }); */
  }

  capturandoFile(event:any) {
    console.log(event);

  }
}
