import { Component, OnInit } from '@angular/core';
import { SkillMatrixProfileServiceService } from './skill-matrix-profile-service.service.ts';

@Component({
  selector: 'app-skill-matrix-profile',
  templateUrl: './skill-matrix-profile.component.html',
  styleUrls: ['./skill-matrix-profile.component.css'],
  inputs : ['_SkillMatrixProfileData']
})
export class SkillMatrixProfileComponent implements OnInit {

  constructor() {
   }
   
  ngOnInit() {
  }
 
}
