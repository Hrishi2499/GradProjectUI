import { Component, OnInit } from '@angular/core';
import {SlotsService} from './services/slots.service';
@Component({
  selector: 'app-viewslot',
  templateUrl: './viewslots.component.html',
  styleUrls: ['./viewslots.component.scss']
})
export class ViewslotsComponent implements OnInit {

 // users:any;
  //columns=["Date","Time","Id","Round"];
  users=[];
  
    columns=["Date","From","Till"];
  index=["date1","fromtime","tilltime"];
  //index=["Date","Time","Id","Round"];
  constructor(private slotData:SlotsService ) { 
    slotData.slots().subscribe((data)=>{
      let d=new Date();
      let m=d.getMonth();
      //console.log(m+1);
      // console.log(data[0].date1);
      // console.log(Object.keys(data).length);
      let r=JSON.parse(localStorage.getItem("manual"));
    

      for(let i=0;i<Object.keys(data).length;i++)
        {
          //if(data[i].date1=d)
           // console.log(data[i].date1);

            let tempMonth=parseInt(data[i].date1[5])*10+parseInt(data[i].date1[6]);
            console.log(tempMonth+" "+m);
            if(m+1==tempMonth && r.id==data[i].employeeID)
            {
              this.users.push(data[i]);
              //console.log(data[i]);
            }
            

            
        }

     // if(m==date[0])
      //this.users=data;
      
    });
    //console.log(this.users);
  }
  

  ngOnInit(): void {
  }

}
