import { TestBed, inject } from '@angular/core/testing';

import { JobOffersService } from './job-offers.service';

describe('JobOffersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobOffersService]
    });
  });

  it('should be created', inject([JobOffersService], (service: JobOffersService) => {
    expect(service).toBeTruthy();
  }));
});
