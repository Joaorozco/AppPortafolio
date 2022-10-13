import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  education : Educacion = null;
  constructor(private activatedRouter: ActivatedRoute, private educationService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }


  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationService.update(id, this.education).subscribe(data => {
      this.router.navigate(['portafolios']);
    }, err =>{
      alert('Error al modificar experiencia');
      this.router.navigate(['']);
    })
  }

}
