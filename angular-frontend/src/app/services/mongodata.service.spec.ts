import { TestBed } from '@angular/core/testing';

import { MongodataService } from './mongodata.service';

describe('MongodataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MongodataService = TestBed.get(MongodataService);
    expect(service).toBeTruthy();
  });
});
