import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCategoriesComponent } from './lesson-categories.component';

describe('LessonCategoriesComponent', () => {
  let component: LessonCategoriesComponent;
  let fixture: ComponentFixture<LessonCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
