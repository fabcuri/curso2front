import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraProfessoresComponent } from './cadastra-professores.component';

describe('CadastraProfessoresComponent', () => {
  let component: CadastraProfessoresComponent;
  let fixture: ComponentFixture<CadastraProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraProfessoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
