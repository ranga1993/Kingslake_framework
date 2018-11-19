import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/mongoEmployee';
import { MongodataService } from '../services/mongodata.service';
import { from } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mongo-employee',
  templateUrl: './mongo-employee.component.html',
  styleUrls: ['./mongo-employee.component.css'],

  //Data Service Providers
  providers: [MongodataService, LoginService]
})
export class MongoEmployeeComponent implements OnInit {
  //empty list to store employee details
  mongoEmployeeList: Employee[] = [];

  //Defining selectedEmployee variable
  selectedEmployee: Employee;

  //Defining toggleForm variable
  toggleForm: boolean = false;

  //Defining Constructor Variables
  constructor( private mongodataService: MongodataService, private loginService: LoginService,  private router: Router) { }

  //Get Employees
  getEmployees(){
    this.mongodataService.getEmployeeDetails()
      .subscribe( employees => {
        this.mongoEmployeeList = employees;
        console.log('data from dataservice: '+this.mongoEmployeeList[0].firstName);
      })
  }

  //Insert an Employee
  addEmployee(form){
    let newEmployee: Employee = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      nic: form.value.nic
    }
    this.mongodataService.addEmployee(newEmployee)
      .subscribe( employee => {
        console.log(employee);
        this.getEmployees();
      })
  }

  //Update an Employee
  editEmployee(form){
    let newEmployee: Employee = {
      _id: this.selectedEmployee._id,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      nic: form.value.nic
    }
    this.mongodataService.updateEmployee(newEmployee)
      .subscribe( result => {
        console.log('Original Employee to be updated with old values: ' + result);
        this.getEmployees();
      });
      this.toggleForm = !this.toggleForm;
  }

  //Enabling Edit form When click on Edit button
  showEditForm(employee){
    this.selectedEmployee = employee;
    this.toggleForm = !this.toggleForm;
  }

  //Delete an Employee
  deleteEmployee(_id){
    this.mongodataService.deleteEmployee(_id)
      .subscribe( data => {
        console.log(data);
        if(data.n == 1){
          for(var i=0; i < this.mongoEmployeeList.length; i++){
            if(_id == this.mongoEmployeeList[i]._id){
              this.mongoEmployeeList.splice(i, 1);
            }
          }
        }
      })
  }

  //Default content for landing page after Login
  ngOnInit() {
    this.getEmployees();
  }

  //Logout function
  onLogout(){
    this.loginService.deleteToken();
    this.router.navigateByUrl('login');
  }

}
