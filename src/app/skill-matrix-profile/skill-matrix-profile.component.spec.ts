/* tslint:disable:no-unused-variable */

// import { TestBed, async } from '@angular/core/testing';
// import { SkillMatrixProfileComponent } from './skill-matrix-profile.component';
// import { ProfileService }  from '../profile.service';
// describe('Component: SkillMatrixProfile', () => {
//   it('should create an instance', () => {
//     let component = new SkillMatrixProfileComponent();
//     console.log(component);
//     expect(component).toBeTruthy();
//   });
// });


/* tslint:disable:no-unused-variable */

import { inject, async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillMatrixProfileComponent } from './skill-matrix-profile.component';
import { FormsModule } from '@angular/forms';
import { ProfileService }  from '../profile.service';
import { ChartsModule } from '@progress/kendo-angular-charts';
import {Router} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { routing } from '../app.routing';

describe('Component: SkillMatrixProfile', () => {

  var fixture: any, compiled: any, componentInstance: any;

	beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ChartsModule, routing],
      declarations: [SkillMatrixProfileComponent],
      providers: [
       Router	
      ]
    });

    fixture = TestBed.createComponent(SkillMatrixProfileComponent);
    compiled = fixture.debugElement.nativeElement;
    componentInstance = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });


  // it('should create an instance', () => {
  //   let component = new SkillMatrixProfileComponent();
  //   expect(component).toBeTruthy();
  // });

  // it('should have colors array, to list down color options', () => {
  //   expect(componentInstance.colors).toBeDefined(); 
  // });

  // it('should have selectedColors array, to have selected color in', () => {
  //   expect(componentInstance.selectedColors).toBeDefined(); 
  // });

  // it('should have isopen Boolean Flag, to check for open or close state of the component', () => {
  //   expect(componentInstance.isopen).toBeDefined(); 
  // });

  // it('should have methods changed(), toggledropdown(), clearSelection(), getSelectionCount(), saveSelection()', () => {
  //   expect(componentInstance.changed).toBeDefined();
  //   expect(componentInstance.toggledropdown).toBeDefined();
  //   expect(componentInstance.clearSelection).toBeDefined();
  //   expect(componentInstance.getSelectionCount).toBeDefined();
  //   expect(componentInstance.saveSelection).toBeDefined(); 
  // });

  // it("should have text 'Select' for the togglable button ", async(() => {
  //     expect(componentInstance.buttonText).toEqual('Select');
  //     // if you bind an html element with some ngModel, either you can check for model value using componentInstance.modelName
  //     // or by selecting html element using querySelector you can for it's value or text property;
  //     expect(compiled.querySelector('#toggleBtn').innerHTML).toEqual('Select');
  //   }));

  // it("should create and open dropdown", async(() => {
  //     compiled.querySelector('#toggleBtn').click();
  //     fixture.detectChanges();
  //     expect(compiled.querySelector('#dropdown')).toBeDefined(); 
  //   }));


  // it("should destroy and close dropdown", async(() => {
  //     compiled.querySelector('#toggleBtn').click();
  //     compiled.querySelector('#toggleBtn').click();
  //     fixture.detectChanges();
  //     expect(compiled.querySelector('#dropdown')).toBeNull();
  // }));


  // it('should have checkbox in li', async(() => {
  //     compiled.querySelector('#toggleBtn').click()
  //     fixture.detectChanges();
  //     expect(compiled.querySelector('li input[type="checkbox"]')).toBeDefined();
      
  // }));

  // it("should have 'Select' if save button is clicked and there is no selection", async(() => {
  //     compiled.querySelector('#saveBtn').click();
  //     fixture.detectChanges();
  //     expect(compiled.querySelector('#toggleBtn').innerHTML).toEqual('Select');
  // }));

  // it("should have '1 Selected' if save button is clicked and there is a selection", async(() => {
  //     compiled.querySelector('#toggleBtn').click();
  //     fixture.detectChanges();
  //     compiled.querySelector('.color-checkbox').click();
  //     fixture.detectChanges();
  //     expect(compiled.querySelector('#toggleBtn').innerHTML).toEqual('1 Selected');
  // }));

  // it("should have '3 Selected' if save button is clicked and there is a selection", () => {
  //     compiled.querySelector('#toggleBtn').click();
  //     fixture.detectChanges();
  //     compiled.querySelector('ul li:nth-child(4) input[type="checkbox"]').click();
  //     compiled.querySelector('ul li:nth-child(3) input[type="checkbox"]').click();
  //     compiled.querySelector('ul li:nth-child(2) input[type="checkbox"]').click();
  //     fixture.detectChanges();
  //     expect(compiled.querySelector('#toggleBtn').innerHTML).toEqual('3 Selected');
  //     //compiled.querySelector('#toggleBtn').click();
  //     //fixture.detectChanges();
  // });
 
  // it("selectedColors.length should be zero, if we click clear button after selecting some colors", () => {
  //     compiled.querySelector('#toggleBtn').click(); // this opens the component
  //     fixture.detectChanges();  // reflects the change into the browser;
  //     compiled.querySelector('ul li:nth-child(3) input[type="checkbox"]').click();  // selecting a color;
  //     compiled.querySelector('ul li:nth-child(2) input[type="checkbox"]').click();  // selecting a color;
  //     compiled.querySelector('ul li:nth-child(1) input[type="checkbox"]').click();  // selecting a color;
  //     compiled.querySelector('#saveBtn').click();  //saving selection(s) here;
  //     fixture.detectChanges();
  //     expect(componentInstance.selectedColors.length).toEqual(3);
  //     compiled.querySelector('#clearBtn').click();
  //     expect(componentInstance.selectedColors.length).toEqual(0);  //clearing selection(s) here;
      
  // });
 
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


