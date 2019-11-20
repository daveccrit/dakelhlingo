import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideScrollImageSearchComponent } from './side-scroll-image-search.component';

describe('SideScrollImageSearchComponent', () => {
  let component: SideScrollImageSearchComponent;
  let fixture: ComponentFixture<SideScrollImageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideScrollImageSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideScrollImageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
