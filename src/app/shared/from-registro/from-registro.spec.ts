import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromRegistro } from './from-registro';

describe('FromRegistro', () => {
  let component: FromRegistro;
  let fixture: ComponentFixture<FromRegistro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromRegistro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromRegistro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
