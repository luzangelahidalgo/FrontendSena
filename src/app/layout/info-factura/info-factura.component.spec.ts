import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFacturaComponent } from './info-factura.component';

describe('InfoFacturaComponent', () => {
  let component: InfoFacturaComponent;
  let fixture: ComponentFixture<InfoFacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoFacturaComponent]
    });
    fixture = TestBed.createComponent(InfoFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
