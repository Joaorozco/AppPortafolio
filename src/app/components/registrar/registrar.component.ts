import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioService } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  ngOnInit(): void {
  }
  form: FormGroup
  constructor(
    private restApi: UsuarioService,
    private cookieService: CookieService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form =  this.formBuilder.group(
      {
        nombreUsuario: new FormControl('',
          [
            Validators.required
          ]
        ),
        email: new FormControl('',
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

  get NombreUsuario(){
    return this.form.get('username');
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password')
  }


  public sendDataRegister(){
    let requestBody = this.form.value;
    this.restApi.post('http://localhost:8080/auth/nuevo', requestBody)
                .subscribe(() => {
                  return this.router.navigate(['/login'])
                })
  }
}
