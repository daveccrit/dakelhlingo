import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordLibraryComponent } from './word-library.component';

describe('WordLibraryComponent', () => {
  let component: WordLibraryComponent;
  let fixture: ComponentFixture<WordLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
