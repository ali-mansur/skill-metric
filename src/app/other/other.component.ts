import { Component } from '@angular/core';
import { SkillService }  from '../skills/skills.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
  providers: [SkillService]
})
export class OtherComponent {
	
	
	skillComponentObject: Object = {
		skills : [],
		selectedSkills: []
	};

	constructor(private SkillServiceSearch: SkillService) { 
	
  	}

  	ngOnInit() {
	  	this.skillComponentObject.skills = this.SkillServiceSearch.getskills();
	    console.log(this.skills)
	    // this.skills = this.skillss.__zone_symbol__value;
	}

	onButtonClick() {
        alert('Hello from Kendo UI!');
    }

    profile = {
        name: "",
        department: "",
        designation: ""
    }


}
