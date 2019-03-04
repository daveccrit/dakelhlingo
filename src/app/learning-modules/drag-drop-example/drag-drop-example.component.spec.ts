import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropExampleComponent } from './drag-drop-example.component';

describe('DragDropExampleComponent', () => {
  let component: DragDropExampleComponent;
  let fixture: ComponentFixture<DragDropExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
