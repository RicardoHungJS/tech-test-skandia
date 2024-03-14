import { TestBed } from '@angular/core/testing';

import { BringProductsService } from './bring-products.service';

describe('BringProductsService', () => {
  let service: BringProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BringProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
