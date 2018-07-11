import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AuthGuard} from './services/auth-guard.service';
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {ProfileComponent} from "./components/user/profile/profile.component"
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';

// Import all other components here 

const APP_ROUTES : Routes = [
  { path : '', component : LoginComponent},
  { path : 'login', component : LoginComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'user' , component: ProfileComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website' , component: WebsiteListComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/new' , component: WebsiteNewComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid' , component: WebsiteEditComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page' , component: PageListComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page/new' , component: PageNewComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page/:pid' , component: PageEditComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page/:pid/widget' , component: WidgetListComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page/:pid/widget/new' , component: WidgetChooserComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page/:pid/widget/:wgid' , component: WidgetEditComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component: FlickrImageSearchComponent, canActivate: [AuthGuard]}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
