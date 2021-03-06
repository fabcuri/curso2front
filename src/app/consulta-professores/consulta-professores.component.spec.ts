import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaProfessoresComponent } from './consulta-professores.component';

describe('ConsultaProfessoresComponent', () => {
  let component: ConsultaProfessoresComponent;
  let fixture: ComponentFixture<ConsultaProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaProfessoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
