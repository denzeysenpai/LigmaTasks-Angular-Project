import { TestBed } from '@angular/core/testing';

import { DataAdapterService } from './data-adapter.service';

describe('DataAdapterService', () => {
  let service: DataAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
