import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { EmployeeService } from "app/shared/service/employee/service.component";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from  '@angular/forms';
@Component({
  selector: 'app-employee-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  newEmployee:Employee ={
    Id : null,
     FirstName:'',
     LastName:'',
     City:'',
     HrCode:'',
     PhotoUrl:'',
     FullName :''
  };

  sucessMessage : string;
  errorMessage : string;
  firstNameError: string;
  CreateForm : FormGroup;

  constructor(private service : EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.CreateForm = new FormGroup({
      EmployeeId: new FormControl(),
      FirstName: new FormControl(),
      LastName: new FormControl(),
      City: new FormControl()
    });

    this.CreateForm.valueChanges.subscribe(data => {
      let firstName = this.CreateForm.get('FirstName');
       this.firstNameError="";
      console.log(firstName.dirty, firstName.invalid);
      if(firstName.dirty && firstName.invalid)
        this.firstNameError="First Name is required";
    })
  }

  createNewEmployee(){

    this.service.CreateNewEmployee(this.newEmployee)
    .subscribe(createdEmp => {
      console.log(createdEmp);
       this.sucessMessage =`Created Successfully with Employee Id : ${createdEmp.Id}`;
      //this.router.navigate(['/employees', createdEmp.Id]);
    },
      (err) => {
        this.errorMessage= err;
        console.log("From create component ", err);
      }

    );
  }
}
