import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { JsbdataService } from '../services/jsbdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jsb-employee',
  templateUrl: './jsb-employee.component.html',
  styleUrls: ['./jsb-employee.component.css'],

  //Data Service Providers
  providers: [JsbdataService]
})
export class JsbEmployeeComponent implements OnInit {

  //empty list to store employee details
  employeeList: Employee[]=[];

  //Defining selectedEmployee variable
  selectedEmployee: Employee;

  //Defining toggleForm variable
  toggleForm: boolean = false;

  //Defining Constructor Variables
  constructor(private jsbDataService: JsbdataService, private router: Router) { }

  //Get Employees
  getEmployees(){
    this.jsbDataService.getEmployeeDetails()
      .subscribe(employees => {
        this.employeeList = employees;
      })
  }

  //Insert an Employee
  addEmployee(form){
    let newEmployee = {
      name : form.value.empName,
      nic : form.value.empNic
    }

    this.jsbDataService.addEmployee(newEmployee)
      .subscribe( employee => {
        console.log(employee);
        this.getEmployees();
      })
  }

  //Delete an Employee
  deleteEmployee(id){
    this.jsbDataService.deleteEmployee(id)
      .subscribe( data => {
        if(data.affectedRows == 1){
          for(var i=0; i < this.employeeList.length; i++){
            if(id == this.employeeList[i].id){
              this.employeeList.splice(i, 1);
            }
          }
        };
        this.getEmployees();
      })
  }

  //Update an Employee
  editEmployee(form){
    let newEmployee = {
      id :this.selectedEmployee.id,
      name : form.value.empName,
      nic : form.value.empNic
    }

    this.jsbDataService.updateEmployee(newEmployee)
      .subscribe( result => {
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

  // onLogout(){
  //   this.loginService.deleteToken();
  //   this.router.navigateByUrl('login');
  // }
}
