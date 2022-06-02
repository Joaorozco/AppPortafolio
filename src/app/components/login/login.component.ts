import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private restApi: LoginService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

  formulario = new FormGroup({
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
  });

  public send():any{
    this.restApi.post('http://localhost:5000/login',
    this.formulario.value)
    .subscribe((res: any) => {
      console.log('Login exitoso');
      this.cookieService.set('token_access', res.accessToken, 4, '/');
    })
  }
}
