import { Component,HostBinding, OnInit } from '@angular/core';
import { Proyects } from 'src/app/models/proyects';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-proyectos-form',
  templateUrl: './proyectos-form.component.html',
  styleUrls: ['./proyectos-form.component.css']
})
export class ProyectosFormComponent implements OnInit{
 
  @HostBinding('class') classes = 'row';
  saveButton:string = "Save"
  updateFlag= 0;
  update: any = [];
  proyect: Proyects = {
   name:'Proyect Name',
   description:'Proyect Description',
   link:'GitHub Link',
  };
  
  edit: boolean = false;
  constructor(private gamesService: ProyectoService, private route:Router){}
 
  saveNewGame(){
   this.gamesService.saveGame(this.proyect)
   .subscribe(
     res => {
 
       console.log(res);
       this.route.navigate(['']);
     },
     err => console.error(err)
   )
 
 }
 ngOnInit(): void {
  if(sessionStorage.getItem("proyEdit")!== null){
    this.updateFlag = 1;
    this.saveButton = 'Update'
    this.gamesService.getGame(sessionStorage.getItem("eduEdit")|| '').subscribe(
      res => {
        this.update[0] = res;
        console.log(res);
        console.log(this.update[0].name);
        this.proyect.name =  this.update[0].name;
        this.proyect.description =  this.update[0].description;
        this.proyect.link =  this.update[0].link;
        this.proyect;
      },
      err => console.error(err)
    )
  
  }
 }
 
 }