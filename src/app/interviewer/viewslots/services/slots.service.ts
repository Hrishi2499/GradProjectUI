import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SlotsService {

  //url="https://mocki.io/v1/ba546da3-3644-416a-8a8e-754066716c58";
  url="http://localhost:8080"
  constructor(private http:HttpClient) { }
  slots()
  {
    return this.http.get(this.url + '/getAllinterviewers');
  }

}

