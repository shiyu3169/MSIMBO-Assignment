import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client'
import { Website } from '../../../models/website.model.client'
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms'



@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  @ViewChild('f') websiteForm: NgForm;

  uid: string;
  websites: Website[];
  name: string;
  description: string;
  website: Website;
  wid: string;

  constructor(private websiteService: WebsiteService, 
  	private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
  		this.uid = params['uid'];
  		this.wid = params['wid'];
  		this.websites = this.websiteService.findWebsitesByUser(this.uid);
  		this.website = this.websiteService.findWebsiteById(this.wid);
  		this.name = this.website.name;
  		this.description = this.website.description;
  	})
  }

  update() {
  	this.name = this.websiteForm.value.name;
  	this.description = this.websiteForm.value.description;
  	const updatedWeb: Website = {
  		_id: this.wid,
  		name: this.name,
  		developerId: this.uid,
  		description: this.description
  	}

  	this.websiteService.updateWebsite(this.wid, updatedWeb);
  	this.router.navigate(['user', this.uid, 'website'])
  }

  delete(){
  	this.websiteService.deleteWebsite(this.wid);
  	this.router.navigate(['user', this.uid, 'website'])
  }

}
