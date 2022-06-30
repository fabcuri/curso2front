import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraTurmasComponent } from './cadastra-turmas.component';

describe('CadastraTurmasComponent', () => {
  let component: CadastraTurmasComponent;
  let fixture: ComponentFixture<CadastraTurmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraTurmasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
