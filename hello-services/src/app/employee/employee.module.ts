
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {  employeeRouting } from "app/employee/employee.routing";
import { EmployeeDetailsComponent } from "../employee/details/details.component";
import { EmployeeListComponent } from "../employee/list/list.component";
import { EmployeeEditComponent } from "../employee/edit/edit.component";
import { EmployeeDeleteComponent } from "../employee/delete/delete.component";
import { EmployeeCreateComponent } from "../employee/create/create.component";
import { EmployeeSectionComponent } from "../employee/section/section.component";
import { EmployeeService } from "../shared/service/employee/service.component";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
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
  providers: [ EmployeeService],
})
export class EmployeeModule {

 }
