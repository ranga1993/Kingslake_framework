import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { urls } from '../base_url/base_url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Defining Constructor Variables
  constructor(private http: Http) { }

  //Calling the login method in authentication backend along with authCredentials
  login(authCredentials){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(urls.login_url + '/login', authCredentials, { headers: headers })
      .map(res => res.json());
  }

  //Store serverType in local storage
  setServer(serverType: string){
    localStorage.setItem('serverType', serverType);
  }

  //Store token in local storage
  setToken(token: string){
    localStorage.setItem('token', token);
  }

  //Remove value of the token from the local storage
  deleteToken(){
    localStorage.removeItem('token');
  }

  //Remove value of the serverType from the local storage
  deleteServer(){
    localStorage.removeItem('serverType');
  }

  //get user payload
  getUserPayload(){
    var token = localStorage.getItem('token');
    if(token){
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else{
      return null;
    }
  }

  //Check whether a user is logged in or not
  isLoggedIn(){
    var userPayload = this.getUserPayload();
    if(userPayload){
      return userPayload.exp > Date.now() / 1000;
    }
    else{
      return false;
    }
  }
}
