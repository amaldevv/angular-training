import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "app/shared/service/employee/service.component";
import { Employee } from "app/shared/models/employee";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  EmployeeId :number;
  sucessMessage : string;
  errorMessage : string;
  selectedEmployee: Employee = new Employee();
  constructor(private route: ActivatedRoute,
              private router: Router,
            private employeeService : EmployeeService) {


  }

  goBack(){
    this.router.navigate['/employees']
  }
  ngOnInit() {
    console.log( this.route.snapshot.params['id']);


     this.EmployeeId = parseInt(this.route.snapshot.params['id']);

    this.employeeService.GetEmployeeDetail(this.EmployeeId)
      .subscribe((employee)=>  this.selectedEmployee = employee,
      (err) => {
        console.log("From edit component ", err);
      });
  }

  EditEmployee(){

    this.employeeService.EditEmployee(this.selectedEmployee)
    .subscribe(updatedEmp => {
      console.log(updatedEmp);
       this.sucessMessage =`Updated Successfully with Employee Id : ${updatedEmp.Id}`;
      //this.router.navigate(['/employees', createdEmp.Id]);
    },
      (err) => {
        this.errorMessage= err;
        console.log("From edit component ", err);
      }

    );
  }

}
