import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {MatDatepickerModule} from '@angular/material/datepicker';
/*import {MatNativeDaterModule} from '@angular/material/datepicker';*/
import {MatFormFieldModule} from '@angular/material/form-field';







import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { DummyComponent } from './dummy/dummy.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProvideslotsComponent } from './provideslots/provideslots.component';
import { EditskillsComponent } from './editskills/editskills.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    ProvideslotsComponent,
    EditskillsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    FormsModule, 
  ReactiveFormsModule,
  MatDatepickerModule,
  MatButtonModule,
  MatFormFieldModule
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

