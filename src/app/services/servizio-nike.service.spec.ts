import { TestBed } from '@angular/core/testing';

import { ServizioNikeService } from './servizio-nike.service';

describe('ServizioNikeService', () => {
  let service: ServizioNikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizioNikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
