import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { PortafoliosComponent } from './components/portafolios/portafolios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonRedesSocialesComponent } from './components/button-redes-sociales/button-redes-sociales.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BtnEditPerfilComponent } from './components/btn-edit-perfil/btn-edit-perfil.component';
import { BtnEditSkillComponent } from './components/btn-edit-skill/btn-edit-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SobreMiComponent,
    PortafoliosComponent,
    ContactoComponent,
    EstudiosComponent,
    LoginComponent,
    ButtonRedesSocialesComponent,
    BtnEditPerfilComponent,
    BtnEditSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
