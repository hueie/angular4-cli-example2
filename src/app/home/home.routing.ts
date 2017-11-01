import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const homeRoutes: Routes = [
  { path: 'home',
    children: [
      {path: '', component: HomeComponent},
    ]
  }
];
export const HomeRouting = RouterModule.forChild(homeRoutes);
