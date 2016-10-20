/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SkillMatrixProfileServiceService } from './skill-matrix-profile-service.service';

describe('Service: SkillMatrixProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillMatrixProfileServiceService]
    });
  });

  it('should ...', inject([SkillMatrixProfileServiceService], (service: SkillMatrixProfileServiceService) => {
    expect(service).toBeTruthy();
  }));
});
