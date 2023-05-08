import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email=""
  password=""

  constructor(private userservice:UserService,private toastr:ToastrService,private router:Router){}

  login()
  {
    let login={

        "email":this.email,
        "password":this.password
      
    }

    this.userservice.login(login).subscribe(resp=>
      {
        this.toastr.success(resp.msg); 
        let id=resp.data.id;
        localStorage.setItem("id",id);

        let token=resp.data.token;
        localStorage.setItem("token",token);

        this.router.navigateByUrl("/user")
        
      },
      error=>
      {
        this.toastr.error(error.error.msg)
      })
  }
}
