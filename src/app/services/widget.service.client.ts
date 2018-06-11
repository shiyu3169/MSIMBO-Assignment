import { Injectable } from '@angular/core';
import { Widget } from '../models/widget.model.client'
import { map } from "rxjs/operators";
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment'

// injecting service into module
@Injectable()


export class WidgetService {

	baseUrl = environment.baseUrl;

    constructor(private http: Http) { }
	


	// adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
	createWidget(pageId: string, widget: Widget) {
		const url = this.baseUrl + '/api/page/' + pageId + '/widget'
		return this.http.post(url, widget).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	}
	// retrieves the widgets in local widgets array whose pageId matches the parameter pageId
	findWidgetsByPageId(pageId: string){
		const url = this.baseUrl + '/api/page/'+ pageId +'/widget'
		return this.http.get(url).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	}
	// retrieves the widget in local widgets array whose _id matches the widgetId parameterretrieves the widget in local widgets array whose _id matches the widgetId parameter
	findWidgetById(widgetId: string) {
		const url = this.baseUrl + '/api/widget/'+ widgetId
		return this.http.get(url).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	}
	// updates the widget in local widgets array whose _id matches the widgetId parameter
	updateWidget(widgetId: string, widget: Widget){
		const url = this.baseUrl + '/api/widget/' + widgetId;
		return this.http.put(url, widget).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	} 
	// removes the widget from local widgets array whose _id matches the widgetId parameter
	deleteWidget(widgetId: string){
		const url = this.baseUrl + '/api/widget/' + widgetId;
		return this.http.delete(url).pipe(map(
			(response: Response) => {
				return response.json();
			}
		));
	}
}