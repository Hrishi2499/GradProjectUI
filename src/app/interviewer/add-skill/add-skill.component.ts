// import { Component, ViewChild } from '@angular/core';
// import {NgForm} from '@angular/forms';

// @Component({
//   selector: 'app-add-skill',
//   templateUrl: './add-skill.component.html',
//   styleUrls: [ './add-skill.component.scss']
// }) 

// export class AddSkillComponent {

//   constructor() { }

//   formData = [];
//   @ViewChild('f') Forms: NgForm;
//   skillType = ['primarySkill', 'secondarySkill', 'otherSkill']
//   user = {
//     skillName: "",
//     experience: "",
//     skillType: "",
//   }

//   submitted = false;

//   onSubmit() {
//     this.submitted = true;
//     this.formData.push(this.Forms.value)
//     console.log(this.formData)
//     this.Forms.reset();

//   }
// }
// 
import { Component, Input, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Skill } from 'src/app/skill';
import { SkillService } from 'src/app/skill.service';
import { LoginComponent } from 'src/app/login/login.component';
import { User } from 'src/app/user';
import { UserloginService } from 'src/app/userlogin.service';
 
@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: [ './add-skill.component.scss']
})
 
export class AddSkillComponent {
  constructor(private skillservice:SkillService,private logindet:UserloginService) {
  }
  skills : Skill=new Skill();
 
  userdata: User=new User();
  formData = [];
  @ViewChild('f') Forms: NgForm;
  skillType = [
    'primarySkill',
    'secondarySkill',
    'otherSkill'
  ]
  user = {
    skillName: "",
    experience: "",
    skillType: ""
  }
  counter = 0
  submitted = false;
  posts:any;
  onSubmit() {
    this.submitted = true;
    this.formData.push(this.Forms.value)
    this.skills.skill_name=this.formData[this.counter].skillName
    this.skills.skill_type=this.formData[this.counter].skillType
    this.skills.experience=Number(this.formData[this.counter].experience)
    this.userdata=this.logindet.getempId();
    this.skills.employeeID=this.userdata;
   // console.log(this.skills.employeeID.id)
    this.skillservice.createSkill(this.skills).subscribe(data => console.log(data), error => console.log(error));  
    this.skills = new Skill();  
    this.Forms.reset();
    this.counter++;
  }
 
  ngOnInit() {  
  //  this.skills.employeeID=this.logindet.getempId()
  // console.log(this.skills.employeeID.id)
   // console.log(this.logindet.getempId())
    this.userdata=this.logindet.getempId();
    this.skillservice.getSkillList(this.userdata.id).subscribe(
      (response) => { this.posts=response; },
      (error) => { console.log(error); });  
  }
}
 

