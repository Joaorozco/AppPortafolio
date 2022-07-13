import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { PortafoliosComponent } from './components/portafolios/portafolios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { BtnEditPerfilComponent } from './components/btn-edit-perfil/btn-edit-perfil.component';
import { VigilanteGuard } from './guards/vigilante.guard';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [

  { path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path:"portfolio",
    component: PortfolioComponent,
    children : [
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
        canActivate: [VigilanteGuard]
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
    ]
  },
  {
    path:"registrar",
    component: RegistrarComponent,
  },
  {
    path:"login",
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
