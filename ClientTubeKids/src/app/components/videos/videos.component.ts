import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-videos',
	templateUrl: './videos.component.html',
	styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {



	public form ={
		id: null,
		name: null,
		url: null,
		id_father: this.get(),
	}

	public error = " ";
	public messages = null;
	public playlists = [];

	public forms = false;



	constructor(private Jarwis: JarwisService, private router: Router) {

		this.getPlaylist();
	}

	handleError(error){
		this.error = error.error.error;
	}

	handleResponse(data){
		this.playlists = data.playlist;
	}

	handleResponseMessage(data){
		this.messages = data;
	}

	delete(event: MouseEvent, id){
		event.preventDefault();
		this.Jarwis.deleteVideo(id).subscribe(
			data => this.handleResponseMessage(data),
			error => this.handleError(error)
			);
		//window.location.reload();
	}

	update($event, video){
		event.preventDefault();
		this.form.name = video.name;
		this.form.url = video.url;
		this.form.id = video.id;
		this.form.id_father = video.id_father;
		this.forms = true;
	}

	onSubmit(){
		console.log("Update");
		this.Jarwis.updateVideo(this.form).subscribe(
			data => this.handleResponseMessage(data),
			error => this.handleError(error)
			);
	}

	get() {
		return localStorage.getItem('id');
	}

	ngOnInit() {
		
	}

	getPlaylist(){
		this.Jarwis.getVideo(this.get()).subscribe(
			data => this.handleResponse(data),
			error => this.handleError(error)
			);
	}
}
