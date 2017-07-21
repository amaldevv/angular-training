import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { EmployeeService } from "app/shared/service/employee/service.component";
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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
  lastNameError: string;
  cityError: string;
  CreateForm : FormGroup;

  constructor(private service : EmployeeService,
    private router: Router,
    private formBuilder : FormBuilder) { }

  ngOnInit() {
    // this.CreateForm = new FormGroup({
    //   EmployeeId: new FormControl(),
    //   FirstName: new FormControl(),
    //   LastName: new FormControl(),
    //   City: new FormControl()
    // });

    this.CreateForm = this.formBuilder.group({
      EmployeeId:[],
      FirstName:[''],
      LastName:[''],
      City:[''],
    });

    this.CreateForm.valueChanges.subscribe(data => {
      let firstName = this.CreateForm.get('FirstName');
      let lastName = this.CreateForm.get('LastName');
      let city = this.CreateForm.get('City');
       this.firstNameError =
       this.lastNameError =
       this.cityError   ="";

      if(firstName.dirty && firstName.invalid)
        this.firstNameError="First Name is required";
      if(lastName.dirty && lastName.invalid)
        this.lastNameError="Last Name is required";
      if(city.dirty && city.invalid)
        this.cityError="City is required";
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
