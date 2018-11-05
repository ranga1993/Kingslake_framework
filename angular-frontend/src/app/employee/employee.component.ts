import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],

  //Data Service Providers
  providers: [DataService, LoginService]
})
export class EmployeeComponent implements OnInit {
  //empty list to store employee details
  employeeList: Employee[]=[];

  //Defining selectedEmployee variable
  selectedEmployee: Employee;

  //Defining toggleForm variable
  toggleForm: boolean = false;
 
  //Defining Constructor Variables
  constructor(private dataService: DataService, private loginService: LoginService,  private router: Router) { }

  //Get Employees
  getEmployees(){
    this.dataService.getEmployeeDetails()
      .subscribe( employees => {
        this.employeeList = employees;
      })
  }

  //Insert an Employee
  addEmployee(form){
    let newEmployee = {
      name : form.value.empName,
      nic : form.value.empNic
    }

    this.dataService.addEmployee(newEmployee)
      .subscribe( employee => {
        console.log(employee);
        this.getEmployees();
      })
  }

  //Delete an Employee
  deleteEmployee(id){
    this.dataService.deleteEmployee(id)
      .subscribe( data => {
        console.log(data);
        if(data.affectedRows == 1){
          for(var i=0; i < this.employeeList.length; i++){
            if(id == this.employeeList[i].id){
              this.employeeList.splice(i, 1);
            }
          }
        }
      })
  }

  //Update an Employee
  editEmployee(form){
    let newEmployee = {
      id :this.selectedEmployee.id,
      name : form.value.empName,
      nic : form.value.empNic
    }

    this.dataService.updateEmployee(newEmployee)
      .subscribe( result => {
        console.log('Original item to be updated with old values: ' + result);
        this.getEmployees();
      });
      this.toggleForm = !this.toggleForm;
  }

  //Enabling Edit form When click on Edit button
  showEditForm(employee){
    this.selectedEmployee = employee;
    this.toggleForm = !this.toggleForm;
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
