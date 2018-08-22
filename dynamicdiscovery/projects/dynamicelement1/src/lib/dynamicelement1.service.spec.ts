import { TestBed, inject } from '@angular/core/testing';

import { Dynamicelement1Service } from './dynamicelement1.service';

describe('Dynamicelement1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dynamicelement1Service]
    });
  });

  it('should be created', inject([Dynamicelement1Service], (service: Dynamicelement1Service) => {
    expect(service).toBeTruthy();
  }));
});
