import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Skill } from './skill';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
    
  private baseUrl = 'http://localhost:8080/skill';  
  
  constructor(private http:HttpClient) { }

  getSkillList(EmpId: number)
  {  
    var params = new HttpParams({
      fromObject: {
        eid:EmpId
       }
    });
    return this.http.get(this.baseUrl,{params});  
  }  
  
  createSkill(skill: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`, skill);  
  }  
  
}
