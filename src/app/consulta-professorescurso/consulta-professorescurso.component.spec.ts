import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaProfessorescursoComponent } from './consulta-professorescurso.component';

describe('ConsultaProfessorescursoComponent', () => {
  let component: ConsultaProfessorescursoComponent;
  let fixture: ComponentFixture<ConsultaProfessorescursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaProfessorescursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaProfessorescursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
