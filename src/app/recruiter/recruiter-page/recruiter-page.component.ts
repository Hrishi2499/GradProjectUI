import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-recruiter-page',
  templateUrl: './recruiter-page.component.html',
  styleUrls: ['./recruiter-page.component.scss']
})
export class RecruiterPageComponent implements OnInit {

  constructor(private router:Router) { }
public userDetails:any;
  ngOnInit(): void {
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
  }

logout()
{
  this.router.navigateByUrl('/login');
}
}
