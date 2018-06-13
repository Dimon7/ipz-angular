import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectWindowComponent } from './subject-window.component';

describe('SubjectWindowComponent', () => {
  let component: SubjectWindowComponent;
  let fixture: ComponentFixture<SubjectWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
