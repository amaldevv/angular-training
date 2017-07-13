import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

   title = "Selected Employee Details";

   @Input() Employee;
  constructor() { }

  ngOnInit() {
  }

}
