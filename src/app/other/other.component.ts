import { Injectable, Component } from '@angular/core';
import { SkillService }  from '../skills/skills.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
  providers: [SkillService]
})
@Injectable()
export class OtherComponent {
	
	
	public skillComponentObject: any = {
		skills : [],
		selectedSkills: []
	};

	constructor(private SkillServiceSearch: SkillService) { 
	
  	}
  	public removeall = Function;
  	ngOnInit() {
	  	this.skillComponentObject.skills = this.SkillServiceSearch.getskills();
	    //console.log(this.skills)
	    this.removeall = this.deselectAll.bind(this);
	    // this.skills = this.skillss.__zone_symbol__value;
	}

	public deselectAll() {
        this.skillComponentObject.selectedSkills = [];
	  	this.skillComponentObject.skills = this.SkillServiceSearch.getskills();

    }

    profile = {
        name: "",
        department: "",
        designation: ""
    }


}
