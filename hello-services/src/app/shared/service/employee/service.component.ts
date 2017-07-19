import {  Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()

export class EmployeeService  {
  employeeUrl = 'http://localhost:10255/api/employees';
  constructor(private http: Http) { }



  GetEmployees() {


     return this.http.get(this.employeeUrl)
  }

}
