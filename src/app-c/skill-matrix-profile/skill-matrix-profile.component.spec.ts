/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SkillMatrixProfileComponent } from './skill-matrix-profile.component';

describe('Component: SkillMatrixProfile', () => {
  it('should create an instance', () => {
    let component = new SkillMatrixProfileComponent();
    expect(component).toBeTruthy();
  });
  it('Return Object from form should not be empty', () => {
  	expect(this.returnObject).toBeDefined();
  });
  it('Chart Object which is using to generate graph should not be empty', () => {
  	expect(this.chartObject).toBeDefined();
  });
  it('Skills should not be empty', () => {
  	expect(this.chartObject.skills).not.toBeNull().and.not.toBeUndefined();
  });
  it('Rates should not be empty', () => {
  	expect(this.chartObject.rates).not.toBeNull().and.not.toBeUndefined();
  });
  it('TopSkills which is used to generate graph should not be empty', () => {
  	expect(this.chartObject.topSkills).not.toBeNull().and.not.toBeUndefined();
  });
  it('TopRates which is used to generate graph should not be empty', () => {
  	expect(this.chartObject.topRates).not.toBeNull().and.not.toBeUndefined();
  });
  it('Total Sum which is used to generate graph title should not be empty', () => {
  	expect(this.chartObject.getTotalSum).not.toBeNull().and.not.toBeUndefined();
  });
});
