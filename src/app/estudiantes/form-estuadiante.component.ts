import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from './estudiante';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-form-estuadiante',
  templateUrl: './form-estuadiante.component.html',
  styleUrls: ['./form-estuadiante.component.css']
})
export class FormEstuadianteComponent implements OnInit {
  estudiante:Estudiante = new Estudiante();
  titulo:string="Registro de Estudiante";
 

  constructor(private estudianteService:EstudianteService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.estudianteService.get(id).subscribe(
            es=>this.estudiante=es
          );
        }

      }

    );
  }

  create():void{
    console.log(this.estudiante);
    this.estudianteService.create(this.estudiante).subscribe(
      res=>this.router.navigate(['/estudiantes'])
    );
  }

  update():void{
    this.estudianteService.update(this.estudiante).subscribe(
      res=>this.router.navigate(['/estudiantes'])

    );
  }
  

}
