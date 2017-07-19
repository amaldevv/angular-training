import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from "@angular/router";
import { EmployeeService } from "app/shared/service/employee/service.component";
import { Employee } from "app/shared/models/employee";

@Component({
  selector: 'app-employee-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  selectedEmployee : Employee = new Employee();
  EmployeeId :number;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeService : EmployeeService
            ) {


  }

  goBack(){
    this.router.navigate['/employees']
  }
  ngOnInit() {


    this.EmployeeId = parseInt(this.route.snapshot.params['id']);

    this.employeeService.GetEmployeeDetail(this.EmployeeId)
      .subscribe((employee)=>  this.selectedEmployee = employee);
  }

}
