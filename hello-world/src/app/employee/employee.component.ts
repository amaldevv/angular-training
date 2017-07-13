import {Component} from '@angular/core'
import {Employee } from '../shared/models/employee'
@Component(
    {
        selector : 'app-employee',
        templateUrl : './employee.component.html',
        
        styleUrls : ['./employee.component.css']

    }
)
export class EmployeeComponent{
    title = 'List of Employees';
    NumberOfEmployees = 100;

    employees: Employee[] = [{
        Id : "001",
        FirstName: "Amal",
        LastName:"Dev",
        City :"Trivandrum"

    },
    {
        Id : "002",
        FirstName : "Test01",
        LastName : "Test01",
        City : "Chennai",
    },
    {
        Id :"003",
        FirstName : "Test02",
        LastName : "Test02",
        City : "New Delhi"
    },
    {
        Id :"004",
        FirstName : "Test03",
        LastName : "Test03",
        City:"Mumbai"
    }
    ];

    actions : ["Add", "Edit", "Delete"];
    constructor(){

    }
    ngInit(){

    }
}