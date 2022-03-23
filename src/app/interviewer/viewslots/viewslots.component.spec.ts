import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewslotsComponent } from './viewslots.component';

describe('ViewslotsComponent', () => {
  let component: ViewslotsComponent;
  let fixture: ComponentFixture<ViewslotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewslotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
