import { TestBed } from '@angular/core/testing';

import { GlucoseReadingService } from './glucose-service.service';

describe('GlucoseServiceService', () => {
  let service: GlucoseReadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlucoseReadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
