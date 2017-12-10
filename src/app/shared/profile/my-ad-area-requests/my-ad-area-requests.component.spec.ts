import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdAreaRequestsComponent } from './my-ad-area-requests.component';

describe('MyAdAreaRequestsComponent', () => {
  let component: MyAdAreaRequestsComponent;
  let fixture: ComponentFixture<MyAdAreaRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAdAreaRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdAreaRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
