import { Component, OnInit } from '@angular/core';
import {  Http } from '@angular/http';

import { Employee } from 'app/shared/models/employee';

import { EmployeeListMockData } from 'app/shared/mock-data/EmployeeListMockData';

@Component({
  selector: 'app-employee-list',
  templateUrl: '../list/list.component.html',
  styleUrls: ['../list/list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]= EmployeeListMockData;
  constructor(private http: Http ) { }

  ngOnInit() {
    const employeeUrl = 'http://localhost:10255/api/employees';
    this.http.get(employeeUrl).subscribe((response)=>{
      console.log(response.json());;
    });
  }

}
