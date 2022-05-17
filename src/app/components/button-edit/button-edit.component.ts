import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';
import { DataSobreMi } from 'src/app/DataSobreMi';
import { ButtonEditService } from 'src/app/service/button-edit.service';


@Component({
  selector: 'app-button-edit',
  templateUrl: './button-edit.component.html',
  styleUrls: ['./button-edit.component.css']
})
export class ButtonEditComponent implements OnInit {
  @Output() sendDataSobreMi: EventEmitter<DataSobreMi> = new EventEmitter;

  constructor(
    private buttonEditService:ButtonEditService
  ) { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    file : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
    skill : new FormControl('', [Validators.required])
  });

  onSubmit() {
    console.log(this.profileForm.value);

    this.sendDataSobreMi.emit(this.profileForm.value);
  };


}
