import { Injectable } from '@angular/core';
import { Page } from '../models/page.model.client';
import { map } from "rxjs/operators";
import {Http, Response} from '@angular/http';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()

export class PageService {

	baseUrl = environment.baseUrl;

    constructor(private http: Http) { }

	// adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
	createPage(websiteId : string, page : Page){
		const url = this.baseUrl + '/api/website/'+ websiteId +'/page';
		return this.http.post(url, page).pipe(map(
			(response: Response) => {
				return response.json();
			}
		))
	}

	// retrieves the pages in local pages array whose websiteId matches the parameter websiteId
	findPageByWebsiteId(websiteId : string) {
		const url = this.baseUrl + '/api/website/'+ websiteId +'/page';
		return this.http.get(url).pipe(map(
			(response: Response) => {
				return response.json();
			}
		))
	}

	//  retrieves the page in local pages array whose _id matches the pageId parameter
	findPageById(pageId : string) {
		const url = this.baseUrl + '/api/page/' + pageId;
		return this.http.get(url).pipe(map(
			(response: Response) => {
				return response.json();
			}
		))
	}

	// updates the page in local pages array whose _id matches the pageId parameter
	updatePage(pageId : string, page: Page) {
		const url = this.baseUrl + '/api/page/' + pageId;
		return this.http.put(url, page).pipe(map(
			(response: Response) => {
				return response.json();
			}
		))
	}

	//  removes the page from local pages array whose _id matches the pageId parameter
	deletePage(pageId : string) {
		const url = this.baseUrl + '/api/page/' + pageId;
		return this.http.delete(url).pipe(map(
			(response: Response) => {
				return response.json();
			}
		))
	}
}
