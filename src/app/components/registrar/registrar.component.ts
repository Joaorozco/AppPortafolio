import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/service/auth.service';


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
    private api: AuthService,
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
    return this.form.get('nombreUsuario');
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password')
  }


  public sendDataRegister(){
    let requestBody = this.form.value;
    this.api.nuevo(requestBody)
                .subscribe(() => {
                  return this.router.navigate(['/login'])
                })
  }
}
