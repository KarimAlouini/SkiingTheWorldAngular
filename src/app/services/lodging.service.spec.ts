import { TestBed, inject } from '@angular/core/testing';

import { LodgingService } from './lodging.service';

describe('EstablishmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LodgingService]
    });
  });

  it('should be created', inject([LodgingService], (service: LodgingService) => {
    expect(service).toBeTruthy();
  }));
});
