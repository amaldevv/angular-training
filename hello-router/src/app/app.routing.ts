

import { HomeComponent } from "app/home/home.component";
import { EmployeeComponent } from "app/employee/employee.component";
import { AboutComponent } from "app/about/about.component";
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from "app/notfound/notfound.component";
import { ModuleWithProviders } from "@angular/core";



const appRoutes: Routes = [
  {

    path:'',
    component: HomeComponent
  },
  {

    path:'employees',
    component: EmployeeComponent
  },
  {

    path:'about',
    component: AboutComponent
  },
 {

    path:'**',
    component: NotfoundComponent
  },
];

export const appRouting: ModuleWithProviders  =  RouterModule.forRoot(appRoutes);