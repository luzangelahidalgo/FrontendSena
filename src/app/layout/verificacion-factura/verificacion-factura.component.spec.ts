import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionFacturaComponent } from './verificacion-factura.component';

describe('VerificacionFacturaComponent', () => {
  let component: VerificacionFacturaComponent;
  let fixture: ComponentFixture<VerificacionFacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificacionFacturaComponent]
    });
    fixture = TestBed.createComponent(VerificacionFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
