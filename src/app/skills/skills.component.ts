import { Input, Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { SkillService }  from './skills.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-skills',
  inputs: ['skills:skills', 'selectedSkills:selectedSkills','removeall:removeall', 'formgroup'],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [SkillService]
})
export class SkillsComponent {

   public showButtons: boolean = false;
    public value: number = 5;
    public min: number = 0;
    public max: number = 10;
    public smallStep: number = 1;

  skills;
  selectedSkills;
  rate: number;

  formgroup: FormGroup;
  //skillsFormControl: FormControl;
  

  ngOnInit() {
    // this.skillsFormControl = new FormControl("", Validators.required);
     console.log(this.formgroup);
    // this.formgroup.addControl('skillsFormControl', this.skillsFormControl)
    // console.log(this.formgroup);
  }




  addSkill(skillObject){
    skillObject.rate = 0;
    let isDuplicate = false;
    for(var iterator = 0; iterator < this.selectedSkills.length; iterator++) {
        if(skillObject["skill"]==this.selectedSkills[iterator]["skill"]){
          isDuplicate = true;
          break;
        }
    }

    if(!isDuplicate){
      this.selectedSkills.push(skillObject)
      for(var iterator = 0; iterator < this.skills["__zone_symbol__value"].length; iterator++) {
        if(skillObject.skill==this.skills["__zone_symbol__value"][iterator].skill){
          this.skills["__zone_symbol__value"].splice(iterator, 1)
          break;
        }
      }
      
    }
    console.log(this.skills);
  }

  removeSkill(object){
    for(let iterator = 0; iterator < this.selectedSkills.length; iterator++) {
        if(object.skill==this.selectedSkills[iterator]["skill"]){
          this.selectedSkills.splice(iterator, 1);
          this.skills["__zone_symbol__value"].push(object)
        }
    }
  }
  //@Input()
  //OtherComponent:OtherComponent;
  public removeall:Function;

}
