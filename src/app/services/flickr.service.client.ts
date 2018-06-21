import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
// injecting service into module
@Injectable()

export class FlickrService {
	key = "6c8dafa5dd3c1e8a136f3fb7b42488f3";
	secret = "89d075b312e56b18";
	urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

    constructor(private _http: Http) {}

    searchPhotos(searchTerm: any) {
    	const url = this.urlBase.replace('API_KEY', this.key).replace('TEXT', searchTerm);
    	return this._http.get(url);
	}

}


