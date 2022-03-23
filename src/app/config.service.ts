import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private url = 'https://api.turbohire.co/api/analytics/evaluations';
  

  constructor(private http: HttpClient) { }
  getPosts(sDate:any ,eDate: any) {
    var params = new HttpParams({
      fromObject: {
      startDate: sDate,
      endDate: eDate
     }
      });
      
    var headers = new HttpHeaders({'X-Api-Key': '1E150160-9BC1-45B8-AC65-30700B8BC8F9'});
    return this.http.get(this.url, { params, headers } );
  }
}
