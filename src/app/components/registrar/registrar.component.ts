import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private formBuilder: FormBuilder
  ) {
    this.form =  this.formBuilder.group(
      {
        username: new FormControl('',
          [
            Validators.required
          ]
        ),
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

  get Username(){
    return this.form.get('username');
  }

  get Useremail(){
    return this.form.get('useremail');
  }

  get Password(){
    return this.form.get('password')
  }


  public sendDataRegister(){
    let requestBody = this.form.value;
    // let requestBodyJson = JSON.stringify(requestBody);
    this.restApi.post('http://localhost:8080/api/register', requestBody)
                .subscribe((res: any) => {
                  console.log('registro exitoso');
                }) 
    return window.onload;            
  }
}
