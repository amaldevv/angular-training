import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  title = "Create Employee";
  constructor() { }

  ngOnInit() {
  }

}
