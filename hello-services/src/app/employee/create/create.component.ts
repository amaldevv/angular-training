import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { EmployeeService } from "app/shared/service/employee/service.component";

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
  constructor(private service : EmployeeService) { }

  ngOnInit() {
  }

  createNewEmployee(){
    this.service.CreateNewEmployee(this.newEmployee)
    .subscribe(createdEmp => {
      console.log(createdEmp);
    })
  }
}
