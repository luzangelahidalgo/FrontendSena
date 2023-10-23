import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionFacturaComponent } from './aprobacion-factura.component';

describe('AprobacionFacturaComponent', () => {
  let component: AprobacionFacturaComponent;
  let fixture: ComponentFixture<AprobacionFacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprobacionFacturaComponent]
    });
    fixture = TestBed.createComponent(AprobacionFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
