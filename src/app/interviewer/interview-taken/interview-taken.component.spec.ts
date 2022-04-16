import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewTakenComponent } from './interview-taken.component';

describe('InterviewTakenComponent', () => {
  let component: InterviewTakenComponent;
  let fixture: ComponentFixture<InterviewTakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewTakenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
