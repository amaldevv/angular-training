

import { EmployeeListComponent } from "app/employee/list/list.component";
import { EmployeeCreateComponent } from "app/employee/create/create.component";
import { EmployeeEditComponent } from "app/employee/edit/edit.component";
import { EmployeeDetailsComponent } from "app/employee/details/details.component";
import { Routes } from "@angular/router";

export const empRoutes:Routes = [
  {
      path:'',
      component: EmployeeListComponent,
  },
  {
    path:'create',
    component: EmployeeCreateComponent
     
  },
   {
    path:':id/edit',
    component: EmployeeEditComponent
     
  },
  {
    path:':id',
    component: EmployeeDetailsComponent
  }];
  