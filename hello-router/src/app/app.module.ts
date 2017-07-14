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
import { appRouting } from "app/app.routing";
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeDetailsComponent } from './employee/details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeeComponent,
    NavbarComponent,
    NotfoundComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
