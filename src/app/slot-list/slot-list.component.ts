import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-slot-list',
  styleUrls: ['slot-list.component.css'],
  templateUrl: 'slot-list.component.html',
})
export class SlotListComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'slotStart',
    'slotStartTime',
    'slotEndTime',
  ];
  dataSource = new MatTableDataSource<slot>(slotHRView);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface slot {
  id: number;
  name: string;
  slotStart: Date;
  slotEnd: Date;
}
const slotHRView: slot[] = [
  {
    id: 1,
    name: 'Raj',
    slotStart: new Date('2021-07-01T12:00:00'),
    slotEnd: new Date('2021-07-01T12:30:00'),
  },
  {
    id: 2,
    name: 'Raj2',
    slotStart: new Date('2021-07-02T12:00:00'),
    slotEnd: new Date('2021-07-02T12:30:00'),
  },
  {
    id: 3,
    name: 'Raj3',
    slotStart: new Date('2021-07-03T12:00:00'),
    slotEnd: new Date('2021-07-03T12:30:00'),
  },
  {
    id: 4,
    name: 'Raj4',
    slotStart: new Date('2021-07-04T12:00:00'),
    slotEnd: new Date('2021-07-04T12:30:00'),
  },
  {
    id: 5,
    name: 'Raj5',
    slotStart: new Date('2021-07-05T12:00:00'),
    slotEnd: new Date('2021-07-05T12:30:00'),
  },
  {
    id: 6,
    name: 'Raj',
    slotStart: new Date('2021-07-06T12:00:00'),
    slotEnd: new Date('2021-07-06T12:30:00'),
  },
  {
    id: 7,
    name: 'Raj7',
    slotStart: new Date('2021-07-07T12:00:00'),
    slotEnd: new Date('2021-07-07T12:30:00'),
  },
  {
    id: 8,
    name: 'Raj8',
    slotStart: new Date('2021-08-01T12:00:00'),
    slotEnd: new Date('2021-08-01T12:30:00'),
  },
  {
    id: 9,
    name: 'Raj9',
    slotStart: new Date('2021-07-09T12:00:00'),
    slotEnd: new Date('2021-07-09T12:30:00'),
  },
];