import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSpellingComponent } from './word-spelling.component';

describe('WordSpellingComponent', () => {
  let component: WordSpellingComponent;
  let fixture: ComponentFixture<WordSpellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordSpellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordSpellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
