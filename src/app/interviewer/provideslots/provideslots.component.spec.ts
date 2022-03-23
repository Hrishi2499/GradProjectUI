import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideslotsComponent } from './provideslots.component';

describe('ProvideslotsComponent', () => {
  let component: ProvideslotsComponent;
  let fixture: ComponentFixture<ProvideslotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvideslotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
