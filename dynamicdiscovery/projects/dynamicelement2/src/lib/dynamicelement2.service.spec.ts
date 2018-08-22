import { TestBed, inject } from '@angular/core/testing';

import { Dynamicelement2Service } from './dynamicelement2.service';

describe('Dynamicelement2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dynamicelement2Service]
    });
  });

  it('should be created', inject([Dynamicelement2Service], (service: Dynamicelement2Service) => {
    expect(service).toBeTruthy();
  }));
});
