import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaCursosComponent } from './edita-cursos.component';

describe('EditaCursosComponent', () => {
  let component: EditaCursosComponent;
  let fixture: ComponentFixture<EditaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
