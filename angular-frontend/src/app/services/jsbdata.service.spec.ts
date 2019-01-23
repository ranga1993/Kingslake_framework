import { TestBed } from '@angular/core/testing';

import { JsbdataService } from './jsbdata.service';

describe('JsbdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsbdataService = TestBed.get(JsbdataService);
    expect(service).toBeTruthy();
  });
});
