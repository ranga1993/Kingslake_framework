import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //Defining Constructor Variables
  constructor(private dataService: LoginService, private router: Router){}

  //Checking the Login Status & if user is not logged in redirecting to login page
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      var serverType = localStorage.getItem('serverType');
      if(!this.dataService.isLoggedIn()){
        this.router.navigateByUrl('login');
        this.dataService.deleteToken();
        this.dataService.deleteServer();
        return false;
      }
    return true;
  }
}
