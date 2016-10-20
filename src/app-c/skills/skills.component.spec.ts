/* tslint:disable:no-unused-variable */

// import { TestBed, async } from '@angular/core/testing';
// import { SkillsComponent } from './skills.component';
// import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// describe('Component: Skills', () => {
//   it('should create an instance', () => {
//     let component = new SkillsComponent();
//     expect(component).toBeTruthy();
//   });
// });

/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


describe('Component: ProfileComponent', () => {

	var fixture: any, compiled: any, componentInstance: any;

	beforeEach(() => {
    	TestBed.configureTestingModule({
    	imports: [ ReactiveFormsModule ],
    	declarations: [SkillsComponent],
    	providers: [
       
    		]
    	});

	    fixture = TestBed.createComponent(SkillsComponent);
	    compiled = fixture.debugElement.nativeElement;
	    componentInstance = fixture.debugElement.componentInstance;
	    
  	});


    it('should create an instance of ProfileComponent', () => {
    	//console.log(componentInstance)
    	let component = new SkillsComponent();
    	expect(component).toBeTruthy();
    	//console.log(component)
    });


});