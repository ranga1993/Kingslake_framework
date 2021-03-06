import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { urls } from '../base_url/base_url';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Defining Constructor Variables
  constructor(private http: Http) { }

  //Calling the get_employees method in backend
  getEmployeeDetails(){
    return this.http.get(urls.mysql_url + '/get_employees')
      .map(res => res.json());
  }

  //Calling the add_employee method in backend
  addEmployee(newEmployee){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(urls.mysql_url + '/add_employee', newEmployee, { headers: headers})
      .map(res => res.json());
  }

  //Calling the delete_employee method in backend
  deleteEmployee(id){
    return this.http.delete(urls.mysql_url + '/delete_employee/' + id)
      .map(res => res.json());
  }

  //Calling the update_employee method in backend
  updateEmployee(newEmployee){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(urls.mysql_url + '/update_employee/' + newEmployee.id, newEmployee, { headers: headers})
      .map(res => res.json());
  }
}
