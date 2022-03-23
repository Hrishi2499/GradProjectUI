import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  posts : any;
  display=false;
  sDate='';
  eDate='';
  constructor(private configService: ConfigService) { }
  ngOnInit() {
  }
  
  onClickSubmit(data: { startDate: any; endDate:any; }) {
    this.sDate=data.startDate;
    this.eDate=data.endDate;
    console.log(this.sDate);
    console.log(this.eDate);
    this.configService.getPosts(this.sDate,this.eDate).subscribe(
      (response) => { this.posts = response; },
      (error) => { console.log(error); });
    this.display=true;
  }
}
