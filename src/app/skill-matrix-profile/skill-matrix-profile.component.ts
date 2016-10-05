import { Component, OnInit } from '@angular/core';
import { ProfileService }  from '../profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-skill-matrix-profile',
  templateUrl: './skill-matrix-profile.component.html',
  styleUrls: ['./skill-matrix-profile.component.css'],
  // inputs : ['_SkillMatrixProfileData']
  inputs : [],
  providers : [ProfileService],
})
export class SkillMatrixProfileComponent implements OnInit {

	returnObject: Object;
  chartObject = {
    skills:[], 
    rates: [],
    getTotalSum : 0
  }

	
  constructor(private ProfileService: ProfileService, private router: Router) {
  	this.returnObject = this.ProfileService.getProfile();
   }
  ngOnInit() {
  	 console.log(this.returnObject);
       for(let iterator = 0; iterator < this.returnObject.skills.length; iterator++ ){
          this.chartObject.skills.push(this.returnObject.skills[iterator].skill)
          this.chartObject.rates.push(this.returnObject.skills[iterator].rate)
          this.chartObject.getTotalSum += +this.returnObject.skills[iterator].rate
      }

       this.chartObject.getTotalSum = this.chartObject.getTotalSum * 100 / (this.returnObject.skills.length*10)

	 
  }


  
 
}
