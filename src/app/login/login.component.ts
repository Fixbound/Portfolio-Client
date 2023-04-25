import { Component , OnInit} from '@angular/core';
import { EduService } from '../services/educacion.service';
import { Upload } from '../models/upload';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit{
flagForm: boolean = true;
hiddenValue:string = ''
logged:string='false'
incorrect: string='false'

i: number = 0
login: any = []
games: Upload = {
  name:'',
  description:''
}

id = this.games.name


  constructor(private gamesServicie: EduService, private data: AuthService) { 
  }

  sendForm(id: string){
   if(!this.flagForm && this.i == 1){
    this.gamesServicie.loginForm(id).subscribe(
      res => {
      this.auth( res);
      },
      err => {console.error(err)
      this.incorrect='';}
    )}
 else{
    this.i++
 
 }
   }
  activateForm(){
    if(this.flagForm){
      this.flagForm = false
    }
  }
  auth(prom : any){
    if(prom.user == this.login.id && prom.pass == this.login.pass){
      this.authSucces();
    }
    else{
      this.incorrect='';
    }
  }
  newMessage(message: string){
    this.data.changeMessage(message);
    localStorage.setItem('logged',message)
  }
  logOut(){
    this.flagForm = false
      this.hiddenValue= '';
      this.logged= 'false';
      this.newMessage('false');
      this.i=1;
  }

  ngOnInit(): void {
    if( localStorage.getItem("logged")!== null){
      this.logged  =  (localStorage.getItem("logged") || 'false');
      if(localStorage.getItem("logged") == ""){
        this.authSucces();
      }
    }
    else{
      localStorage.setItem("logged","false");
      this.flagForm= true;
      this.hiddenValue = '';
      this.i = 0;
      this.logged='';
      this.incorrect ='false'; 
    }
  }
  authSucces(){
    this.logged = ''
    this.i = 0;
    this.flagForm = true
    this.hiddenValue= 'true';
    this.newMessage('');
    this.incorrect = 'false';
  }
}


