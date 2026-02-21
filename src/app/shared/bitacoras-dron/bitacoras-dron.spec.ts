import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacorasDron } from './bitacoras-dron';

describe('BitacorasDron', () => {
  let component: BitacorasDron;
  let fixture: ComponentFixture<BitacorasDron>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitacorasDron]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitacorasDron);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
