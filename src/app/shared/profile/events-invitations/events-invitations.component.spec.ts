import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInvitationsComponent } from './events-invitations.component';

describe('EventsInvitationsComponent', () => {
  let component: EventsInvitationsComponent;
  let fixture: ComponentFixture<EventsInvitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsInvitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
