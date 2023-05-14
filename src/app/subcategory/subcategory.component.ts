import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Result } from '../shared/result.interface';



@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})

export class SubcategoryComponent {
  cname=""
  subcname=""
  
  categories=[]
  constructor(private userservice:UserService,private toastr:ToastrService,private router:Router){}

  // subcategories:Result[]=[]
  subcategories=[]
  ngOnInit(): void {
    this.loaddata();
  }
 
  loaddata()
  {
    this.userservice.getsubcategory(localStorage.getItem("id")).subscribe(resp=>{
      this.subcategories=resp.data
    })

    this.userservice.getcategory(localStorage.getItem("id")).subscribe(resp=>{
      this.categories=resp.data
    })

  }
  addsubcategory()
  {
    console.log(localStorage.getItem("id"));
    console.log(this.cname);
    
    let cat={
      
        "cname": this.cname,
        "usercat":{
            "id": localStorage.getItem("id")
        }
      }
 
     this.userservice.findcategory(cat).subscribe(resp=>{
      console.log("inside find..")
      console.log(resp.msg);
      console.log(resp);
      
      let catid=resp.data.categoryId
      console.log(catid)
      localStorage.setItem("catid",catid)

      let subcategory={
        "subcname":this.subcname,
        "category":{
          "categoryId":localStorage.getItem("catid")}
      }
  
      this.userservice.addsubcategory(subcategory).subscribe(resp=>{
          console.log(resp);
         
          this.toastr.success(resp.msg)
          this.loaddata()
         
          
          
      },error=>{
        this.toastr.error(error.error.msg)
        console.log(error);
        
      })
      
     },error=>{
      console.log(error.error.msg);
      console.log(localStorage.getItem("catid"))
      
     })   

    
  }

}
