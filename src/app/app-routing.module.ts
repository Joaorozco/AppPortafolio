import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { PortafoliosComponent } from './components/portafolios/portafolios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { BtnEditPerfilComponent } from './components/btn-edit-perfil/btn-edit-perfil.component';
/* import { VigilanteGuard } from './guards/vigilante.guard'; */
import { RegistrarComponent } from './components/registrar/registrar.component';
import { Error404Component } from './components/error404/error404.component';
import { NewExperienciaComponent } from './components/portafolios/new-experiencia.component';
import { EditExperienciaComponent } from './components/portafolios/edit-experiencia.component';
import { NeweducacionComponent } from './components/estudios/neweducacion.component';

const routes: Routes = [

  { path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:"home",
    component: HomeComponent,
  },

  {
    path:"sobre-mi",
    component: SobreMiComponent
  },
  {
    path: "sobre-mi/edit",
    component: BtnEditPerfilComponent,
  },
  {
    path:"educacion",
    component: EstudiosComponent,
  },
  {
    path:"portafolios",
    component: PortafoliosComponent,
  },
  {
    path:"contacto",
    component: ContactoComponent,
  },
  {
    path:"registrar",
    component: RegistrarComponent,
  },
  {
    path:"login",
    component: LoginComponent,
  },
  {
    path: "error",
    component: Error404Component
  }
  ,
  {
    path: "newExperience",
    component: NewExperienciaComponent
  }
  ,
  {
    path: "editExperience/:id",
    component: EditExperienciaComponent
  }
  ,
  {
    path: "newEdu",
    component: NeweducacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
