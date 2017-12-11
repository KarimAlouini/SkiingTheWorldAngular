import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingListingComponent } from './lodging-listing.component';

describe('LodgingListingComponent', () => {
  let component: LodgingListingComponent;
  let fixture: ComponentFixture<LodgingListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgingListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
