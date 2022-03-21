import { Component, OnInit } from '@angular/core';
import {SocialAuthService} from 'angularx-social-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialUser,GoogleLoginProvider } from 'angularx-social-login';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myimage:string="assets/images/acco.jpg";
  SocialUser!:SocialUser;
  constructor(private socialAuthService:SocialAuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.SocialUser=user;
      console.log(this.SocialUser);
  });
}
  signingoogle():any{
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>
    {
      localStorage.setItem('google_auth',JSON.stringify(data));
    this.router.navigateByUrl('/dashboard');
  });
 }
}
