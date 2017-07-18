import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  EmployeeId :string;
  constructor(private route: ActivatedRoute,
              private router: Router) { 

   
  }
  
  goBack(){
    this.router.navigate['/employees']
  }
  ngOnInit() {
    console.log( this.route.snapshot.params['id']);
    this.EmployeeId = this.route.snapshot.params['id'];
  }


}
