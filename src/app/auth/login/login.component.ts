import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : any = {email:'', password:''}

  constructor() { }
  
  ngOnInit() {
  }

  authenticate(){
    //manipulate the model
  }

}
