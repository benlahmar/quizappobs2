import { TestBed } from '@angular/core/testing';

import { FacadeStoreService } from './facade-store.service';

describe('FacadeStoreService', () => {
  let service: FacadeStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
