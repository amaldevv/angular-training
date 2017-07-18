

import { HomeComponent } from "app/home/home.component";
import { EmployeeListComponent } from "app/employee/list/list.component";
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
    path:"employees",
    loadChildren:'app/employee/employee.module#EmployeeModule'
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
