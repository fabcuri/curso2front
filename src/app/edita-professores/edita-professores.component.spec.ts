import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaProfessoresComponent } from './edita-professores.component';

describe('EditaProfessoresComponent', () => {
  let component: EditaProfessoresComponent;
  let fixture: ComponentFixture<EditaProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaProfessoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
