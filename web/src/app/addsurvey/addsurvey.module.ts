import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddsurveyComponent } from './addsurvey.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const appRoutes: Routes = [
	{
		path: '', component: AddsurveyComponent,
	}
	
];
@NgModule({
  declarations: [AddsurveyComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class AddsurveyModule { }
