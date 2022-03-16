import { DummyComponent } from './dummy/dummy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditskillsComponent } from './editskills/editskills.component';
import { ProvideslotsComponent } from './provideslots/provideslots.component';

const routes: Routes = [
  { path: 'INTERVIEWS TAKEN', component: DummyComponent },
  { path: 'INCENTIVES', component: DummyComponent },
  { path: 'EDIT SKILLS', component: EditskillsComponent },
  { path: 'PROVIDE SLOTS', component: ProvideslotsComponent },
  { path: 'VIEW SLOTS', component: DummyComponent},
  { path: 'LOGOUT', component: DummyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
