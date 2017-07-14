import { Component, OnInit } from '@angular/core';
import { Employee } from 'app/shared/models/employee';

import { EmployeeListMockData } from 'app/shared/mock-data/EmployeeListMockData';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[]= EmployeeListMockData;
  constructor() { }

  ngOnInit() {
  }

}
