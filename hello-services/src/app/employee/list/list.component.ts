import { Component, OnInit } from '@angular/core';
import {  Http } from '@angular/http';

import { Employee } from 'app/shared/models/employee';

import { EmployeeService } from "app/shared/service/employee/service.component";

@Component({
  selector: 'app-employee-list',
  templateUrl: '../list/list.component.html',
  styleUrls: ['../list/list.component.css']
})
export class EmployeeListComponent implements OnInit {

  errorMessage:string;
  employees: Employee[];//= EmployeeListMockData;
  constructor(private http: Http,
    private employeeService : EmployeeService    ) {

    }



  ngOnInit() {
    this.employeeService.GetEmployees()
    .then(allEmployees =>  this.employees = allEmployees,
      (err) => {
        this.errorMessage= err;
        console.log("From list component ", err);
      }

    )



  }

}
