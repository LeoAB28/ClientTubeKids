import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { AddVideoComponent } from './components/add-video/add-video.component';

@NgModule({
  declarations: [
  AppComponent,
  NavbarComponent,
  LoginComponent,
  SignupComponent,
  HomeComponent,
  ProfilesComponent,
  AddProfileComponent,
  AddVideoComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  NgxYoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
