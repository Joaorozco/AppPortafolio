import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './components/home/home.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { PortafoliosComponent } from './components/portafolios/portafolios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonEditComponent } from './components/button-edit/button-edit.component';
import { VigilanteGuard } from './guards/vigilante.guard';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path:"home",
    component: HomeComponent,
    data: { animation: 'HomePage' }
  },
  {
    path:"sobre-mi",
    component: SobreMiComponent,
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
    path:"login",
    component: LoginComponent,
  },
  {
    path:"edit",
    component: ButtonEditComponent,
    canActivate: [VigilanteGuard]
  }
];

@NgModule({
  imports: [BrowserAnimationsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
