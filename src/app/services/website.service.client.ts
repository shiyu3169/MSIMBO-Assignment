import { Injectable } from '@angular/core';
import { Website } from '../models/website.model.client';
import { map } from "rxjs/operators";
import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class WebsiteService {

	baseUrl = environment.baseUrl;

	constructor(private http: Http) { }

	createWebsite(userId: string, website: Website) {
		const url = this.baseUrl + '/api/user/'+ userId + '/website';
		return this.http.post(url, website).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	}

	findWebsitesByUser(userId: string){
		const url = this.baseUrl + "/api/user/" + userId + "/website"
		return this.http.get(url).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	}

	findWebsiteById(websiteId: string) {
		const url = this.baseUrl + "/api/website/" + websiteId;
		return this.http.get(url).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	}

	updateWebsite(websiteId: string, website: Website) {
		const url = this.baseUrl + "/api/website/" + websiteId;
		return this.http.put(url, website).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	}

	deleteWebsite(websiteId: string) {
		const url = this.baseUrl + "/api/website/" + websiteId;
		return this.http.delete(url).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	}

}
