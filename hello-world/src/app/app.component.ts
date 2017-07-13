import { Component } from '@angular/core';
import { Employee } from './shared/models/employee';
import { EmployeeListMockData } from 'app/shared/mock-data/EmployeeListMockData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';


    employees : Employee[]= EmployeeListMockData;

    SelectedEmployee: Employee

    onSelectEmployee(employee: Employee)
    {
        this.SelectedEmployee = employee;
    }
}
