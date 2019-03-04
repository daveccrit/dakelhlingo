import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsLearningExampleComponent } from './words-learning-example.component';

describe('WordsLearningExampleComponent', () => {
  let component: WordsLearningExampleComponent;
  let fixture: ComponentFixture<WordsLearningExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsLearningExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsLearningExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
