import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { UploadModule } from '@progress/kendo-angular-upload';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { OtherComponent } from './other/other.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillMatrixProfileComponent } from './skill-matrix-profile/skill-matrix-profile.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import {APP_BASE_HREF} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    ProfileComponent,
    SkillsComponent,
    SkillMatrixProfileComponent,
    TestcomponentComponent,
    UPLOAD_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    InputsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    ChartsModule,
    LayoutModule,
    UploadModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/skillset/app'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
