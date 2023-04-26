import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EducationFormComponent } from './components/educacion-hub/educacion-form/educacion-form.component';
import { EducationListComponent } from './components/educacion-hub/education-list/education-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { EduService} from './services/educacion.service'
import { ProyectoService } from './services/proyecto.service';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BioComponent } from './components/static/bio/bio.component';
import { ContactoComponent } from './components/static/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos-hub/proyectos/proyectos.component';
import { ProyectosFormComponent } from './components/proyectos-hub/proyectos-form/proyectos-form.component';
import { HomeComponent } from './components/home/home.component';
import { ConocimientosComponent } from './components/static/conocimientos/conocimientos.component';
import { FooterComponent } from './components/static/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';


@NgModule({
  declarations: [
    AppComponent,
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
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatExpansionModule,
    MatGridListModule,
    MatSliderModule,
    MatProgressBarModule, 
    MatTooltipModule,
    MatChipsModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatTableModule,
    CdkTableModule,
    CdkTreeModule,
    ReactiveFormsModule
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
