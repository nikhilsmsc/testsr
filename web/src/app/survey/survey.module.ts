import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
const appRoutes: Routes = [
	{
		path: '', component: SurveyComponent,
	}
	
];
@NgModule({
  declarations: [SurveyComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class SurveyModule { }
