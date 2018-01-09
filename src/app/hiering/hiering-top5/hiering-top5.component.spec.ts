import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HieringTop5Component } from './hiering-top5.component';

describe('HieringTop5Component', () => {
  let component: HieringTop5Component;
  let fixture: ComponentFixture<HieringTop5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HieringTop5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HieringTop5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
