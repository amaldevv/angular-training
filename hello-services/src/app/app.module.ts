;

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component'
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { appRouting } from "app/app.routing";
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeModule } from "app/employee/employee.module";





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,

    NavbarComponent,
    NotfoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    EmployeeModule,
    appRouting

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
