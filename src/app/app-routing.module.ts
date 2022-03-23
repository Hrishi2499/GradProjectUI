import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RecruiterPageComponent } from './recruiter/recruiter-page/recruiter-page.component';
import { CandidateComponent } from './candidate/candidate.component';
import { NavbarComponent } from './interviewer/navbar/navbar.component';
import { ProvideslotsComponent } from './interviewer/provideslots/provideslots.component';
//import { IncentivesComponent } from './interviewer/incentives/incentives.component';
import { IncentivesComponent } from './interviewer/incentives/incentives.component';
import { ViewslotsComponent } from './interviewer/viewslots/viewslots.component';
const routes: Routes = [
 {
   path:'',redirectTo:'login',pathMatch:'full'
 },
 {

   path:'login',component:LoginComponent
 },
 {
   path:'dashboard',component:DashboardComponent
 },
 {
   path: 'recruiterPage', component: RecruiterPageComponent
 },
 { path: 'candidate', component: CandidateComponent},
 { path: 'navbar',component: NavbarComponent},
 { path:'provideslots',component: ProvideslotsComponent},
{ path:'incentives',component: IncentivesComponent},
{ path:'viewslots',component:ViewslotsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
