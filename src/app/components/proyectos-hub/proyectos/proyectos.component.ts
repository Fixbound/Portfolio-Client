import { Component,HostBinding, OnInit,NgZone } from '@angular/core';
import { EduService } from '../../../services/educacion.service'
import { AuthService } from 'src/app/services/auth.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  message:string='';
  @HostBinding('class') classes = 'row'
  proyect: any = []
  isLogged: boolean= false
  constructor(private ngZone: NgZone,private gamesServicie: EduService, private data : AuthService,private proyService: ProyectoService) {      
  }
  
  deleteGame(id: string){
   this.proyService.deleteGame(id).subscribe(
    res => {
      this.proyect = res;
      this.getGames();
    },
    err => console.error(err)
  )}
  ngOnInit(){
    this.data.currentMessage.subscribe(message => this.message = message)
    this.proyService.getGames().subscribe(
      res => {
        this.proyect = res;
      },
      err => console.error(err)
    )

    this.proyService.getGames().subscribe(
      res => {
        this.proyect = res;
      },
      err => console.error(err)
    )
  }
  getGames(){
    this.proyService.getGames().subscribe(
      res => {
        this.proyect = res;
      },
      err => console.error(err)
    )
  }
  updateGame(id:string){
    sessionStorage.setItem("proyEdit", id);
  }
  addGame(){
    sessionStorage.removeItem("proyEdit");
  }
}
