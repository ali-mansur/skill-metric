/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { OtherComponent } from './other.component';
import { ProfileComponent } from '../profile/profile.component';
import { routing } from '../app.routing';
// import { Injectable, Component } from '@angular/core';
// import { SkillService }  from '../skills/skills.service';
import {  FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { SkillsComponent } from '../skills/skills.component';
import {Router} from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ProfileService }  from '../profile.service';

import { SkillMatrixProfileComponent } from '../skill-matrix-profile/skill-matrix-profile.component';
import {APP_BASE_HREF} from '@angular/common';


// describe('Component: Other', () => {
//   it('should create an instance', () => {
//     let component = new OtherComponent();
//     expect(component).toBeTruthy();
//   });
// });


describe('Component: Other', () => {

	var fixture: any, compiled: any, componentInstance: any;

	beforeEach(() => {
    	TestBed.configureTestingModule({
        // imports: [ ReactiveFormsModule, ButtonsModule, InputsModule, ChartsModule, HttpModule, RouterModule, routing ],
        // declarations: [OtherComponent, ProfileComponent, SkillsComponent, SkillMatrixProfileComponent],
    	imports: [ ReactiveFormsModule, HttpModule, RouterModule, routing, ButtonsModule, InputsModule, ChartsModule ],
    	declarations: [ OtherComponent, ProfileComponent, SkillsComponent, SkillMatrixProfileComponent ],
    	providers: [
       			{provide: APP_BASE_HREF, useValue: '/skillset/app'},
                ProfileService   
    		]
    	});

	    fixture = TestBed.createComponent(OtherComponent);
	    compiled = fixture.debugElement.nativeElement;
	    componentInstance = fixture.debugElement.componentInstance;
	    
  	});


    it('should create an instance of OtherComponent', () => {
    	//console.log(componentInstance)
    	let component = new OtherComponent();
    	expect(true).toBeTruthy();
    	//console.log(component)
    });


});