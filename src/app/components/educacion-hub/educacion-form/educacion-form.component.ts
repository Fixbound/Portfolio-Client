import { Component,HostBinding,OnInit, NgZone } from '@angular/core';
import { Upload } from 'src/app/models/upload';
import { EduService } from 'src/app/services/educacion.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-game-form',
  templateUrl: './educacion-form.component.html',
  styleUrls: ['./educacion-form.component.css']
})
export class EducationFormComponent implements OnInit{

 @HostBinding('class') classes = 'row';
 saveButton:string = "Save"
 updateFlag= 0;
 update: any = [];
 message:string = ''
 upload: Upload = {
  name:'Insitución',
  year:'2000-2000',
  description:'Resumen',
  img:'',
 };
 
 edit: boolean = false;
 constructor(private eduService: EduService, private route:Router, private ngZone: NgZone, private data : AuthService, private dialog: MatDialog){}

 saveNewGame(){
  if(this.updateFlag){
    this.eduService.updateGame((sessionStorage.getItem("eduEdit")|| ''),this.upload)
    .subscribe(
      res => {
        window.alert("Guardado Correcto");
        console.log(res);
        location.reload();
      },
      err => console.error(err)
    )
    this.updateFlag = 0 
    this.saveButton = 'Update'
  }
  else{
    this.eduService.saveGame(this.upload)
    .subscribe(
      res => {
        window.alert("Guardado Correcto");
        console.log(res);
        location.reload();
      },
      err => console.error(err)
    )
  }
  

}
ngOnInit(): void {
  this.data.currentMessage.subscribe(message => this.message = message)
  if(sessionStorage.getItem("eduEdit")!== null){
    this.updateFlag = 1;
    this.saveButton = 'Update'
    this.eduService.getGame(sessionStorage.getItem("eduEdit")|| '').subscribe(
      res => {
        this.update[0] = res;
        this.upload.name =  this.update[0].name;
        this.upload.year =  this.update[0].year;
        this.upload.description =  this.update[0].description;
        this.upload.img =  this.update[0].img;
        this.upload;
      },
      err => console.error(err)
    )
  
  }
  
  
}
close() {
  this.dialog.closeAll();
}

}