/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { eventService } from './event.service';

describe('eventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [eventService]
    });
  });

  it('should ...', inject([eventService], (service: eventService) => {
    expect(service).toBeTruthy();
  }));
});
