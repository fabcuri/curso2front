import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaTurmasComponent } from './edita-turmas.component';

describe('EditaTurmasComponent', () => {
  let component: EditaTurmasComponent;
  let fixture: ComponentFixture<EditaTurmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaTurmasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
