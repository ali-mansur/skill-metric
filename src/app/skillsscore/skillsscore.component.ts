import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillsscore',
  templateUrl: './skillsscore.component.html',
  styleUrls: ['./skillsscore.component.css'],
  inputs: ['skills:selectedSkills'],
})
export class SkillsscoreComponent implements OnInit {
  skills: Object[];
  constructor() { }

  ngOnInit() {
  }

}
