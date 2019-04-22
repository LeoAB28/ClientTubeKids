import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../Services/jarwis.service';


@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


	public form ={
		name: null,
		first_last_name: null,
		second_last_name: null,
		email:null,
		password: null,
		password_confirmation: null,
		country: null,
		birthdate:null,
		phone: null,
	}

	public error = [];

	constructor(private Jarwis: JarwisService) { };


	onSubmit(){
		this.Jarwis.signup(this.form).subscribe(
			data => console.log(data),
			error => this.handleError(error)
			);
	}

	handleError(error){
    this.error = error.error.errors;
  }

	ngOnInit() {
	}

}