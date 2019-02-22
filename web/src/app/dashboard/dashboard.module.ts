import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
const appRoutes: Routes = [
	{
		path: '', component: DashboardComponent,
	}
	
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class DashboardModule { }
