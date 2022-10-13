import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';

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
import { EditExperienciaComponent } from './components/portafolios/edit-experiencia.component';
import { BtnEditHomeComponent } from './components/btn-edit-home/btn-edit-home.component';
import { BtnAddEduComponent } from './components/btn-add-edu/btn-add-edu.component';
import { BtnAddSkillComponent } from './components/btn-add-skill/btn-add-skill.component';
import { EditEducationComponent } from './components/estudios/edit-education.component';
import { EditSkillComponent } from './components/sobre-mi/edit-skill.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';


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
    NewExperienciaComponent,
    EditExperienciaComponent,
    BtnEditHomeComponent,
    BtnAddEduComponent,
    BtnAddSkillComponent,
    EditEducationComponent,
    EditSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    MatProgressBarModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
