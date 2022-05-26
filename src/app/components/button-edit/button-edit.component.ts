import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';
import { ButtonEditService } from 'src/app/service/button-edit.service';


@Component({
  selector: 'app-button-edit',
  templateUrl: './button-edit.component.html',
  styleUrls: ['./button-edit.component.css']
})
export class ButtonEditComponent implements OnInit {

  constructor(
    private buttonEditService:ButtonEditService
  ) { }

  ngOnInit(): void {

  }

  profileForm = new FormGroup({
    file : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
  });

  public onSubmit():any{
    this.buttonEditService.put('http://localhost:5000/sobreMi',
    this.profileForm.value)
    .subscribe()

  };


}



