import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { PortafoliosComponent } from './components/portafolios/portafolios.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {path: '',
  redirectTo: '/home',
  pathMatch: 'full',
  },
  {path:"home",
  component: HomeComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
