import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { VendorComponent } from './vendor/vendor.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { LoginGuard } from './login.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    component:SignupComponent, path:""
  },
  {
    component:LoginComponent,path:"login"
  },
  {
    component:ForgotpasswordComponent,path:"forgot"
  },
  {
    component:ChangePasswordComponent,path:"change"
  },
  {
    component:UserDashboardComponent, path:"user",canActivate:[LoginGuard]
  },
  {
    component:VendorComponent,path:"vendor",canActivate:[LoginGuard]
  },
  {
    component:CategoryComponent,path:"category",canActivate:[LoginGuard]
  },
  {
    component:SubcategoryComponent,path:"subcategory",canActivate:[LoginGuard]
  },
  {
    component:LogoutComponent,path:"logout",children:[
      {
        component:LoginComponent,
        path:"/aaa"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
