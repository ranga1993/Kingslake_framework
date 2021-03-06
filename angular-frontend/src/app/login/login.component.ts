import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  //Data Service Providers
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  //Defining Constructor Variables
  constructor(private dataService: LoginService, private router: Router) { }

  //Defining Login values
  model = {
    email: '',
    password: '',
    serverType: ''
  };

  //Email Validation characters
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
  
  //Defining serverErorMessage
  serverErrorMessage : string;

  //Routing Users for selected Services
  ngOnInit() {
    if(this.dataService.isLoggedIn()){
      var serverType = localStorage.getItem('serverType');
      if(serverType == 'mySQL'){
        this.router.navigateByUrl('sql');
      }
      else if(serverType == 'mongoDB'){
        this.router.navigateByUrl('mongo')
      }
      else if(serverType == 'mongoDBAtlas'){
        this.router.navigateByUrl('mongoatlas')
      }
    }
  }

  //Checking the Token along with the serverType when logging
  onSubmit(form : NgForm){
    this.dataService.login(form.value).subscribe(
      res =>{
        this.dataService.setServer(res['serverType']);
        this.dataService.setToken(res['token']);
        if(res['token']){
          if(res['serverType'] == 'mySQL'){
            this.router.navigateByUrl('sql');
          }
          else if(res['serverType'] == 'mongoDB'){
            this.router.navigateByUrl('mongo')
          }
          else if(res['serverType'] == 'mongoDBAtlas'){
            this.router.navigateByUrl('mongoatlas')
          }
        }
        else{
          this.serverErrorMessage = res['message'];
        }
      },
      err => {
        console.log(err);
      });
  }

}
