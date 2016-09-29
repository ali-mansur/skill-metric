/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyNewServiceService } from './my-new-service.service';

describe('Service: MyNewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyNewServiceService]
    });
  });

  it('should ...', inject([MyNewServiceService], (service: MyNewServiceService) => {
    expect(service).toBeTruthy();
  }));
});
