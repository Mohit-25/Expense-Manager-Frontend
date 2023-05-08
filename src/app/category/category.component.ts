import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  cname=""
  categories=[]
  constructor(private userservice:UserService,private toastr:ToastrService){}

  ngOnInit(): void {
    
    this.loaddata()
  }

  loaddata()
  {

    this.userservice.getcategory(localStorage.getItem("id")).subscribe(resp=>{
      this.categories=resp.data
    })

  }
 
  addcategory()
  {
    let category={
      "cname":this.cname,
      "usercat":{
        "id":localStorage.getItem("id")}
    }

    this.userservice.addcategory(category).subscribe(resp=>{
        console.log(resp);
        this.toastr.success(resp.msg)
        this.loaddata()
        
    },error=>{
      this.toastr.error(error.error.msg)
      console.log(error);
      
    })
  }
}
