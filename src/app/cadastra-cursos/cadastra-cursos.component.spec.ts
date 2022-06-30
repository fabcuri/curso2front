import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraCursosComponent } from './cadastra-cursos.component';

describe('CadastraCursosComponent', () => {
  let component: CadastraCursosComponent;
  let fixture: ComponentFixture<CadastraCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
