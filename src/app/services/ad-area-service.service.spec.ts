import { TestBed, inject } from '@angular/core/testing';

import { AdAreaServiceService } from './ad-area-service.service';

describe('AdAreaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdAreaServiceService]
    });
  });

  it('should be created', inject([AdAreaServiceService], (service: AdAreaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
