import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsurveyComponent } from './viewsurvey.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
const appRoutes: Routes = [
	{
		path: '', component: ViewsurveyComponent,
	}
];
@NgModule({
  declarations: [ViewsurveyComponent],
  imports: [
    SharedModule,
    CommonModule,
    
    RouterModule.forChild(appRoutes)
  ]
})
export class ViewsurveyModule { }
