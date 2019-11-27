import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryLibraryComponent } from './story-library.component';

describe('StoryLibraryComponent', () => {
  let component: StoryLibraryComponent;
  let fixture: ComponentFixture<StoryLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
