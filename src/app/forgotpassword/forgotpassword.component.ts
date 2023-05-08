import { Component } from '@angular/core';
import { UserService } from '../user.service';
import {ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

  email=""
  otp=""

  constructor(private userservice:UserService,private toastr:ToastrService,private router:Router){}
  forgotpassword()
  {
    this.userservice.forgotpassword(this.email).subscribe(resp=>{
      
      this.toastr.info(resp.msg)

    },
      error=>{
        this.toastr.info(error.error.msg)
      }
    )


  }

  verify()
  {
    this.userservice.verify(this.otp).subscribe(resp=>
      {
          this.toastr.success(resp.msg)
          this.router.navigateByUrl("/change")
      }, error=>{
        this.toastr.error(error.error.msg);
      }
      )
  }
}
