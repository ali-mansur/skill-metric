import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {

	user = {
		name: "Mansur",
		department: "UI/UX",
		designation: "Senior UI Developer"
	}

}
