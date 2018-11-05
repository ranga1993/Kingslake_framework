import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// import { from } from 'rxjs';
// import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Defining Constructor Variables
  constructor(private http: Http) { }

  //Calling the get_employees method in backend
  getEmployeeDetails(){
    return this.http.get('http://localhost:3000/api/get_employees')
      .map(res => res.json());
  }

  //Calling the add_employee method in backend
  addEmployee(newEmployee){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/add_employee', newEmployee, { headers: headers})
      .map(res => res.json());
  }

  //Calling the delete_employee method in backend
  deleteEmployee(id){
    return this.http.delete('http://localhost:3000/api/delete_employee/' + id)
      .map(res => res.json());
  }

  //Calling the update_employee method in backend
  updateEmployee(newEmployee){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/api/update_employee/' + newEmployee.id, newEmployee, { headers: headers})
      .map(res => res.json());
  }
}
