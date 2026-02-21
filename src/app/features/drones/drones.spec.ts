import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drones } from './drones';

describe('Drones', () => {
  let component: Drones;
  let fixture: ComponentFixture<Drones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Drones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Drones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
