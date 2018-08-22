import { TestBed, inject } from '@angular/core/testing';

import { Dynamicelement3Service } from './dynamicelement3.service';

describe('Dynamicelement3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dynamicelement3Service]
    });
  });

  it('should be created', inject([Dynamicelement3Service], (service: Dynamicelement3Service) => {
    expect(service).toBeTruthy();
  }));
});
