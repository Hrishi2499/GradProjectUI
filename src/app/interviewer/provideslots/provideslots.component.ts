

import {Component,OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-provideslots',
  templateUrl: './provideslots.component.html',
  styleUrls: ['./provideslots.component.scss']
})
export class ProvideslotsComponent {
  constructor() { }

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
      
  }

}









