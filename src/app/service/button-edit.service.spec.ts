import { TestBed } from '@angular/core/testing';

import { ButtonEditService } from './button-edit.service';

describe('ButtonEditService', () => {
  let service: ButtonEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
