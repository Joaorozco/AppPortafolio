import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EditorService } from 'src/app/service/editor.service';

@Component({
  selector: 'app-btn-edit-skill',
  templateUrl: './btn-edit-skill.component.html',
  styleUrls: ['./btn-edit-skill.component.css']
})
export class BtnEditSkillComponent implements OnInit {
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
    imgPerfil : new FormControl(),
    description: new FormControl()
  })

  public sendImg():void {
    this.restApi.postImg('http://localhost:5000/skills',
    this.file.value)
    .subscribe(data => {
      console.log(data);
    });
  }

  capturandoFile(event:any) {
    console.log(event)
  }


}
