import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAlunosComponent } from './consulta-alunos.component';

describe('ConsultaAlunosComponent', () => {
  let component: ConsultaAlunosComponent;
  let fixture: ComponentFixture<ConsultaAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaAlunosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
