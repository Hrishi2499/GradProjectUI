import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, disableDebugTools } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialAuthServiceConfig } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecruiterPageComponent } from './recruiter/recruiter-page/recruiter-page.component';
import { SlotListComponent } from './slot-list/slot-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { CandidateComponent } from './candidate/candidate.component';
import { NavbarComponent } from './interviewer/navbar/navbar.component';
import { ProvideslotsComponent } from './interviewer/provideslots/provideslots.component';
import { IncentivesComponent } from './interviewer/incentives/incentives.component';
import { ViewslotsComponent } from './interviewer/viewslots/viewslots.component';
import { AddSkillComponent } from './interviewer/add-skill/add-skill.component';
import { InterviewTakenComponent } from './interviewer/interview-taken/interview-taken.component';
import { BackProvideslotsService } from './back-provideslots.service';
import { FilterComponent } from './filter/filter.component';
import { ViewSlotComponent } from './recruiter/view-slot/view-slot.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RecruiterPageComponent,
    SlotListComponent,
    CandidateComponent,
    NavbarComponent,
    ProvideslotsComponent,
    IncentivesComponent,
    ViewslotsComponent,
    AddSkillComponent,
    InterviewTakenComponent,
    FilterComponent,
    ViewSlotComponent,
    
    
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    ReactiveFormsModule
  ],

  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('83543366834-7d4b1kqg03an3uap1mrq8nmg8ou06gkg.apps.googleusercontent.com')
          },
        ],
      } as SocialAuthServiceConfig,

    },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
