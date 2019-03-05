import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
	{
		path: '', component: ProfileComponent,
	}
	
];
@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
