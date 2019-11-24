import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCompletedComponent } from './lesson-completed.component';

describe('LessonCompletedComponent', () => {
  let component: LessonCompletedComponent;
  let fixture: ComponentFixture<LessonCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
