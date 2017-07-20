import {  Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/topromise';
import { Observable } from "rxjs/Observable";
import { Employee } from "app/shared/models/employee";

@Injectable()

export class EmployeeService  {
  employeeUrl = 'http://localhost:10255/api/employees';
  constructor(private http: Http) { }



  GetEmployees(): Promise<Employee[]> {

    return this.http.get(this.employeeUrl).map(response => response.json())
    .do(response => console.log(response))
    .toPromise()
    .catch(this.handleError);

  }
  GetEmployeeDetail(employeeId): Observable<Employee>
  {

    return this.http.get(`${this.employeeUrl}/${employeeId}`).map(response => response.json())
      .catch(this.handleError);
  }
  CreateNewEmployee(newEmployee){
    return this.http.post(this.employeeUrl,newEmployee).map(response=>response.json())
    .catch(this.handleError );
  }

  private handleError(err)
  {
    return  Observable.throw('Internal Server Error');
  }
}
