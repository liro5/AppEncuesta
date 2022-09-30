import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEncuestaComponent } from './datos-encuesta.component';

describe('DatosEncuestaComponent', () => {
  let component: DatosEncuestaComponent;
  let fixture: ComponentFixture<DatosEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosEncuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
