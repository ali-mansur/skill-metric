/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserListServiceService } from './user-list-service.service';

describe('Service: UserListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserListServiceService]
    });
  });

  it('should ...', inject([UserListServiceService], (service: UserListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
