import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { WidgetService } from "../../../../services/widget.service.client"
import { Widget } from "../../../../models/widget.model.client"
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  constructor(private widgetService: WidgetService, private activitedRoute: ActivatedRoute, private router: Router) { }

  uid: string;
  wid: string;
  pid: string;
  wgid: string;
  widget: Widget= {
    widgetType: '',
    pageId: ''
  };
  name: string;
  rows: number;
  placeholder: string;
  formatted: boolean = false;

  @ViewChild('f') widgetForm: NgForm;

  ngOnInit() {
  	this.activitedRoute.params.subscribe(params=>{
  		this.uid = params['uid'];
  		this.wid = params['wid'];
  		this.pid = params['pid'];
  		this.wgid = params['wgid'];
  		this.widgetService.findWidgetById(this.wgid).subscribe(
        (widget: Widget) => {
          this.widget = widget;
          if(!this.widget.formatted) {
            this.widget.formatted = null;
          }
        }
      );
  	});
  }

  update(){
  	this.name = this.widgetForm.value.name;
  	this.rows = this.widgetForm.value.rows;
  	this.placeholder = this.widgetForm.value.placeholder;
    if(this.widgetForm.value.formatted) {
      this.formatted = this.widgetForm.value.formatted;
    }

  	const updatedWidget: Widget = {
  		_id: this.wgid,
  		name: this.name,
  		widgetType: this.widget.widgetType,
  		pageId: this.pid,
  		rows: this.rows,
  		placeholder: this.placeholder,
  		formatted: this.formatted
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
