import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { SkillService }  from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [SkillService]
})
export class SkillsComponent implements OnInit {
	//let skills: object[] =[];
  skillsString: string ="";
	skills: Object[] = [];
	//skills=[]

  constructor(private SkillServiceSearch: SkillService) { 
	
  }

  ngOnInit() {
  	this.skills = this.SkillServiceSearch.getskills();
  	console.log('this.skills',this.skills);
  }

  onBlur() {
        var str = this.skillsString;
        var str_array = str.split(',');

        for(var i = 0; i < str_array.length; i++) {
           // Trim the excess whitespace.
           str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
           // Add additional code here, such as:
           console.log(str_array[i]);
        }
    }

}
