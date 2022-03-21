import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userDetails:any;
  constructor() { }

  ngOnInit(): void {
    const storage=localStorage.getItem('google_auth');
    if(storage)
    {
      this.userDetails=JSON.parse(storage);
    }
    else{
      this.out();
    }
  }
  out():void{
    localStorage.removeItem('google_auth');
  }

}
