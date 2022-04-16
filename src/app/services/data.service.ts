import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {List} from '../models/list';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
 
@Injectable()
 
export class DataService {
  private readonly API_URL = 'http://localhost:8080';
 
  dataChange: BehaviorSubject<List[]> = new BehaviorSubject<List[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
 
  constructor (private httpClient: HttpClient) {}
 
  get data(): List[] {
    return this.dataChange.value;
  }
 
  getDialogData() {
    return this.dialogData;
  }
 
  /** CRUD METHODS */
  allAvailableSlot(): void {
    this.httpClient.get<List[]>(this.API_URL+ '/getAllSlotList').subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }
 
}
