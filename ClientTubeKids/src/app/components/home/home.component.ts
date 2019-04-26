import { Component, ViewChild, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
}) 
export class HomeComponent implements OnInit{
	player: YT.Player;
	id: string;

	public error = " ";
	public messages = null;

	public playlists = [];

	constructor(private Jarwis: JarwisService) {
		this.loadVideos();
		this.id='g3t6YDnGXAc';
	}

	savePlayer(player) {
		this.player = player;
		console.log('player instance', player);
	}
	onStateChange(event) {
		console.log('player state', event.data);
	}
	play(url){
		var id_video = url.split('v=')[1].split('&')[0];
		this.id=id_video;
		this.player.loadVideoById(this.id);
	}

	handleError(error){
		this.error = error.error.error;
	}

	handleResponse(data){
		this.playlists=[];
		this.playlists = data.playlist;
		console.log(this.playlists);
	}

	get() {
		return localStorage.getItem('id');
	}

	ngOnInit() {

	}

	loadVideos(){
		this.Jarwis.getVideo(this.get()).subscribe(
			data => this.handleResponse(data),
			error => this.handleError(error)
			);
	}
}