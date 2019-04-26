import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { HomeComponent } from './components/home/home.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { VideosComponent } from './components/videos/videos.component';


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

{
	path: 'profiles',
	component: ProfilesComponent,
	canActivate: [AfterLoginService]
},

{
	path: 'add-profile',
	component: AddProfileComponent,
	canActivate: [AfterLoginService]
},

{
	path: 'add-video',
	component: AddVideoComponent,
	canActivate: [AfterLoginService]
},

{
	path: 'videos',
	component: VideosComponent,
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
