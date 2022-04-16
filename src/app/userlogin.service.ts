import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  empId:any;
  constructor(private httpClient:HttpClient) { }
  loginuser(user:User):Observable<object>{
console.log(user);
localStorage.setItem("id",this.getempId());
return this.httpClient.post("http://localhost:8080/loginuser",user);

      }

      loginuser1(user:User):Observable<object>{
        console.log(user);
        return this.httpClient.post("http://localhost:8080/loginuser1",user);
        
              }
              getempId(){
                return this.empId;
              }
              setempId(emp:any){
                this.empId=emp;
              }
}
