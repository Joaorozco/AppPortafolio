import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }

  form: FormGroup;

  constructor(
    private loginService:LoginService,
    private formBuilder: FormBuilder,
    private ruta: Router
  ) {
    this.form =  this.formBuilder.group(
      {
        useremail: new FormControl('',
          [
            Validators.required,
            Validators.email
          ]
        ),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(8)
          ]
        ),
      }
    )
  }

  get Useremail(){
    return this.form.get('useremail');
  }

  get Password(){
    return this.form.get('password');
  }

  public send(event: Event){
    event.preventDefault;
    this.loginService.post(this.form.value).subscribe(data => {
      console.log('DATA: ' + JSON.stringify(data));
      this.ruta.navigate(['/portfolio/home'])
    })
  }

}
