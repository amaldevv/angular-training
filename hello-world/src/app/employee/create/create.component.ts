import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Employee } from 'app/shared/models/employee';

@Component({
  selector: 'app-employee-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  title = 'Create Employee';

  @Output() employeeCreated = new EventEmitter();

  newEmployee: Employee = new Employee();


  OnCreateEmployee()  {
    // console.log(this.newEmployee);

    this.employeeCreated.emit({ employee: this.newEmployee});
  }
  constructor() { }

  ngOnInit() {
  }

}
