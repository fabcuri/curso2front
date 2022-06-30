import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAlunosComponent } from './edita-alunos.component';

describe('EditaAlunosComponent', () => {
  let component: EditaAlunosComponent;
  let fixture: ComponentFixture<EditaAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaAlunosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
