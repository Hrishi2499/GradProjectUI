

import {Component,OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BackProvideslotsService } from 'src/app/back-provideslots.service';
import { Provide } from 'src/app/provide';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';



@Component({
  selector: 'app-provideslots',
  templateUrl: './provideslots.component.html',
  styleUrls: ['./provideslots.component.scss']
})
export class ProvideslotsComponent {
  
  alert:boolean=false;
 // provide:Provide=new Provide();
  provide:Provide=new Provide("","","",0);
  

  message:any;
  // validform;
  // Date:any;
  // Till:any;
  // From:any;
  addresto=new FormGroup({
    Date: new FormControl(''),
    From: new FormControl(''),
    Till: new FormControl('')

  })
  constructor(private service:BackProvideslotsService) { }
  // function myfun()
  // {
  //   let a=document.getElementById("inter").value;
  //   let b=document.getElementById("tim").value;
  //   let c=document.getElementById("tim1").value;
  
  //   if(a==" "||b==" "||c==" ")
  //   {
  //     document.getElementById("mess").innerHTML="*All fields are required";
  //     return false;
  //   }
  
  //   alert("yes, there has been an issue");
  
  // }
  flag;
  ngOnInit(): void {
    
    let FromDate=new Date();
    let TillDate=new Date();
      
      FromDate.setDate(FromDate.getDate()+15);
      TillDate.setDate(TillDate.getDate()+30);

      let day=FromDate.getDate();
      let month=FromDate.getMonth()+1;
      let year=FromDate.getUTCFullYear();
      console.log(day);

      let day1=TillDate.getDate();
      let month1=TillDate.getMonth()+1;
      let year1=TillDate.getUTCFullYear();
      let montha,daya,monthb,dayb;

      if(month<10)
       montha="0"+month;
      if(day<10)
       daya="0"+day;
      else
       daya=day;
     let e=year+"-"+montha+"-"+daya;
     console.log(e);

     if(month1<10)
       monthb="0"+month1;
      if(day1<10)
       dayb="0"+day1;
      else
       dayb=day1;
     let e1=year1+"-"+monthb+"-"+dayb;
     console.log(e1);


     document.getElementById("inter")?.setAttribute("max",e1);
     document.getElementById("inter")?.setAttribute("min",e);
    //  document.getElementById("inter1")?.setAttribute("max",e1);
    //   document.getElementById("inter1")?.setAttribute("min",e);
    // this.buildForm();
      
  }
  // buildForm()
  // {
  //   this.Date=new FormControl("",Validators.compose([Validators.required])),
  //   this.Till=new FormControl("",Validators.compose([Validators.required])),
  //   this.From=new FormControl("",Validators.compose([Validators.required]))

  // }

  public slotprovid()
  {
    this.flag=1;
    //this.provide.employeeID=localStorage.getItem("manual.id[0]");
    //console.log(localStorage.getItem("${manual}: ${id}"));

    console.log("date, " +this.provide.date1);
    console.log("fromtime, " +this.provide.fromtime);
    console.log("tilltime, " +this.provide.tilltime);
    console.log("before "+this.flag);

    if(this.provide.date1==='' &&this.provide.tilltime==='' &&this.provide.fromtime==='' )
      {
        alert("Please fill the fields");
        this.flag=0;
      }
      console.log("after "+this.flag);
      
    if(this.flag==1)
    {
      this.provide.fromtime=this.provide.fromtime+":00";
      this.provide.tilltime=this.provide.tilltime+":00";

    let r=JSON.parse(localStorage.getItem("manual"));
    this.provide.employeeID=r.id;
    console.log(r.id);
    console.log(this.provide.tilltime);
    let res=this.service.slotprovide(this.provide);

    // slotData.slots().subscribe((data)=>{
    //   let d=new Date();
    
     res.subscribe((data)=>this.message=data);
     //error=>alert("invalid credentials");
     

    this.alert=true;
    this.addresto.reset({})}
    

  }
  

  public closeAlert()
  {
    this.alert=false;
  }

  
     


}









