import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationFormComponent } from './components/educacion-hub/educacion-form/educacion-form.component'
import { ProyectosFormComponent } from './components/proyectos-hub/proyectos-form/proyectos-form.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
{
  path: 'educacion/add',
  component: EducationFormComponent
},
{
  path: 'proyectos/add',
  component: ProyectosFormComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
