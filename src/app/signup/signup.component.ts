import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  firstName=""
  lastName=""
  email=""
  password=""

  constructor(private userservice:UserService,private toastr:ToastrService,private router:Router){}

  
  signup()
  {
    let user=
  {
    "firstName":this.firstName,
    "lastName":this.lastName,
    "email":this.email,
    "password":this.password                              
  }

  this.userservice.adduser(user).subscribe(resp=>{
     this.toastr.success(resp.msg); 
     this.router.navigateByUrl("/login")
      
  },error=>{
    this.toastr.error(error.error.msg);
  })

     
  }
}
