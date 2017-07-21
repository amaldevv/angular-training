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
import { AuthService } from "app/shared/service/auth.service";
import { LoginComponent } from "app/login/login.component";







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    EmployeeModule,
    appRouting

  ],
  providers: [
    AuthService

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
