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
    component:UserDashboardComponent,path:"user"
  },
  {
    component:VendorComponent,path:"vendor"
  },
  {
    component:CategoryComponent,path:"category"
  },
  {
    component:SubcategoryComponent,path:"subcategory"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
