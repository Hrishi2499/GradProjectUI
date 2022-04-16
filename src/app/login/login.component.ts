import { Component, OnInit } from '@angular/core';
import {SocialAuthService} from 'angularx-social-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialUser,GoogleLoginProvider } from 'angularx-social-login';
import {Router} from '@angular/router';
import { User } from '../user';
import { UserloginService } from '../userlogin.service';
import { HttpClient } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myimage:string="assets/images/acco.jpg";
  userModel=new User();
  SocialUser!:SocialUser;
  result:any;
  data: any;
  constructor(private socialAuthService:SocialAuthService,
    private router:Router,private loginservice:UserloginService,
    private http:HttpClient) { }

   
  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.SocialUser=user;
      console.log(this.SocialUser);
  });
  let response=this.http.get("http://localhost:8080/login");
  response.subscribe((data)=>
  {
 this.result=data;
  });
}
response1:any;
  signingoogle():any{
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>
    {
      this.userModel.mail=data.email;
      localStorage.setItem('google_auth',JSON.stringify(data));
      this.loginservice.loginuser1(this.userModel).subscribe(data=>
        {
    this.response1=data;
    
    console.log(data);
if(this.response1.designation=="Interviewer")
{
  this.router.navigateByUrl('/navbar');
      }
      else {
        this.router.navigateByUrl('/recruiterPage');
      }
      this.loginservice.setempId(this.response1);
        }); 
  });
 }
  response:any;
  loginn():any
  {
  let res= this.loginservice.loginuser(this.userModel);
  res.subscribe(data=>
    {
      localStorage.setItem('manual',JSON.stringify(data));
      this.response=data;
      console.log(this.response.designation);
    
      if (this.response.designation=="Interviewer")
      {
      this.router.navigateByUrl('/addskill');
      }
      else{
        this.router.navigateByUrl('/recruiterPage');
      }
      console.log("abs");
      this.loginservice.setempId(this.response);
    console.log(data)
      console.log("response received")
    },
      error=>alert("Invalid Credential")
    )
  }
}

 
