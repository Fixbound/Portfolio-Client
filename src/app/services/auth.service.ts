import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class AuthService {
  
  private messageSource = new BehaviorSubject<string>('false')
  public isLogged = localStorage.getItem("logged")
  public loggedSource = new BehaviorSubject<any>(this.isLogged);
  currentMessage = this.messageSource.asObservable();
  currentLogged = this.loggedSource.asObservable();
  constructor() {}
  changeMessage (message : string){
    this.messageSource.next(message)
  }
  changeLogging (isLogged : any){
    this.loggedSource.next(localStorage.getItem('logged'))
  }
}

