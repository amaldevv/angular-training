import { Routes, RouterModule } from "@angular/router";
import { EmployeeSectionComponent } from "app/employee/section/section.component";

import { EmployeeListComponent } from "app/employee/list/list.component";
import { EmployeeCreateComponent } from "app/employee/create/create.component";
import { EmployeeEditComponent } from "app/employee/edit/edit.component";
import { EmployeeDetailsComponent } from "app/employee/details/details.component";
import { ModuleWithProviders } from "@angular/core";

export const employeeRoute: Routes = [

    {
      path : 'employees',
      component: EmployeeSectionComponent,

    children:[
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
    }]
    }
  ];

  export const employeeRouting: ModuleWithProviders =
                            RouterModule.forRoot(employeeRoute);
