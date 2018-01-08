import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTop5Component } from './event-top5.component';

describe('EventTop5Component', () => {
  let component: EventTop5Component;
  let fixture: ComponentFixture<EventTop5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTop5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTop5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
