import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUsuariosComponent } from './formulario-usuarios.component';

describe('FormularioUsuariosComponent', () => {
  let component: FormularioUsuariosComponent;
  let fixture: ComponentFixture<FormularioUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioUsuariosComponent]
    });
    fixture = TestBed.createComponent(FormularioUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
