import { Injectable, Component } from '@angular/core';
import { SkillService }  from '../skills/skills.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProfileService }  from '../profile.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
  providers: [SkillService, ProfileService]
})
@Injectable()
export class OtherComponent {

  userProfile: Object = {};
  profile = {
        name: "",
        department: "",
        designation: ""
  }

  form: FormGroup;
  firstName = new FormControl("", Validators.required);
 
	public skillComponentObject: any = {
		skills : [],
		selectedSkills: []
	};

  constructor(private SkillServiceSearch: SkillService, fb: FormBuilder, private profileService: ProfileService, private router: Router) { 
      this.form = fb.group({
          // "firstName": this.firstName
          // "password":["P@ssa", Validators.required]
      });
	}
	public removeall = Function;
	
  ngOnInit() {
  	this.skillComponentObject.skills = this.SkillServiceSearch.getskills();
    this.removeall = this.deselectAll.bind(this);
  }

  deselectAll() {
      this.skillComponentObject.selectedSkills = [];
  	this.skillComponentObject.skills = this.SkillServiceSearch.getskills();

  }

  onButtonClick(){
  	window.location.href = "/profile";
  }

  onSubmit() {
      this.form._value.selectedSkills = this.skillComponentObject.selectedSkills;
      if(!this.form._value.selectedSkills.length){
        alert("select one skill at least");
      }else{
        console.log(this.form);
        this.userProfile = {    
            "eId" : "1",
            "name" : this.form._value.name, 
            "designation": this.form._value.designation, 
            "department": this.form._value.department,
            "profileImage":"../assets/images/defaultDP.jpeg", 
            "skills": this.skillComponentObject.selectedSkills
        }
       //this.SkillServiceSearch.setProfile();
       this.profileService.setProfile(this.userProfile);
       this.router.navigate(['profile']);
      }
  }


}
