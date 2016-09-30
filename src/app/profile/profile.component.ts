import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  inputs: ['user:usera'],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {

	submit(){
		//console.log(this.user);
	}

}
