import { Injectable } from '@angular/core';

//import Interviewhistory interface
import {Interviewhistory} from "src/app/interviewhistory";

//import this to make http requests
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

//defined base url here in the env
import {environment} from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private httpClient: HttpClient) { }

  //This method returns students details
  getinterviewhistoryInformation(): Observable<Interviewhistory[]>{
    return this.httpClient.get<Interviewhistory[]>(`${environment.baseURL}interviewhistory.json`);
  }
}