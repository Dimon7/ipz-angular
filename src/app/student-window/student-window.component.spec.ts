import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWindowComponent } from './student-window.component';

describe('StudentWindowComponent', () => {
  let component: StudentWindowComponent;
  let fixture: ComponentFixture<StudentWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
