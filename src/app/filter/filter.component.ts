import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { List } from '../models/list';
 
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
 
export class FilterComponent implements OnInit {
 
  displayedColumns = ['Inter_id', 'date1', 'fromtime', 'tilltime'];
  exampleDatabase: DataService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  id: number;
 
  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public dataService: DataService) {}
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;
 
  ngOnInit() {
    this.loadData();
    console.log(this.loadData());
  }
 
  refresh() {
    this.loadData();
  }
 
 
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
 
 
 
  public loadData() {
    this.exampleDatabase = new DataService(this.httpClient);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}
 
export class ExampleDataSource extends DataSource<List> {
  _filterChange = new BehaviorSubject('');
 
  get filter(): string {
    return this._filterChange.value;
  }
 
  set filter(filter: string) {
    this._filterChange.next(filter);
  }
 
  filteredData: List[] = [];
  renderedData: List[] = [];
 
  constructor(public _exampleDatabase: DataService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }
 
  connect(): Observable<List[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];
 
    this._exampleDatabase.allAvailableSlot();
 
 
    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        this.filteredData = this._exampleDatabase.data.slice().filter((list: List) => {
          const searchStr = (list.Inter_id + list.fromtime+ list.date1).toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        });
 
        const sortedData = this.sortData(this.filteredData.slice());
 
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
        return this.renderedData;
      }
    ));
  }
 
  disconnect() {}
 
sortData(data: List[]): List[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }
 
    return data.sort((a, b) => {
      let propertyA: number | string | Date = '';
      let propertyB: number | string | Date = '';
 
      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.Inter_id, b.Inter_id]; break;
        case 'date1': [propertyA, propertyB] = [a.date1, b.date1]; break;
        case 'fromtime': [propertyA, propertyB] = [a.fromtime, b.fromtime]; break;
        case 'updated_at': [propertyA, propertyB] = [a.tilltime, b.tilltime]; break;
      }
 
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
 
      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
 
}
 
 
