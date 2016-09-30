import { Input, Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { SkillService }  from './skills.service';//

@Component({
  selector: 'app-skills',
  inputs: ['skills:skills', 'selectedSkills:selectedSkills','removeall:removeall'],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [SkillService]
})
export class SkillsComponent {
  public skills;
  public selectedSkills;
  addSkill(skillObject){

    let isDuplicate = false;
    for(var iterator = 0; iterator < this.selectedSkills.length; iterator++) {
        if(skillObject["skills"]==this.selectedSkills[iterator]["skills"]){
          isDuplicate = true;
          break;
        }
    }

    if(!isDuplicate){
      this.selectedSkills.push(skillObject)
      for(var iterator = 0; iterator < this.skills["__zone_symbol__value"].length; iterator++) {
        if(skillObject.skills==this.skills["__zone_symbol__value"][iterator].skills){
          this.skills["__zone_symbol__value"].splice(iterator, 1)
          break;
        }
      }
      
    }
    console.log(this.skills);
  }

  removeSkill(object){
    for(let iterator = 0; iterator < this.selectedSkills.length; iterator++) {
        if(object.skills==this.selectedSkills[iterator]["skills"]){
          this.selectedSkills.splice(iterator, 1);
          this.skills["__zone_symbol__value"].push(object)
        }
    }
    // console.log(this.skills);
    console.log(this.selectedSkills);
  }
  //@Input()
  //OtherComponent:OtherComponent;
  public removeall:Function;

}
