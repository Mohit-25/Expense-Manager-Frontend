import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      let islogin=localStorage.getItem("token") as string;
      if(islogin==null || islogin==undefined || islogin.trim().length==0)
      {
        console.log("Filter called");
        
         this.router.navigateByUrl("/login");
         return false;
      }
     
      return true;
  }
  
}
