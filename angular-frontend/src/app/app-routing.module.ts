import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { from } from 'rxjs';
import { MongoEmployeeComponent } from './mongo-employee/mongo-employee.component';
import { Route } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth/auth.guard';

//url paths for each url
const appRoutes: Routes = [
    {path: 'sql', component: EmployeeComponent, canActivate:[AuthGuard]},
    {path: 'mongo', component: MongoEmployeeComponent, canActivate:[AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
