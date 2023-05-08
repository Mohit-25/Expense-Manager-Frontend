import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit{
 vname=""
 vendors=[]
 constructor(private userservice:UserService,private toastr:ToastrService){}

 ngOnInit(): void {
   this.loaddata()
 }

 loaddata()
  {

    this.userservice.getvendor(localStorage.getItem("id")).subscribe(resp=>
      {
        this.vendors=resp.data
        
      })
  }

  
 addVendor()
 {
   let vendor={
    "vname":this.vname,
    "user":{
      "id":localStorage.getItem("id")
    }
   }
    
   this.userservice.addvendor(vendor).subscribe(resp=>
    {
      console.log(resp);
      this.toastr.success(resp.msg)
      this.loaddata()
    },error=>
    {
      this.toastr.error(error.error.msg)
      console.log(error);
    })

 }
 deletevendor(id:any)
 {

 this.userservice.deletevendor(id).subscribe(resp=>{
     console.log(resp)
     this.vendors=this.vendors.filter(vendor=>vendor['vendorId']!=id)
     this.toastr.success(resp.msg)

 },error=>{
    this.toastr.error(error.error.msg)
 })
 }
}
