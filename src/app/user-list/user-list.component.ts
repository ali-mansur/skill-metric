import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { UserListServiceService } from './user-list-service.service.ts';
import { SkillMatrixProfileComponent } from '../skill-matrix-profile/skill-matrix-profile.component';
import { SkillService }  from '../skills/skills.service';
import { ProfileService }  from '../profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers : [UserListServiceService, SkillService, ProfileService],
  directives : [SkillMatrixProfileComponent],
})
export class UserListComponent implements OnInit {

  	users: any;
  	private _selectedProfileDetails = {};
    profile: Object = {};

	constructor(private _UserListServiceService : UserListServiceService, private SkillServiceSearch: SkillService, private ProfileService: ProfileService, private router: Router) {
  	this.profile = this.ProfileService.getProfile();
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
      console.log("profile")
      //console.log(SkillService.getProfileData());
  	}
  	showProfileDetails(selectedProfile){
  		this._selectedProfileDetails = selectedProfile;
  		// console.log(selectedProfile);
  	}

    skills = ["angular js", "Advance Javascript", "HTML5", "CSS3", "Jasmine", "Karma"];
    onButtonClick(){
      this.router.navigate(['/']);
    }

}

