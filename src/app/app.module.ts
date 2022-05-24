import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { PortafoliosComponent } from './components/portafolios/portafolios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ButtonEditComponent } from './components/button-edit/button-edit.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonRedesSocialesComponent } from './components/button-redes-sociales/button-redes-sociales.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SobreMiComponent,
    PortafoliosComponent,
    ContactoComponent,
    ButtonEditComponent,
    EstudiosComponent,
    LoginComponent,
    ButtonRedesSocialesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
