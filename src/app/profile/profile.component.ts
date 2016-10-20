import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  inputs: ['formgroup', 'isFormSubmitted'],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {

	//http://localhost:4000/assets/images/dp-2.jpg
	uploadSaveUrl: string = "http://localhost:4000/upload/";
  	


	submit(){
		//console.log(this.user);
		window.location.href = "/profile";
	}

	selectEventHandler(e: SelectEvent) {
		console.log("file");
		console.log(e);
	}

	public formgroup: FormGroup;
  	public name: FormControl;
  	department: FormControl;
  	designation: FormControl;
  

  	ngOnInit() {
	  	this.name = new FormControl("", Validators.required);
	  	this.department = new FormControl("", Validators.required);
	  	this.designation = new FormControl("", Validators.required);
	  	console.log(this.formgroup);
	  	this.formgroup.addControl('name', this.name);
	  	this.formgroup.addControl('department', this.department);
	  	this.formgroup.addControl('designation', this.designation);
	  	console.log(this.formgroup);
  	}

}
