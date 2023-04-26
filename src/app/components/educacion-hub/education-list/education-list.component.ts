import { Component,HostBinding, OnInit,NgZone } from '@angular/core';
import { EduService } from '../../../services/educacion.service'
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { EducationFormComponent } from '../educacion-form/educacion-form.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(private ngZone: NgZone,private eduService: EduService, private data : AuthService, private dialog: MatDialog) {      
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
    this.getGames();

  }
  async getGames(){
    try {
      this.education = await this.eduService.getGames().toPromise();
    } catch (err) {
      console.error(err);
    }
  }
  updateGame(id:string){
    sessionStorage.setItem("eduEdit", id);
    const dialogRef = this.dialog.open(EducationFormComponent);
  }
  addGame(){
    sessionStorage.removeItem("eduEdit");
  }

  openDialog() {
    const dialogRef = this.dialog.open(EducationFormComponent);
    sessionStorage.removeItem("eduEdit");
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
