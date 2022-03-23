import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RecruiterPageComponent } from './recruiter/recruiter-page/recruiter-page.component';
import { CandidateComponent } from './candidate/candidate.component';
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
 { path: 'candidate', component: CandidateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
