import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

 authUrl = 'http://localhost:10255/api/login';
  constructor(private http:Http) { }

  ValidateLogin(credentials){
console.log('credentials');
    return this.http.post(this.authUrl,credentials).map(response => response.json());
  }

}
