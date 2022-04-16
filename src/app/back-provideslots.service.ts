import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackProvideslotsService {

  constructor(private http:HttpClient) { }

  public slotprovide(provide)
  {
    
     console.log(provide);
    // console.log(provide.employeeID);
    // console.log(provide.tilltime);
    // console.log(provide.fromtime);
    // console.log(typeof provide.employeeID);

    return this.http.post("http://localhost:8080/saveSlot",provide,{responseType:'text' as 'json'});
  }
}
