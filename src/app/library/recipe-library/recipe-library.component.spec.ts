import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeLibraryComponent } from './recipe-library.component';

describe('RecipeLibraryComponent', () => {
  let component: RecipeLibraryComponent;
  let fixture: ComponentFixture<RecipeLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeLibraryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
