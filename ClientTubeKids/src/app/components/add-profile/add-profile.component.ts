import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-profile',
	templateUrl: './add-profile.component.html',
	styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

	public form ={
		name: null,
		user_name: null,
		key: null,
		age: null,
		id_father: this.get(),
	}


	public error = [];

	constructor(private Jarwis: JarwisService, private router: Router) {

	}

	handleResponse(data){
		this.router.navigateByUrl('/profiles');
	}

	handleError(error){
		this.error = error.error.errors;
	}
	ngOnInit() {
	}
	onSubmit(){
		this.Jarwis.addProfile(this.form).subscribe(
			data => this.handleResponse(data),
			error => this.handleError(error)
			);
	}

	get() {
		return localStorage.getItem('id');
	}
}
