import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
	profile: Object = {};

  	constructor() { }

  	setProfile(profile){
     localStorage.setItem('profile', JSON.stringify(profile));
  		this.profile = profile;
  		
  	}

  	getProfile(){
      this.profile = JSON.parse(localStorage.getItem("profile"));
  		return this.profile;
  	}

}
