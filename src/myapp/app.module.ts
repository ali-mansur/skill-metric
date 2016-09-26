import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { OtherComponent } from './other/other.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsscoreComponent } from './skillsscore/skillsscore.component';


@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    ProfileComponent,
    SkillsComponent,
    SkillsscoreComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
