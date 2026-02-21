import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionDron } from './creacion-dron';

describe('CreacionDron', () => {
  let component: CreacionDron;
  let fixture: ComponentFixture<CreacionDron>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionDron]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionDron);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
