import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-video',
	templateUrl: './add-video.component.html',
	styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {


	public form ={
		name: null,
		url: null,
		id_father: this.get(),
	}

	public error = " ";
	public messages = null;

	constructor(private Jarwis: JarwisService, private router: Router) { }
	get() {
		return localStorage.getItem('id');
	}

	handleError(error){
		this.error = error.error.error;
	}

	handleResponse(data){
		this.messages = data;
	}

	onSubmit(){
		this.Jarwis.addVideo(this.form).subscribe(
			data => this.handleResponse(data),
			error => this.handleError(error)
			);
		this.router.navigateByUrl('/home');
	}

	ngOnInit() {
	}

}
