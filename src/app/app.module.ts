import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { PortafoliosComponent } from './components/portafolios/portafolios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { ButtonRedesSocialesComponent } from './components/button-redes-sociales/button-redes-sociales.component';
import { BtnEditPerfilComponent } from './components/btn-edit-perfil/btn-edit-perfil.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { Error404Component } from './components/error404/error404.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service.ts';
import { NewExperienciaComponent } from './components/portafolios/new-experiencia.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SobreMiComponent,
    PortafoliosComponent,
    ContactoComponent,
    EstudiosComponent,
    ButtonRedesSocialesComponent,
    BtnEditPerfilComponent,
    RegistrarComponent,
    Error404Component,
    LoginComponent,
    NewExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
