import { TestBed } from '@angular/core/testing';

import { VinculaArquitetoService } from './vincula-arquiteto.service';

describe('VinculaArquitetoService', () => {
  let service: VinculaArquitetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinculaArquitetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
