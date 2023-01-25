import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Upload} from '../models/upload'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get(`${this.API_URI}/proyectos`);
  }

  getGame(id:string){
    return this.http.get(`${this.API_URI}/proyectos/${id}`);
  }
  
  deleteGame(id:string){
    return this.http.delete(`${this.API_URI}/proyectos/${id}`);
  }
  saveGame(game: Upload){
    return this.http.post(`${this.API_URI}/proyectos`,game);
  }

  updateGame(id:string, updatedGame:Upload): Observable<Upload>{
    return this.http.put(`${this.API_URI}/proyectos/${id}`,updatedGame);
  }

  loginForm(login:string){
    return this.http.get(`${this.API_URI}/login/${login}`);
  }
}
