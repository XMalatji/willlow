import { TestBed, inject } from '@angular/core/testing';

import { LookupDataService } from './lookup-data.service';

describe('LookupDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LookupDataService]
    });
  });

  it('should be created', inject([LookupDataService], (service: LookupDataService) => {
    expect(service).toBeTruthy();
  }));
});
