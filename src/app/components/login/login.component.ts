import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  constructor(
    private restApi: LoginService,
    private cookieService: CookieService,
    private formBuilder: FormBuilder
  ) {
    this.form =  this.formBuilder.group(
      {
        username: new FormControl('',
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

  ngOnInit(): void {
  }


  get Username(){
    return this.form.get('username');
  }

  get Password(){
    return this.form.get('password')
  }


  public send():any{
    this.restApi.post('http://localhost:5000/login',
    this.form.value)
    .subscribe((res: any) => {
      console.log('Login exitoso');
      this.cookieService.set('token_access', res.accessToken, 4, '/');
    })
  }
}
