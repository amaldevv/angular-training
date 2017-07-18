import { Component, OnInit } from '@angular/core';
import { Employee } from 'app/shared/models/employee';

import { EmployeeListMockData } from 'app/shared/mock-data/EmployeeListMockData';

@Component({
  selector: 'app-employee-list',
  templateUrl: '../list/list.component.html',
  styleUrls: ['../list/list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]= EmployeeListMockData;
  constructor() { }

  ngOnInit() {
  }

}
