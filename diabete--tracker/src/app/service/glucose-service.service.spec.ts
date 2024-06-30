import { TestBed } from '@angular/core/testing';

import { GlucoseServiceService } from './glucose-service.service';

describe('GlucoseServiceService', () => {
  let service: GlucoseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlucoseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
