import { TestBed } from '@angular/core/testing';

import { DescuentoService } from './descuento.service';

describe('DescuentoService', () => {
  let descuentoService: DescuentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    descuentoService = TestBed.inject(DescuentoService);
  });

  it('should be created', () => {
    expect(descuentoService).toBeTruthy();
  });
});
