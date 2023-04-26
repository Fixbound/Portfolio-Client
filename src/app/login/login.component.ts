import { Component , OnInit,ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EduService } from '../services/educacion.service';
import { Upload } from '../models/upload';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
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


  constructor(private gamesServicie: EduService, private data: AuthService, private dialog: MatDialog) { 
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
    this.closeDialog();
  }
  
  @ViewChild('dialog')
  dialogTemplateRef!: TemplateRef<any>;

  openDialog() {
    this.dialog.open(this.dialogTemplateRef);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}


