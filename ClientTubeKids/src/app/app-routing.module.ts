import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';


const appRoutes: Routes =[
{
	path: 'login',
	component: LoginComponent,
	canActivate: [BeforeLoginService]
},
{
	path: 'signup',
	component: SignupComponent,
	canActivate: [BeforeLoginService]
},

{
	path: 'home',
	component: HomeComponent,
	canActivate: [AfterLoginService]
},

]


@NgModule({
	imports: [
	RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
