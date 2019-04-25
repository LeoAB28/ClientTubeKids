import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


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

	constructor(private Jarwis: JarwisService, private Token: TokenService, private router: Router,  private Auth : AuthService) { };


	onSubmit(){
		this.Jarwis.signup(this.form).subscribe(
			data => this.handleResponse(data),
			error => this.handleError(error)
			);
	}

	handleResponse(data){
		this.Token.handle(data.access_token, data.id);
		this.Auth.changeAuthStatus(true);
		this.router.navigateByUrl('/login');
	}

	handleError(error){
		this.error = error.error.errors;
	}

	ngOnInit() {
	}

}