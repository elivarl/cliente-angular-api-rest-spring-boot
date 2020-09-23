import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { FormEstuadianteComponent } from './estudiantes/form-estuadiante.component';
import { from } from 'rxjs';

const routes:Routes=[
  { path:'', redirectTo:'/estudiantes', pathMatch:'full'},
  { path:'estudiantes', component:EstudiantesComponent  },
  { path:'estudiantes/form', component:FormEstuadianteComponent },
  { path:'estudiantes/form/:id', component:FormEstuadianteComponent },

]


@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    FormEstuadianteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
