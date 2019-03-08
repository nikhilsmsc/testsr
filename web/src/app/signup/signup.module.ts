import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const appRoutes: Routes = [
	{
		path: '', component: SignupComponent,
	}
	
];
@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class SignupModule { }
