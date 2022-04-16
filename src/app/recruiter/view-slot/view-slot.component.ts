import { Component, OnInit } from '@angular/core';
import { ngxCsv } from 'ngx-csv';
import { SlotserviceService } from './service/slotservice.service';
 
@Component({
  selector: 'app-view-slot',
  templateUrl: './view-slot.component.html',
  styleUrls: ['./view-slot.component.scss']
})
export class ViewSlotComponent implements OnInit {
 
  users=[] as any;
  columns=["Inter_id","date1","tilltime","fromtime"];
  index=["Inter_id","date1","tilltime","fromtime"];
 
  constructor( private slotdata: SlotserviceService ) {
    slotdata.allAvailableSlot().subscribe((data)=>{
      let d=new Date();
      let m=d.getMonth();
 
      for(let i=0;i<Object.keys(data).length;i++)
        {
          //if(data[i].date1=d)
           console.log(parseInt(data[i].Inter_id));
 
            let tempMonth=parseInt(data[i].date1[5])*10+parseInt(data[i].date1[6]);
            console.log(tempMonth+" "+m);
            if(m+1<=tempMonth)
            {
              this.users.push(data[i]);
              //console.log(data[i]);
            }          
        }
    });
  }
  fileDownload(){
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Interviewer',
      useBom: true,
      headers: ["Inter_id","date1","tilltime","fromtime"]
    };
  
    new ngxCsv(this.users, "interviewer-data", options);
  }
 
  ngOnInit(): void {
  }
 
}
