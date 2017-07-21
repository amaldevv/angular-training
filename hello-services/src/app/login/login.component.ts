import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/shared/service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserCredentials ={
    Username:'',
    Password:''
  };
  successMessage:string='';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  ValidateLogin(){

    this.authService.ValidateLogin(this.UserCredentials);
   };
}
