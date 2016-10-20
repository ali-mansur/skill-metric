/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


describe('Component: ProfileComponent', () => {

	var fixture: any, compiled: any, componentInstance: any;

	beforeEach(() => {
    	TestBed.configureTestingModule({
    	imports: [ ReactiveFormsModule ],
    	declarations: [ProfileComponent],
    	providers: [
       
    		]
    	});

	    fixture = TestBed.createComponent(ProfileComponent);
	    compiled = fixture.debugElement.nativeElement;
	    componentInstance = fixture.debugElement.componentInstance;
	    
  	});


    it('should create an instance of ProfileComponent', () => {
    	//console.log(componentInstance)
    	let component = new ProfileComponent();
    	expect(component).toBeTruthy();
    	//console.log(component)
    });

    it('should have Heading of User Information', () => {
    	expect(compiled.querySelector('h4').innerHTML).toEqual('User Information');
    });

});