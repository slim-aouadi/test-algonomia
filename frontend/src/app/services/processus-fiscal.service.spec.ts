import { TestBed } from '@angular/core/testing';

import { ProcessusFiscalService } from './processus-fiscal.service';

describe('ProcessusFiscalService', () => {
  let service: ProcessusFiscalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessusFiscalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
