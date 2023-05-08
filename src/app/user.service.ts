import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }

  adduser(user:any):Observable<any>
  {
     return this.httpclient.post(environment.apiUrl+"/signupuser",user);
  }

  login(user:any):Observable<any>
  {
    return this.httpclient.post(environment.apiUrl+"/loginuser",user);
  }

  forgotpassword(email:any):Observable<any>
  {
    return this.httpclient.get(environment.apiUrl+"/forgot/"+email);
  }
  verify(otp:any):Observable<any>
  {
    return this.httpclient.get(environment.apiUrl+"/verify/"+otp);
  }

  addvendor(vendor:any):Observable<any>
  {
    return this.httpclient.post(environment.apiUrl+"/vendor",vendor)
  }

  addcategory(category:any):Observable<any>
  {
    return this.httpclient.post(environment.apiUrl+"/category",category)
  }

  getcategory(id:any):Observable<any>
  {
    return this.httpclient.get(environment.apiUrl+"/category/"+id);
  }
  getvendor(id:any):Observable<any>
  {
    return this.httpclient.get(environment.apiUrl+"/vendor/"+id);
  }


  addsubcategory(subcategory:any):Observable<any>
  {
    return this.httpclient.post(environment.apiUrl+"/subcategory",subcategory)
  }

  getsubcategory(id:any):Observable<any>
  {
    return this.httpclient.get(environment.apiUrl+"/subcategory/"+id);
  }

  findcategory(cat:any):Observable<any>
  {
    return this.httpclient.post(environment.apiUrl+"/findcategory",cat);
  }

  deletevendor(id:any):Observable<any>
  {
    return this.httpclient.delete(environment.apiUrl+"/vendor/"+id)
  }
  
}
