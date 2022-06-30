import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraAlunosComponent } from './cadastra-alunos.component';

describe('CadastraAlunosComponent', () => {
  let component: CadastraAlunosComponent;
  let fixture: ComponentFixture<CadastraAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraAlunosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
