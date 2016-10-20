import { Component, OnInit, HostListener } from '@angular/core';
import { ProfileService }  from '../profile.service';
import {Router} from '@angular/router';
import { RuntimeCompiler } from '@angular/compiler/src/runtime_compiler.d.ts';

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
    skills:[] = [], 
    rates: [],
    topSkills : [],
    topRates : [],
    getTotalSum : 0
  }

  
  constructor(private ProfileService: ProfileService, private router: Router) {
    this.returnObject = this.ProfileService.getProfile();
   }
  ngOnInit() {
     console.log(this.returnObject);
       for(let iterator = 0; iterator < this.returnObject["skills"].length; iterator++ ){
          this.chartObject.skills.push(this.returnObject["skills"][iterator].skill)
          this.chartObject.rates.push(this.returnObject["skills"][iterator].rate)
          this.chartObject.getTotalSum += +this.returnObject["skills"][iterator].rate
      }

      // console.log("rates ==> "+ this.chartObject.rates);
      // console.log("skills ==> "+ this.chartObject.skills);
      // console.log("top rates : ==> "+this.chartObject.topRates);


      // let r = this.returnObject.skills.sort((a, b) => b.rate - a.rate).reduce(function(r, e) {
      //   r.skills = (r.skills || []).concat(e.skill);
      //   r.rates = (r.rates || []).concat(e.rate);
      //   return r;
      // }, {})

      // this.chartObject.topSkills = r.skills.slice(0, 4);
      // this.chartObject.topRates = r.rates.slice(0, 4);

      // console.log("top rates : ==> "+this.chartObject.topRates);
      // console.log("top Skills : ==> "+this.chartObject.topSkills);
       this.chartObject.getTotalSum = Math.round(this.chartObject.getTotalSum * 100 / (this.returnObject["skills"].length*10))


   
  }

  onButtonClick(){
      this.router.navigate(['/']);
   }

  // @HostListener('document:load', ['$event.target']) onload(){
  //   this.returnObject = this.ProfileService.getProfile();
  // }


  
 
}
