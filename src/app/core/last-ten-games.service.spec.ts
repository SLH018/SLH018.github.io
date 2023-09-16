import { TestBed } from '@angular/core/testing';

import { LastTenGamesService } from './last-ten-games.service';

describe('LastTenGamesService', () => {
  let service: LastTenGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastTenGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
