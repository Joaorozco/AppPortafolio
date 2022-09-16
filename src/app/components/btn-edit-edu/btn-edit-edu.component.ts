import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { EstudiosComponent } from '../estudios/estudios.component';

@Component({
  selector: 'app-btn-edit-edu',
  templateUrl: './btn-edit-edu.component.html',
  styleUrls: ['./btn-edit-edu.component.css']
})
export class BtnEditEduComponent implements OnInit {
  toolEditor = false;
  details: Educacion;
  constructor(private educacionService: EducacionService, private activatedRoute: ActivatedRoute, private educacion: EstudiosComponent) {}

  ngOnInit(): void {
  }

  openEditor(): void {
    this.toolEditor = !this.toolEditor;
  }

  closeEditor(): void {
    this.toolEditor = false
  }

  onDetails(){
    const id = this.activatedRoute.parent.snapshot.params['id'];
    console.log(id);

    this.educacionService.detail(id).subscribe(data => {
      this.details = data;
    })
  }

  onUpdate(){
    const id = this.activatedRoute.parent.snapshot.params['id'];
    this.educacionService.update(id, this.details).subscribe(data =>{
      location.reload();
    })
  }

}
