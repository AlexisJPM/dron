import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronesCreados } from './drones-creados';

describe('DronesCreados', () => {
  let component: DronesCreados;
  let fixture: ComponentFixture<DronesCreados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DronesCreados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DronesCreados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
