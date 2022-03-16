import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-editskills',
  templateUrl: './editskills.component.html',
  styleUrls: ['./editskills.component.css']
})
export class EditskillsComponent  {

  title = 'interview-sh';
  
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }
}

