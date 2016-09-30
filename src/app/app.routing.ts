import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }      from './app.component';
import { OtherComponent }      from './other/other.component';
import { SkillsComponent }      from './skills/skills.component';
import { UserListComponent } from './user-list/user-list.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: OtherComponent
  },
  {
    path: 'profile',
    component: UserListComponent
  },
  {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);