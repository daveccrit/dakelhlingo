import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseLearningComponent } from './phrase-learning.component';

describe('PhraseLearningComponent', () => {
  let component: PhraseLearningComponent;
  let fixture: ComponentFixture<PhraseLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
