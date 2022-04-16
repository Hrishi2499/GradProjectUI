import { TestBed } from '@angular/core/testing';

import { BackProvideslotsService } from './back-provideslots.service';

describe('BackProvideslotsService', () => {
  let service: BackProvideslotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackProvideslotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
