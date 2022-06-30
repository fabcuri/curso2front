import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAlunosturmaComponent } from './consulta-alunosturma.component';

describe('ConsultaAlunosturmaComponent', () => {
  let component: ConsultaAlunosturmaComponent;
  let fixture: ComponentFixture<ConsultaAlunosturmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaAlunosturmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAlunosturmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
