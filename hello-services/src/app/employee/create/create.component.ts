import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";

@Component({
  selector: 'app-employee-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  newEmployee:Employee ={
    Id : 0,
     FirstName:'',
     LastName:'',
     City:'',
     HrCode:'',
     PhotoUrl:''
  };
  constructor() { }

  ngOnInit() {
  }

}
