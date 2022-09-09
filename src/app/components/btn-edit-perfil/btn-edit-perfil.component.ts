import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FileHandle } from 'src/app/model/file-handle.model';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-btn-edit-perfil',
  templateUrl: './btn-edit-perfil.component.html',
  styleUrls: ['./btn-edit-perfil.component.css']
})
export class BtnEditPerfilComponent implements OnInit {
  toolEditor = false;
  datails: Persona = null;

  constructor(private router: Router, private data: PersonaService, private sanitizer: DomSanitizer, private persona: Persona) { }

  ngOnInit(): void {
    this.data.getDetails().subscribe(data => {
      this.datails = data;
    })
  }

  openEditor(): void {
    this.toolEditor = !this.toolEditor;
  }

  closeEditor(): void {
    this.toolEditor = false
  }

  onUpdate(): void {
    this.data.update(this.datails).subscribe(data => {
      this.router.navigate(['home']);
    }, err => {
      alert('Error al modificar experiencia');
      this.router.navigate(['']);
    })
  }

  capturandoFile(event: any) {
    if(event.target.files){
      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustHtml(
          window.URL.createObjectURL(file)
        )
      }
      this.persona.imagePerfil.push(fileHandle);
    }
  }
}
