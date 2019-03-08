import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const appRoutes: Routes = [
	{
		path: '', component: UsersComponent,
	}
	
];
@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class UsersModule { }
