import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxedContentCallsComponent } from './boxed-content-calls.component';

describe('BoxedContentCallsComponent', () => {
  let component: BoxedContentCallsComponent;
  let fixture: ComponentFixture<BoxedContentCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxedContentCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxedContentCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
