/* tslint:disable:no-unused-variable */
import { provide }    from '@angular/core';
import { TestBed, async, inject, addProviders } from '@angular/core/testing';
// import { SkillsserviceService } from './skillsservice.service';
import { SkillService } from './skills.service';
import { Http, Response, RequestMethod, BaseRequestOptions, ConnectionBackend, RequestOptions, RequestOptionsArgs} from '@angular/http';

import {MockBackend} from '@angular/http/testing';


describe('Service: Skillsservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillService, Http, MockBackend, ConnectionBackend, RequestOptions]
    });
  });

  it('testing a http service ...', inject([SkillService], (service: SkillService) => {
    expect(service).toBeTruthy();
    console.log(service);
  }));

});
