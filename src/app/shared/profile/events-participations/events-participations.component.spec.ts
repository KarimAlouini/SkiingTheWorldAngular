import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsParticipationsComponent } from './events-participations.component';

describe('EventsParticipationsComponent', () => {
  let component: EventsParticipationsComponent;
  let fixture: ComponentFixture<EventsParticipationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsParticipationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsParticipationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
