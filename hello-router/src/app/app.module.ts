;

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/list/list.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component'
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { appRouting } from "app/app.routing";
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeDetailsComponent } from './employee/details/details.component';
import { EmployeeEditComponent } from './employee/edit/edit.component';
import { EmployeeDeleteComponent } from './employee/delete/delete.component';
import { EmployeeCreateComponent } from './employee/create/create.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeeListComponent,
    NavbarComponent,
    NotfoundComponent,
    EmployeeDetailsComponent,

    EmployeeEditComponent,
    EmployeeDeleteComponent,
    EmployeeCreateComponent,
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
