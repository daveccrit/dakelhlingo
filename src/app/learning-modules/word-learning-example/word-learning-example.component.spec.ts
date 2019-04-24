import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordLearningExampleComponent } from './word-learning-example.component';

describe('WordLearningPlaceholderComponent', () => {
  let component: WordLearningExampleComponent;
  let fixture: ComponentFixture<WordLearningExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordLearningExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordLearningExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
