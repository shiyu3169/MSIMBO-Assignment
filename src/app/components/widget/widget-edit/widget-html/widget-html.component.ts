import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { WidgetService } from "../../../../services/widget.service.client"
import { Widget } from "../../../../models/widget.model.client"
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  constructor(private widgetService: WidgetService, private activitedRoute: ActivatedRoute, private router: Router) { }

  @ViewChild('f') widgetForm: NgForm;
  
  uid: string;
  wid: string;
  pid: string;
  wgid: string;
  widget: Widget= {
    widgetType: '',
    pageId: ''
  };
  name: string;
  text: string;


  ngOnInit() {
  	this.activitedRoute.params.subscribe(params=>{
  		this.uid = params['uid'];
  		this.wid = params['wid'];
  		this.pid = params['pid'];
  		this.wgid = params['wgid'];
  		this.widgetService.findWidgetById(this.wgid).subscribe(
        (widget: Widget) => {
          this.widget = widget;
        }
      );
  	});
  }

  update(){
  	this.name = this.widgetForm.value.name;
  	this.text = this.widgetForm.value.text;

  	const updatedWidget: Widget = {
  		_id: this.wgid,
  		name: this.name,
  		widgetType: this.widget.widgetType,
  		pageId: this.pid,
  		text: this.text
  	}

  	this.widgetService.updateWidget(this.wgid, updatedWidget).subscribe(
        (widget: Widget) => {
          this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
        }
      );
  	
  }

  remove(){
  	this.widgetService.deleteWidget(this.wgid).subscribe(
      (widgets: Widget[]) => {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
      }
    );
  }

}
