import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticacionServicio: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.autenticacionServicio.UsuarioAutenticado;
    if(currentUser && currentUser.accessToken){
      req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.accessToken}`
        }
      })
    }
    console.log('interceptor esta corriendo' + JSON.stringify(currentUser));
    return next.handle(req);
  }
}
