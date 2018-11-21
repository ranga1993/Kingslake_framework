import { TestBed } from '@angular/core/testing';

import { MongoatlasdataService } from './mongoatlasdata.service';

describe('MongoatlasdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MongoatlasdataService = TestBed.get(MongoatlasdataService);
    expect(service).toBeTruthy();
  });
});
