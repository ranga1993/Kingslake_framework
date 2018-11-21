import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { from } from 'rxjs';
import { MongoEmployeeComponent } from './mongo-employee/mongo-employee.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth/auth.guard';
import { MongoAtlasEmployeeComponent } from './mongo-atlas-employee/mongo-atlas-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MongoEmployeeComponent,
    LoginComponent,
    MongoAtlasEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
