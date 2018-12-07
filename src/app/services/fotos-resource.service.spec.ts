import { TestBed } from '@angular/core/testing';

import { FotosResourceService } from './fotos-resource.service';

describe('FotosResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FotosResourceService = TestBed.get(FotosResourceService);
    expect(service).toBeTruthy();
  });
});
