import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { UserListServiceService } from './user-list-service.service.ts';
import { SkillMatrixProfileComponent } from '../skill-matrix-profile/skill-matrix-profile.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers : [UserListServiceService],
  directives : [SkillMatrixProfileComponent],
})
export class UserListComponent implements OnInit {
  	users: any;
  	private _selectedProfileDetails = {};
	constructor(private _UserListServiceService : UserListServiceService) {
  	
	}
	ngOnInit() {
	  	// this._UserListServiceService.getProfileData()
	  	// .subscribe(
	  	// 	data => { this.users = data},
	  	// 	error => alert(error),
	  	// 	() => console.log("finished ==>" + this.users)
	  	// );
	  	this.users = this._UserListServiceService.getProfileData();
	  	console.log(this.users);
  	}
  	showProfileDetails(selectedProfile){
  		this._selectedProfileDetails = selectedProfile;
  		// console.log(selectedProfile);
  	}

}

