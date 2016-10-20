import { Component, OnInit } from '@angular/core';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css'],
  inputs: ['name']
})
export class TestcomponentComponent{

  // decimal pipe 
   a: number = 0.259;
  b: number = 0.259;
}
