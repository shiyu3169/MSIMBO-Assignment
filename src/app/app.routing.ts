import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
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

// Import all other components here 

const APP_ROUTES : Routes = [
  { path : '', component : LoginComponent},
  { path : 'login', component : LoginComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'user/:uid' , component: ProfileComponent},
  { path : 'user/:uid/website' , component: WebsiteListComponent}
  // so on
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
