import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { OtherComponent } from './other/other.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsscoreComponent } from './skillsscore/skillsscore.component';
import { SkillMatrixProfileComponent } from './skill-matrix-profile/skill-matrix-profile.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import {APP_BASE_HREF} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    ProfileComponent,
    SkillsComponent,
    SkillsscoreComponent,
    SkillMatrixProfileComponent,
    TestcomponentComponent
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
    LayoutModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/skillset/app'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
