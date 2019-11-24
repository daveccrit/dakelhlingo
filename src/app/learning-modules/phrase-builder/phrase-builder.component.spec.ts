import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseBuilderComponent } from './phrase-builder.component';

describe('PhraseBuilderComponent', () => {
  let component: PhraseBuilderComponent;
  let fixture: ComponentFixture<PhraseBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
