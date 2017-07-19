import {  Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Employee } from "app/shared/models/employee";

@Injectable()

export class EmployeeService  {
  employeeUrl = 'http://localhost:10255/api/employees';
  constructor(private http: Http) { }



  GetEmployees(): Observable<Employee[]> {


     return this.http.get(this.employeeUrl).map(response => response.json());
  }
  GetEmployeeDetail(employeeId): Observable<Employee>
  {

    return this.http.get(`${this.employeeUrl}/${employeeId}`).map(response => response.json());
  }
  CreateNewEmployee(newEmployee){
    return this.http.post(this.employeeUrl,newEmployee).map(response=>response.json());
  }
}
