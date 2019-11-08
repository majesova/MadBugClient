import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  url = environment.apiUrl + "Bug";
  constructor(private http:HttpClient, private authService:AuthService) { }

  buildHeaders(){
    var token = this.authService.getToken();
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type':'application/json',
        'Authorization':'Bearer '+ token})
      };
      return httpOptions;
  }
  //Listar
  getBugs(){
    const httpOptions = this.buildHeaders();
      return this.http.get(this.url,httpOptions);
  }
  //Crear 
  postBug(bug:any){
      const httpOptions = this.buildHeaders();
      return this.http.post(this.url,bug,httpOptions);
  }
  //Editar
  putBug(id:number,bug:any){
    const httpOptions = this.buildHeaders();
    var urlPut = this.url + "/" + id; //https://localhost:5001/api/Bug/123 <-id bug
    return this.http.put(urlPut,bug,httpOptions);
  }
  //Eliminar
  deleteBug(id:number){
    const httpOptions = this.buildHeaders();
    var urlDelete = this.url + "/" + id;//https://localhost:5001/api/Bug/123 <- id bug
    return this.http.delete(urlDelete,httpOptions);
  }
}
