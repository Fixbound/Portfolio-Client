import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EducationFormComponent } from './components/educacion-hub/educacion-form/educacion-form.component';
import { EducationListComponent } from './components/educacion-hub/education-list/education-list.component';

import { EduService} from './services/educacion.service'
import { ProyectoService } from './services/proyecto.service';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BioComponent } from './components/static/bio/bio.component';
import { ContactoComponent } from './components/static/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos-hub/proyectos/proyectos.component';
import { ProyectosFormComponent } from './components/proyectos-hub/proyectos-form/proyectos-form.component';
import { HomeComponent } from './components/home/home.component';
import { ConocimientosComponent } from './components/static/conocimientos/conocimientos.component';
import { FooterComponent } from './components/static/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EducationFormComponent,
    EducationListComponent,
    LoginComponent,
    BioComponent,
    ContactoComponent,
    ProyectosComponent,
    ProyectosFormComponent,
    HomeComponent,
    ConocimientosComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    EduService,
    LoginComponent,
    AuthService,
    ProyectoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
