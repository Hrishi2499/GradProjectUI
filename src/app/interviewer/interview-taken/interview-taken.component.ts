
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Router } from '@angular/router';
import { Interviewhistory } from "src/app/interviewhistory";
//import { turboService } from "src/app/turbohireService";
 
@Component({
  selector: 'app-interview-taken',
  templateUrl: './interview-taken.component.html',
  styleUrls: ['./interview-taken.component.scss']
})
 
export class InterviewTakenComponent implements OnInit {
 
  interviewhistory: Interviewhistory[] = [];
 
  // columns we will show on the table
  public displayedColumns = ['RecordId', 'ApplicantName', 'ApplicantEmail', 'JobStage', 'EvaluationDateTime'];
 
  //the source where we will get the data
  public dataSource:any = new MatTableDataSource<Interviewhistory>();
 
  public userDetails:any;
  //dependency injection
  constructor(private http:HttpClient,private router:Router) { }
 
  ngOnInit() {
    const storage=localStorage.getItem('google_auth');
    if(storage)
    {
      this.userDetails=JSON.parse(storage);
    }
 
    const storag=localStorage.getItem('manual');
    if(storag)
    {
      this.userDetails=JSON.parse(storag);
    }
 
    //call this method on component load
    this.getinterviewhistoryInformation();
 
  }
 
  //This method returns students details
  getinterviewhistoryInformation() {
    let response=this.http.get('http://localhost:8080/turbohire/interviews/'+this.userDetails?.mail);
    response.subscribe((res) => {
        console.log(res);
        this.dataSource.data = res;
      })
  }
 
}
