import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from "@angular/router";

@Component({
  selector: 'app-employee-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

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
