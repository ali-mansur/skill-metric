import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css'],
  inputs: ['name']
})
export class TestcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
