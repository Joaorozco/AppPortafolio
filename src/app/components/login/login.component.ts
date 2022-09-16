import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  @ViewChild('inputPassword') inputPassword: ElementRef;
  @ViewChild('eye') eye: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService,
    private renderer2: Renderer2
  ) {
    this.form = this.formBuilder.group(
      {
        nombreUsuario: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
      }
    )
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  //Getters
  get NombreUsuario() {
    return this.form.get('nombreUsuario');
  }

  get Password() {
    return this.form.get('password');
  }

  //Metodos
  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUsername(data.nombreUsuario)
      this.tokenService.setAuthorities(data.authorities)
      this.roles = data.authorities;
      this.router.navigate(['home']);
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
    })
  }

  displayPassword() {
    const input = this.inputPassword.nativeElement;
    let eye = this.eye.nativeElement;
    if (input.type == "password") {
      this.renderer2.setAttribute(input, "type", "text");
      this.renderer2.setAttribute(eye, "class", "fa fa-eye-slash")
    } else{
      this.renderer2.setAttribute(input, "type", "password");
      this.renderer2.setAttribute(eye, "class", "fa fa-eye")
    }
  }
}
