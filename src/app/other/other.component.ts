import { Injectable, Component } from '@angular/core';
import { SkillService }  from '../skills/skills.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProfileService }  from '../profile.service';
import {Router} from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';


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
  isFormSubmitted: boolean = false;
  firstName = new FormControl("", Validators.required);
 
	public skillComponentObject: any = {
		skills : [],
		selectedSkills: [],
    pcfs: [],
    microservices: []
	};

  constructor(private SkillServiceSearch: SkillService, private fb: FormBuilder, private profileService: ProfileService, private router:Router) { 
    console.log(this.form);
      this.form = fb.group({
          // "firstName": this.firstName,
          // "password":["P@ssa", Validators.required]
      });

      console.log(this.form);

      this.form.valueChanges.subscribe(  
        (form: any) => {  
          if(this.form.valid){
              console.log('valid', this.form); 
              this.isFormSubmitted = false;   
          }else{
            console.log('Invalid');    
          }
          

        }
      );
	}
	public removeall = Function;
	
  ngOnInit() {
  	this.skillComponentObject.skills = this.SkillServiceSearch.getskills();
    console.log(this.SkillServiceSearch.getPcf());
    this.skillComponentObject.pcfs = this.SkillServiceSearch.getPcf();
    // this.skillComponentObject.microservices = this.SkillServiceSearch.getPcf();
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
      if(!this.skillComponentObject.selectedSkills.length || this.form.invalid){
        alert("fill the form and select one skill at least");
        this.isFormSubmitted = true;
      }else{
        //console.log(this.form);
        this.userProfile = {    
            "eId" : "1",
            "name" : this.form.value.name, 
            "designation": this.form.value.designation, 
            "department": this.form.value.department,
            "profileImage": "../assets/images/defaultDP.jpeg", 
            "skills_ach_cert_desc": this.form.value.skills_ach_cert_desc,
            "skills": this.skillComponentObject.selectedSkills
        }
       console.log(this.userProfile);
       this.profileService.setProfile(this.userProfile);
       this.router.navigate(['profile']);
      }
  }


}
