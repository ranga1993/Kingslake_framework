import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { urls } from '../base_url/base_url';

@Injectable({
  providedIn: 'root'
})
export class MongodataService {

  //Defining Constructor Variables
  constructor(private http: Http) { }

  //Calling the get_employees method in backend
  getEmployeeDetails(){
    return this.http.get(urls.mongo_url + '/get_employees')
      .map( res => res.json());
  }

  //Calling the add_employee method in backend
  addEmployee(newEmployee){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(urls.mongo_url + '/add_employee', newEmployee, { headers: headers })
      .map( res =>res.json());
  }

  //Calling the update_employee method in backend
  updateEmployee(newEmployee){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(urls.mongo_url + '/update_employee/' + newEmployee._id, newEmployee, { headers: headers })
      .map( res => res.json());
  }

  //Calling the delete_employee method in backend
  deleteEmployee(_id){
    return this.http.delete(urls.mongo_url + '/delete_employee/' + _id)
      .map( res => res.json());
  }
}
