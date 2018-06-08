import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../../../models/page.model.client'
import { PageService } from '../../../services/page.service.client'

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  uid: string;
  wid: string;
  pages: Page[];
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params =>{
  		this.uid = params['uid'];
  		this.wid = params['wid'];
  		this.pageService.findPageByWebsiteId(this.wid).subscribe(
        (pages: Page[]) => {
          this.pages = pages;
        }
      );
  	});
  }

}
