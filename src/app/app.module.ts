import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, disableDebugTools } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialAuthServiceConfig } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecruiterPageComponent } from './recruiter/recruiter-page/recruiter-page.component';
import { SlotListComponent } from './slot-list/slot-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RecruiterPageComponent,
    SlotListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule

  ],
  providers: [
     {
       provide: 'SocialAuthServiceConfig',
       useValue:{
         autoLogin:false,
         providers:[
           {
         id:GoogleLoginProvider.PROVIDER_ID,
     provider: new GoogleLoginProvider('83543366834-7d4b1kqg03an3uap1mrq8nmg8ou06gkg.apps.googleusercontent.com')
            },
          ],
       } as SocialAuthServiceConfig,
     },
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
