import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInsertElementComponent } from './modal-insert-element.component';

describe('ModalInsertElementComponent', () => {
  let component: ModalInsertElementComponent;
  let fixture: ComponentFixture<ModalInsertElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInsertElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInsertElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
