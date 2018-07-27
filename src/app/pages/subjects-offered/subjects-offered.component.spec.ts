import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsOfferedComponent } from './subjects-offered.component';

describe('SubjectsOfferedComponent', () => {
  let component: SubjectsOfferedComponent;
  let fixture: ComponentFixture<SubjectsOfferedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsOfferedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
