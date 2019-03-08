import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{
		path: 'home', loadChildren: './dashboard/dashboard.module#DashboardModule',
	},
	{
		path: 'view', loadChildren: './viewsurvey/viewsurvey.module#ViewsurveyModule',
	},
	{
		path: 'add', loadChildren: './addsurvey/addsurvey.module#AddsurveyModule',
	},
	{
		path: 'profile', loadChildren: './profile/profile.module#ProfileModule',
	},
	{
		path: 'edit', loadChildren: './addsurvey/addsurvey.module#AddsurveyModule',
	},
	{
		path: 'signup', loadChildren: './signup/signup.module#SignupModule',
	},
	{
		path: 'login', component: LoginComponent
	},
	{
		path: 'users', loadChildren: './users/users.module#UsersModule'
   	},
	{
	 	path: '**', loadChildren: './dashboard/dashboard.module#DashboardModule'
	},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
