import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-btn-edit-perfil',
  templateUrl: './btn-edit-perfil.component.html',
  styleUrls: ['./btn-edit-perfil.component.css']
})
export class BtnEditPerfilComponent implements OnInit {
  toolEditor = false;
  details: Persona = null;
  selectedFile: File;
  constructor(private router: Router, private data: PersonaService, private httpClient: HttpClient, public imageService: ImageService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.data.getDetails().subscribe(data => {
      this.details = data;
    })
  }

  openEditor(): void {
    this.toolEditor = !this.toolEditor;
  }

  closeEditor(): void {
    this.toolEditor = false
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }

  onUpdate(): void {
    this.details.imagen = this.imageService.url;
    this.data.update(this.details).subscribe(data => {
      if (data.status == 200) {
        console.log("Actualizado");
      }
    })
  }


}
