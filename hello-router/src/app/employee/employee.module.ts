import { NgModule } from '@angular/core';



import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {  employeeRouting } from "app/employee/employee.routing";
import { EmployeeDetailsComponent } from "../employee/details/details.component";
import { EmployeeListComponent } from "../employee/list/list.component";
import { EmployeeEditComponent } from "../employee/edit/edit.component";
import { EmployeeDeleteComponent } from "../employee/delete/delete.component";
import { EmployeeCreateComponent } from "../employee/create/create.component";
import { EmployeeSectionComponent } from "../employee/section/section.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    employeeRouting
  ],
  exports: [],
  declarations: [
    EmployeeDetailsComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
    EmployeeCreateComponent,
    EmployeeSectionComponent
  ],
  providers: [],
})
export class EmployeeModule {

 }
