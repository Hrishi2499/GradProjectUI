import { Component, OnInit } from '@angular/core';
import {SlotsService} from './services/slots.service';
@Component({
  selector: 'app-viewslot',
  templateUrl: './viewslots.component.html',
  styleUrls: ['./viewslots.component.scss']
})
export class ViewslotsComponent implements OnInit {

  users:any;
  columns=["Date","Time","Id","Round"];
  index=["Date","Time","Id","Round"];
  constructor(private slotData:SlotsService ) { 
    slotData.slots().subscribe((data)=>{
      
      this.users=data;
    });
  }

  ngOnInit(): void {
  }

}
