import { Component,HostBinding, OnInit,NgZone } from '@angular/core';
import { EduService } from '../../../services/educacion.service'
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from 'src/app/app.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-game-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit{
  message:string='';
  @HostBinding('class') classes = 'row'
  education: any = []
  isLogged:string=''

  constructor(private ngZone: NgZone,private eduService: EduService, private data : AuthService) {      
  }
  
  deleteGame(id: string){
   this.eduService.deleteGame(id).subscribe(
    res => {
      this.education = res;
      this.getGames();
    },
    err => console.error(err)
  )}
  ngOnInit(){
    this.data.currentMessage.subscribe(message => this.message = message)
    this.data.currentLogged.subscribe(isLogged  => this.isLogged = isLogged)
    this.eduService.getGames().subscribe(
      res => {
        this.education = res;
      },
      err => console.error(err)
    )
  }
  getGames(){
    this.eduService.getGames().subscribe(
      res => {
        this.education = res;
      },
      err => console.error(err)
    )
  }
  updateGame(id:string){
    sessionStorage.setItem("eduEdit", id);
  }
  addGame(){
    sessionStorage.removeItem("eduEdit");
  }
}
