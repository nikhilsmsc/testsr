import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{
		path: 'home', loadChildren: './dashboard/dashboard.module#DashboardModule',
	},
	{
		path: 'add', loadChildren: './addsurvey/addsurvey.module#AddsurveyModule',
	},
	{
		path: 'edit/:id', loadChildren: './addsurvey/addsurvey.module#AddsurveyModule',
	},
	{
		path: 'login', component: LoginComponent
	},
  {
		path: 'login', component: LoginComponent
	},
	{
		path: '**', component: LoginComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
