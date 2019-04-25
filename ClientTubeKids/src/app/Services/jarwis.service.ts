import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class JarwisService {

	private baseUrl = 'http://localhost:8000/api';
	constructor(private http: HttpClient) { }

	signup(data){
		return this.http.post(`${this.baseUrl}/signup`, data)
	}

	login(data){
		return this.http.post(`${this.baseUrl}/login`, data)
	}

	getProfiles(id){
		return this.http.get(this.baseUrl+'/profiles/'+id)
	}

	addProfile(data){
		return this.http.post(`${this.baseUrl}/addProfile`, data)
	}

	delteProfile(id){
		return this.http.get(this.baseUrl+'/profileDelete/'+id)
	}

	updateProfile(data){
		return this.http.put(`${this.baseUrl}/putProfile`, data)
	}
}