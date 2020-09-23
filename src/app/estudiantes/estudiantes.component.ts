import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  titulo:string="Lista de Estudiantes";
  prueba:string='Esto es una prueba de mi componente estudiantes';

  estudiantes:Estudiante[];

  constructor(private estudianteService:EstudianteService) { }

  ngOnInit(): void {
    this.estudianteService.getAll().subscribe(
      e =>this.estudiantes=e
    );
  }

}
