import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './login-model';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  /*{
  "userName": "string",
  "password": "string"
}*/
  authenticate(loginModel:LoginModel){
    var url = environment.apiUrl + "Account/token";
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.post(url,loginModel,httpOptions);
  }
  tokenKey = "auth_token";
  saveToken(token){
    localStorage.setItem(this.tokenKey,token);
  }

  getToken(){
    var token = localStorage.getItem(this.tokenKey);
    return token;
  }

  isUserLoggedIn():boolean{
    var token = this.getToken();
    return token!=null && token!= undefined;
  }

  logout(){
    localStorage.removeItem(this.tokenKey);
  }

}
