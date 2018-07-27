import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidRibbonComponent } from './mid-ribbon.component';

describe('MidRibbonComponent', () => {
  let component: MidRibbonComponent;
  let fixture: ComponentFixture<MidRibbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidRibbonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
