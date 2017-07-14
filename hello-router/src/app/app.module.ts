;

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component'
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes = [
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
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
