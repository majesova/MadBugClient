import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : any = {email:'', password:''}
  loginError= ""
  constructor(private authService : AuthService, private router:Router) { }
  
  ngOnInit() {
  }
  tokenResponse:any;
  authenticate(loginForm){
    //manipulate the model
    if (!loginForm.valid) return;
    console.info("Esto va a mandar a guardar" + JSON.stringify(loginForm.value));
  
    this.authService.authenticate(loginForm.value).subscribe(
      data => {
        console.info(data);
        this.tokenResponse = data;
        this.authService.saveToken(this.tokenResponse.accessToken);
        this.router.navigate(["/"]);
      },
      errorData => {
        this.loginError = errorData.error.friendlyMessage;
        console.error(errorData);
      });
  }

}
