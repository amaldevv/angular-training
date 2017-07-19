
import { HomeComponent } from "app/home/home.component";
import { EmployeeListComponent } from "app/employee/list/list.component";
import { AboutComponent } from "app/about/about.component";
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from "app/notfound/notfound.component";
import { ModuleWithProviders } from "@angular/core";
import { EmployeeDetailsComponent } from "app/employee/details/details.component";
import { EmployeeCreateComponent } from "app/employee/create/create.component";
import { EmployeeEditComponent } from "app/employee/edit/edit.component";

import { EmployeeSectionComponent } from "app/employee/section/section.component";



const appRoutes: Routes = [
  {

    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    redirectTo:'/',
    pathMatch:'full'
  },

  {

    path:'about',
    component: AboutComponent
  },
 {

    path:'**',
    component: NotfoundComponent
  }

];

export const appRouting: ModuleWithProviders  =  RouterModule.forRoot(appRoutes);
