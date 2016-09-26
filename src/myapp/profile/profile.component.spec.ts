/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';

describe('Component: Profile', () => {

	var component;

	beforeAll(function() {
	    component = new ProfileComponent();
		
	});	

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have a user Object', () => {
    if(expect(component.user).toBeDefined()){
      component.user = {
        name: "Mansur",
        department: "UI/UX",
        designation: "Senior UI Developer"
      }
    }
    
  });

  it('should have name property in user Object', () => {
    expect(component.user.name).toBeDefined();
  });

  it('should have department property in user Object', () => {
    expect(component.user.department).toBeDefined();
  });

  it('should have designation property in user Object', () => {
    expect(component.user.designation).toBeDefined();
  });

  it('user.name should not have undefined or empty string as a value', () => {
    expect(component.user.name).not.toEqual(undefined);
    expect(component.user.name).not.toEqual("");
  });

});
