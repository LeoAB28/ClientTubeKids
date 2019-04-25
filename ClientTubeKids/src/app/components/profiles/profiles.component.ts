import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-profiles',
	templateUrl: './profiles.component.html',
	styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {


	public form ={
		id: null,
		name: null,
		user_name: null,
		key: null,
		age: null,
		id_father: this.get(),
	}

	public error = " ";
	public messages = null;
	public profiles = [];

	public forms = false;



	constructor(private Jarwis: JarwisService, private router: Router) {

		this.Jarwis.getProfiles(this.get()).subscribe(
			data => this.handleResponse(data),
			error => this.handleError(error)
			);
	}

	handleError(error){
		this.error = error.error.error;
	}

	handleResponse(data){
		this.profiles = data.profiles;
	}

	handleResponseMessage(data){
		this.messages = data;
	}

	delete(event: MouseEvent, id){
		event.preventDefault();
		this.Jarwis.delteProfile(id).subscribe(
			data => this.handleResponseMessage(data),
			error => this.handleError(error)
			);
		window.location.reload();
	}

	update($event, profile){
		event.preventDefault();
		this.form.name = profile.name;
		this.form.user_name = profile.user_name;
		this.form.key = profile.key;
		this.form.age = profile.age;
		this.form.id = profile.id;
		this.forms = true;
	}

	onSubmit(){
		console.log("Update");
		this.Jarwis.updateProfile(this.form).subscribe(
			data => this.handleResponseMessage(data),
			error => this.handleError(error)
			);
		console.log(this.form);
	}

	get() {
		return localStorage.getItem('id');
	}

	ngOnInit() {
	}
}
