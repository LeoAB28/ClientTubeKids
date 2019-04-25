import { Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
}) 
export class HomeComponent {
	player: YT.Player;
	private id: string = 'ZWJH7JQCjLM';

	savePlayer(player) {
		this.player = player;
		console.log('player instance', player);
	}
	onStateChange(event) {
		console.log('player state', event.data);
	}
}