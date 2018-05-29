(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-header/widget-header.component */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/widget-image.component */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteListComponent"],
                _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteNewComponent"],
                _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteEditComponent"],
                _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_10__["PageListComponent"],
                _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"],
                _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_12__["PageNewComponent"],
                _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_13__["WidgetListComponent"],
                _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_14__["WidgetChooserComponent"],
                _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_15__["WidgetEditComponent"],
                _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_16__["WidgetHeaderComponent"],
                _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_17__["WidgetImageComponent"],
                _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_18__["WidgetYoutubeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_19__["Routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_20__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_21__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_22__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_23__["WidgetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");













// Import all other components here 
var APP_ROUTES = [
    { path: '', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'user/:uid', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'user/:uid/website', component: _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_4__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_5__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_7__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_9__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_8__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_10__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_11__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_12__["WidgetEditComponent"] }
];
// Export the routes as module providers
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t<div class=\"sw-90-width\">\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}\"><b>Edit Page</b></a>\n\t\t</div>\n\t\t<button type=\"submit\" [disabled]=\"f.invalid\" form=\"pageForm\" class=\"btn sw-button-to-a sw-color-black float-right\"><i class=\"fas fa-check\"></i></button>\n\t</nav>\n\t<div class=\"container-fluid\">\n\t\t<form id=\"pageForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Name</b></label>\n\t\t\t\t<input class=\"form-control\" required ngModel=\"{{page.name}}\" #name=\"ngModel\" type=\"text\" name=\"name\" placeholder=\"Enter your page name...\" value=\"Blog Post\">\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"name.invalid && name.touched\" class=\"alert alert-warning\">Name cannot be empty</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Description</b></label>\n\t\t\t\t<input class=\"form-control\" ngModel={{page.description}} #description=\"ngModel\" type=\"text\" name=\"description\" placeholder=\"Enter your page description...\" value=\"Blog\">\n\t\t\t</div>\n\t\t\t<button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"f.invalid\">Update</button>\n\t\t\t<button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"remove()\">Delete</button>\n\t\t</form>\n\t</div>\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</footer>"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.page = _this.pageService.findPageById(_this.pid);
            _this.name = _this.page.name;
            _this.description = _this.page.description;
        });
    };
    PageEditComponent.prototype.update = function () {
        this.name = this.pageForm.value.name;
        this.description = this.pageForm.value.description;
        var updatedPage = {
            _id: this.pid,
            name: this.name,
            description: this.description,
            websiteId: this.wid
        };
        this.pageService.updatePage(this.pid, updatedPage);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
    };
    PageEditComponent.prototype.remove = function () {
        this.pageService.deletePage(this.pid);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], PageEditComponent.prototype, "pageForm", void 0);
    PageEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t<div class=\"sw-90-width\">\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\"><b>Page</b></a>\n\t\t</div>\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\"><i class=\"fas fa-plus\"></i></a>\n\t</nav>\n\t<div class=\"container-fluid\">\n\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t<li class=\"list-group-item\" *ngFor=\"let page of pages\">\n\t\t\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}/widget\">{{page.name}}</a>\n\t\t\t\t<a class=\"float-right sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</footer>"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pages = _this.pageService.findPageByWebsiteId(_this.wid);
        });
    };
    PageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/components/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\n\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\"><i class=\"fas fa-chevron-left\"></i></a>\n\t<div class=\"sw-90-width\">\n\t\t<a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\"><b>New Page</b></a>\n\t</div>\n\t<button [disabled]=\"f.invalid\" type=\"submit\" form=\"pageForm\" class=\"btn sw-button-to-a sw-color-black float-right\" >\n\t\t<i class=\"fas fa-check\"></i>\n\t</button>\n</nav>\n\n\n<div class=\"container-fluid\">\n\t<form id=\"pageForm\" (ngSubmit)=\"create()\" #f=\"ngForm\">\n\t\t<div class=\"form-group\">\n\t\t\t<label><b>Name</b></label>\n\t\t\t<input class=\"form-control\" required ngModel #name=\"ngModel\" type=\"text\" name=\"name\" placeholder=\"Enter your page name...\">\n\t\t</div>\n\n\t\t<div *ngIf=\"name.invalid && name.touched\" class=\"alert alert-warning\">Name cannot be empty</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label><b>Description</b></label>\n\t\t\t<input class=\"form-control\" type=\"text\" name=\"description\" ngModel #description=\"ngModel\" placeholder=\"Enter your page description...\">\n\t\t</div>\n\n\t\t<button [disabled]=\"f.invalid\" class=\"btn btn-success btn-block\" type=\"submit\">Submit</button>\n\t\t<a class=\"btn btn-danger btn-block\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\">Cancel</a>\n\n\t</form>\n</div>\n<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\n\t<div class=\"sw-full-width\">\n\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t</div>\n</footer>"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
    };
    PageNewComponent.prototype.create = function () {
        this.name = this.pageForm.value.name;
        this.description = this.pageForm.value.description;
        var newPage = {
            _id: "",
            name: this.name,
            websiteId: this.wid,
            description: this.description
        };
        this.pageService.createPage(this.wid, newPage);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/components/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<h1>Login</h1>\n\t<div *ngIf=\"errorFlag\" class=\"alert alert-danger\">Invalid username or password</div>\n\t<form (ngSubmit)=\"login()\" #f=\"ngForm\">\n\t\t<div class=\"form-group\">\n\t\t\t<input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"Username\" required ngModel #username=\"ngModel\">\n\t\t</div>\n\t\t<span class=\"alert\" *ngIf=\"username.invalid && username.touched\">Please enter username!</span>\n\t\t<div class=\"form-group\">\n\t\t\t<input class=\"form-control\" required type=\"password\" name=\"password\" placeholder=\"Password\" ngModel #password=\"ngModel\">\n\t\t</div>\n\t\t<span class=\"alert\" *ngIf=\"password.invalid && password.touched\">Please enter password!</span>\n\t\t<button class=\"btn btn-primary btn-block\" [disabled]=\"f.invalid\" type=\"submit\">Login</button>\n\t\t<button class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</button>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByCredentials(this.username, this.password);
        if (user) {
            //navigate to profile
            this.errorFlag = false;
            this.router.navigate(['user', user._id]);
        }
        else {
            this.errorFlag = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<nav class=\"navbar navbar-dark bg-primary fixed-top\">\n\t\t<a class=\"navbar-brand\" routerLink=\"user/:uid\"><b>Profile</b></a>\n\t\t<button class=\"btn sw-color-white sw-button-to-a\" type=\"submit\" form=\"profileForm\" [disabled]=\"f.invalid\"><i class=\"fas fa-check\"></i></button>\n\t</nav>\n\t<div class=\"container-fluid\">\n\t\t<div *ngIf=\"usernameTaken\" class=\"alert alert-danger\">Username is taken, please try another one.</div>\n\t\t<div *ngIf=\"submitSuccess\" class=\"alert alert-success\">Update successfully!</div>\n\t\t<form (ngSubmit)=\"update()\" id=\"profileForm\" #f=\"ngForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"username\"><b>Username</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"username\" required ngModel=\"{{user.username}}\" #username=\"ngModel\" placeholder=\"example\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"email\"><b>Email</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"email\" name=\"email\" ngModel=\"{{user.email}}\" #email=\"ngModel\" placeholder=\"example@email.com\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"firstName\"><b>First Name</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"firstName\" ngModel=\"{{user.firstName}}\" #firstName=\"ngModel\" placeholder=\"Alice\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"lastName\"><b>Last Name</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"lastName\" ngModel=\"{{user.lastName}}\" #lastname=\"ngModel\" placeholder=\"Wang\">\n\t\t\t</div>\n\t\t\t<a class=\"btn btn-primary btn-block\" routerLink=\"/user/{{uid}}/website\">Websites</a>\n\t\t\t<a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Logout</a>\n\t\t</form>\n\t</div>\n\t<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a routerLink=\"user/:uid\" class=\"sw-color-white float-right\" ><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</nav>"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.activatedRoute.params.subscribe(
        // 	function info(params){
        // 		this.uid = params['uid'];
        // 		this.user = this.userService.findUserById(this.uid);
        // 		this.username = this.user.username;
        // 		this.email = this.user.email;
        // 		this.firstName = this.user.firstName;
        // 		this.lastName = this.user.lastName;
        // }.bind(this));
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.user = _this.userService.findUserById(_this.uid);
            _this.username = _this.user.username;
            _this.email = _this.user.email;
            _this.firstName = _this.user.firstName;
            _this.lastName = _this.user.lastName;
            _this.oldUsername = _this.user.username;
        });
    };
    ProfileComponent.prototype.update = function () {
        this.username = this.profileForm.value.username;
        this.email = this.profileForm.value.email;
        this.firstName = this.profileForm.value.firstName;
        this.lastName = this.profileForm.value.lastName;
        //check if the new username was taken or the username was not changed
        var aUser = this.userService.findUserByUsername(this.username);
        if (aUser && this.oldUsername !== this.username) {
            this.usernameTaken = true;
            this.submitSuccess = false;
        }
        else {
            var updatedUser = {
                _id: this.user._id,
                username: this.username,
                password: this.user.password,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email
            };
            this.userService.updateUser(this.uid, updatedUser);
            this.usernameTaken = false;
            this.submitSuccess = true;
            console.log(this.userService.users);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t\t<h1>Register</h1>\n\t\t<div class=\"alert alert-danger\" *ngIf=\"usernameError\">\n\t\t\tUsername is already taken, please try another one.\t\t\n\t\t</div>\n\t\t<div class=\"alert alert-danger\" *ngIf=\"passwordError\">\n\t\t\tTwo passwords are not matched!\t\t\t\n\t\t</div>\n\t\t<form (ngSubmit)=\"register()\" #f=\"ngForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"username\" required ngModel #username=\"ngModel\" placeholder=\"Username\">\n\t\t\t</div>\n\t\t\t<span class=\"alert\" *ngIf=\"username.invalid && username.touched\">Please enter username!</span>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input class=\"form-control\" type=\"password\" name=\"password\" required  ngModel #password=\"ngModel\" placeholder=\"Password\">\n\t\t\t</div>\n\t\t\t<span class=\"alert\" *ngIf=\"password.invalid && password.touched\">Please enter password!</span>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input class=\"form-control\" type=\"password\" name=\"verifyPassword\" required ngModel #verifyPassword=\"ngModel\" placeholder=\"Verify Password\">\n\t\t\t</div>\n\t\t\t<span class=\"alert\" *ngIf=\"verifyPassword.invalid && verifyPassword.touched\">Please verify password!</span>\n\t\t\t<button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"f.invalid\">Register</button>\n\t\t\t<button class=\"btn btn-danger btn-block\" routerLink=\"/login\">Cancel</button>\n\t\t</form>\n\t</div>\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        if (this.password !== this.verifyPassword) {
            this.passwordError = true;
            this.usernameError = false;
        }
        else {
            this.passwordError = false;
            var user = this.userService.findUserByUsername(this.username);
            if (user) {
                this.usernameError = true;
            }
            else {
                this.usernameError = false;
                this.passwordError = false;
                var newUser = {
                    _id: "",
                    username: this.username,
                    password: this.password,
                    firstName: "",
                    lastName: "",
                    email: ""
                };
                this.userService.createUser(newUser);
                var id = this.userService.findUserByUsername(this.username)._id;
                this.router.navigate(['user', id]);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n\t<nav class=\"row navbar navbar-dark bg-primary fixed-top\">\n\t\t<!-- Left Navbar -->\n\t\t<div class=\"col-sm-4 d-none d-md-block\">\n\t\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t<a class=\"sw-color-white sw-left-padding\" routerLink=\"/user/{{uid}}/website\"><b>Websites</b></a>\n\t\t\t<a class=\"sw-color-white float-right\" routerLink=\"/user/{{uid}}/website/new\"><i class=\"fas fa-plus\"></i></a>\n\t\t</div>\n\t\t<!-- Right Navbar -->\n\t\t<div class=\"col-md-8\">\n\t\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website/{{wid}}\"><b>Edit Website</b></a>\n\t\t\t<button class=\"btn sw-color-white float-right sw-button-to-a\" type=\"submit\" form=\"websiteForm\"><i class=\"fas fa-check\"></i></button>\n\t\t</div>\n\t</nav>\n\t<div class=\"row\">\n\t\t<!-- Left Website List -->\n\t\t<div class=\"col-md-4 d-none d-md-block\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t<li class=\"list-group-item\" *ngFor =\"let website of websites\">\n\t\t\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n\t\t\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- Right Form -->\n\t\t<div class=\"col-md-8\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<form id=\"websiteForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label><b>Name</b></label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Enter your website name\" required ngModel=\"{{website.name}}\" #name=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"alert alert-warning\" *ngIf=\"name.invalid && name.touched\">Name cannot be empty</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label><b>Description</b></label>\n\t\t\t\t\t\t<textarea rows=\"5\" class=\"form-control\" name=\"description\" placeholder=\"Describe your website here\" ngModel=\"{{website.description}}\" #description=\"ngModel\"></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button (click)=\"delete()\" type=\"button\" class=\"btn btn-danger\">Delete</button>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary float-right\">Update</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n\t<footer class=\"navbar fixed-bottom navbar-dark bg-primary\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/:uid\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</footer>"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.websites = _this.websiteService.findWebsitesByUser(_this.uid);
            _this.website = _this.websiteService.findWebsiteById(_this.wid);
            _this.name = _this.website.name;
            _this.description = _this.website.description;
        });
    };
    WebsiteEditComponent.prototype.update = function () {
        this.name = this.websiteForm.value.name;
        this.description = this.websiteForm.value.description;
        var updatedWeb = {
            _id: this.wid,
            name: this.name,
            developerId: this.uid,
            description: this.description
        };
        this.websiteService.updateWebsite(this.wid, updatedWeb);
        this.router.navigate(['user', this.uid, 'website']);
    };
    WebsiteEditComponent.prototype.delete = function () {
        this.websiteService.deleteWebsite(this.wid);
        this.router.navigate(['user', this.uid, 'website']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WebsiteEditComponent.prototype, "websiteForm", void 0);
    WebsiteEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-dark bg-primary\">\n\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t<div class=\"sw-90-width\">\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website\"><b>Websites</b></a>\n\t\t</div>\n\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website/new\"><i class=\"fas fa-plus\"></i></a>\n\t</nav>\n\t<!-- websites list -->\n\t<div class=\"container-fluid\">\n\t\t<ul class=\"list-group\">\n\t\t\t<li class=\"list-group-item\" *ngFor =\"let website of websites\">\n\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\n\t<footer class=\"navbar fixed-bottom navbar-dark bg-primary\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</footer>"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websites = _this.websiteService.findWebsitesByUser(_this.uid);
        });
    };
    WebsiteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/components/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n\t<nav class=\"row navbar navbar-dark bg-primary fixed-top\">\n\t\t<!-- Left Navbar -->\n\t\t<div class=\"col-sm-4 d-none d-md-block\">\n\t\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t<a class=\"sw-color-white sw-left-padding\" routerLink=\"/user/{{uid}}/website\"><b>Websites</b></a>\n\t\t\t<a class=\"sw-color-white float-right\" routerLink=\"/user/{{uid}}/website/new\"><i class=\"fas fa-plus\"></i></a>\n\t\t</div>\n\t\t<!-- Right Navbar -->\n\t\t<div class=\"col-md-8\">\n\t\t\t<a class=\"sw-color-white\" routerLink=\"/user/{{uid}}/website/new\"><b>New Website</b></a>\n\t\t\t<button class=\"btn sw-color-white float-right sw-button-to-a\" type=\"submit\" form=\"websiteForm\" [disabled]=\"f.invalid\"><i class=\"fas fa-check\"></i></button>\n\t\t</div>\n\t</nav>\n\t<div class=\"row\">\n\t\t<!-- Left Website List -->\n\t\t<div class=\"col-md-4 d-none d-md-block\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t<li class=\"list-group-item\" *ngFor =\"let website of websites\">\n\t\t\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n\t\t\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- Right Form -->\n\t\t<div class=\"col-md-8\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<form id=\"websiteForm\" (ngSubmit)=\"create()\" #f=\"ngForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label><b>Name</b></label>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Enter your website name\" required ngModel #name=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"alert alert-warning\" *ngIf=\"name.invalid && name.touched\">Name cannot be empty</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label><b>Description</b></label>\n\t\t\t\t\t\t<textarea rows=\"5\" class=\"form-control\" name=\"description\" placeholder=\"Describe your website here\" ngModel #description=\"ngModel\"></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a routerLink=\"/user/{{uid}}/website\" class=\"btn btn-danger\">Cancel</a>\n\t\t\t\t\t<button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-success float-right\">Submit</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n\t<footer class=\"navbar fixed-bottom navbar-dark bg-primary\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/:uid\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</footer>"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websites = _this.websiteService.findWebsitesByUser(_this.uid);
        });
    };
    WebsiteNewComponent.prototype.create = function () {
        this.name = this.websiteForm.value.name;
        this.description = this.websiteForm.value.description;
        var newWebsite = {
            _id: "",
            name: this.name,
            developerId: "",
            description: this.description
        };
        this.websiteService.createWebsite(this.uid, newWebsite);
        this.router.navigate(['user', this.uid, 'website']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WebsiteNewComponent.prototype, "websiteForm", void 0);
    WebsiteNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_1__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n\t<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/:uid/website/:wid/page/:pid/widget\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t<div class=\"sw-95-width\">\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"/user/:uid/website/:wid/page/:pid/widget/new\"><b>Choose Widget</b></a>\n\t\t</div>\n\t</nav>\n\t<div class=\"container-fluid\">\n\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Header</a></li>\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Label</a></li>\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">HTML</a></li>\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Text Input</a></li>\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Link</a></li>\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Button</a></li>\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Image</a></li>\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">YouTube</a></li>\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Data Table</a></li>\n\t\t\t<li class=\"list-group-item\"><a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Repeater</a></li>\n\t\t</ul>\n\t</div>\n\t<!-- footer -->\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/:uid\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
    };
    WidgetChooserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\r\n\t<!-- Heading -->\r\n\t<div *ngSwitchCase=\"'HEADING'\">\r\n\t\t<app-widget-header></app-widget-header>\r\n\t</div>\r\n\t<!-- Image -->\r\n\t<div *ngSwitchCase=\"'IMAGE'\">\r\n\t\t<app-widget-image></app-widget-image>\r\n\t</div>\r\n\t<!-- Youtube -->\r\n\t<div *ngSwitchCase=\"'YOUTUBE'\">\r\n\t\t<app-widget-youtube></app-widget-youtube>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
        });
    };
    WidgetEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_1__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n\t<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t<div class=\"sw-90-width\">\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><b>Edit Widget</b></a>\n\t\t</div>\n\t\t<button [disabled]=\"f.invalid\" type=\"submit\" form=\"widgetForm\" class=\"btn sw-button-to-a sw-color-black float-right\" ><i class=\"fas fa-check\"></i></button>\n\t</nav>\n\t<!-- form -->\n\t<div class=\"container-fluid\">\n\t\t<form id=\"widgetForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Name</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" ngModel=\"{{widget.name}}\" #name=\"ngModel\" placeholder=\"Enter your widget name...\">\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Text</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"text\" ngModel=\"{{widget.text}}\" required #text=\"ngModel\" placeholder=\"Enter your widget text...\">\n\t\t\t</div>\n\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"text.invalid && text.touched\">Text can't be empty!</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Size</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"number\" name=\"size\" ngModel=\"{{widget.size}}\" required #size=\"ngModel\" placeholder=\"Enter your widget text...\">\n\t\t\t</div>\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"size.invalid && size.touched\">Size can't be empty!</div>\n\t\t\t<button [disabled]=\"f.invalid\" class=\"btn btn-primary btn-block\" type=\"submit\">Submit</button>\n\t\t\t<button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"remove()\" >Delete</button>\n\t\t</form>\n\t</div>\n\t<!-- footer -->\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/:uid\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, activitedRoute, router) {
        this.widgetService = widgetService;
        this.activitedRoute = activitedRoute;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activitedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
        });
    };
    WidgetHeaderComponent.prototype.update = function () {
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.size = this.widgetForm.value.size;
        var updatedWidget = {
            _id: this.wgid,
            name: this.name,
            widgetType: this.widget.widgetType,
            pageId: this.pid,
            size: this.size,
            text: this.text
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetHeaderComponent.prototype.remove = function () {
        this.widgetService.deleteWidget(this.wgid);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WidgetHeaderComponent.prototype, "widgetForm", void 0);
    WidgetHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n\t<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t<div class=\"sw-90-width\">\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"user/{{uid}}/website/:wid/page/{{pid}}/widget/new\"><b>Edit Widget</b></a>\n\t\t</div>\n\t\t<button [disabled]=\"f.invalid\" type=\"submit\" form=\"widgetForm\" class=\"btn sw-button-to-a sw-color-black float-right\" ><i class=\"fas fa-check\"></i></button>\n\t</nav>\n\t<!-- form -->\n\t<div class=\"container-fluid\">\n\t\t<form id=\"widgetForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Name</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" ngModel=\"{{widget.name}}\" #name=\"ngModel\" placeholder=\"Enter your widget name...\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Text</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"text\" ngModel=\"{{widget.text}}\" #text=\"ngModel\" placeholder=\"Enter your widget text...\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>URL</b></label>\n\t\t\t\t<input class=\"form-control\" required ngModel=\"{{widget.url}}\" #url=\"ngModel\" type=\"text\" name=\"url\" placeholder=\"https://www.google.com\">\n\t\t\t</div>\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"url.invalid && url.touched\">Url can't be empty!</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Width</b></label>\n\t\t\t\t<input class=\"form-control\" required ngModel=\"{{widget.width}}\" #width=\"ngModel\"  type=\"text\" name=\"width\" placeholder=\"100%\">\n\t\t\t</div>\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"width.invalid && width.touched\">Width can't be empty!</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Upload</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"file\" name=\"upload\" placeholder=\"100%\">\n\t\t\t</div>\n\t\t\t<a class=\"btn btn-secondary btn-block\" href=\"#\">Upload Image</a>\n\t\t\t<button type=\"submit\" [disabled]=\"f.invalid\" class=\"btn btn-primary btn-block\">Submit</button>\n\t\t\t<button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"remove()\">Delete</button>\n\t\t</form>\n\t</div>\n\t<!-- footer -->\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
        });
    };
    WidgetImageComponent.prototype.remove = function () {
        this.widgetService.deleteWidget(this.wgid);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetImageComponent.prototype.update = function () {
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.url = this.widgetForm.value.url;
        this.width = this.widgetForm.value.width;
        var updatedWidget = {
            _id: this.wgid,
            name: this.name,
            text: this.text,
            url: this.url,
            width: this.width,
            pageId: this.pid,
            widgetType: this.widget.widgetType
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WidgetImageComponent.prototype, "widgetForm", void 0);
    WidgetImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n\t<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t<div class=\"sw-90-width\">\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><b>Edit Widget</b></a>\n\t\t</div>\n\t\t<button [disabled]=\"f.invalid\" type=\"submit\" form=\"widgetForm\" class=\"btn sw-button-to-a sw-color-black float-right\" ><i class=\"fas fa-check\"></i></button>\n\t</nav>\n\t<!-- form -->\n\t<div class=\"container-fluid\">\n\t\t<form id=\"widgetForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Name</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" ngModel=\"{{widget.name}}\" #name=\"ngModel\" placeholder=\"Enter your widget name...\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Text</b></label>\n\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"text\" ngModel=\"{{widget.text}}\" #text=\"ngModel\" placeholder=\"Enter your widget text...\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>URL</b></label>\n\t\t\t\t<input class=\"form-control\" required ngModel=\"{{widget.url}}\" #url=\"ngModel\" type=\"text\" name=\"url\" placeholder=\"https://www.google.com\">\n\t\t\t</div>\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"url.invalid && url.touched\">Url can't be empty!</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label><b>Width</b></label>\n\t\t\t\t<input class=\"form-control\" required ngModel=\"{{widget.width}}\" #width=\"ngModel\"  type=\"text\" name=\"width\" placeholder=\"100%\">\n\t\t\t</div>\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"width.invalid && width.touched\">Width can't be empty!</div>\n\t\t\t<button type=\"submit\" [disabled]=\"f.invalid\" class=\"btn btn-primary btn-block\">Submit</button>\n\t\t\t<button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"remove()\">Delete</button>\n\t\t</form>\n\t</div>\n\t<!-- footer -->\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
        });
    };
    WidgetYoutubeComponent.prototype.remove = function () {
        this.widgetService.deleteWidget(this.wgid);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetYoutubeComponent.prototype.update = function () {
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.url = this.widgetForm.value.url;
        this.width = this.widgetForm.value.width;
        var updatedWidget = {
            _id: this.wgid,
            name: this.name,
            text: this.text,
            url: this.url,
            width: this.width,
            pageId: this.pid,
            widgetType: this.widget.widgetType
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "widgetForm", void 0);
    WidgetYoutubeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n\t<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/:uid/website/:wid/page\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t<div class=\"sw-90-width\">\n\t\t\t<a class=\"navbar-brand float-left\" routerLink=\"/user/:uid/website/:wid/page/:pid/widget\"><b>Widgets</b></a>\n\t\t</div>\n\t\t<a class=\"sw-color-black\" routerLink=\"/user/:uid/website/:wid/page/:pid/widget/new\"><i class=\"fas fa-plus\"></i></a>\n\t</nav>\n\t<!-- Widgets -->\n\t<div class=\"container-fluid\">\n\t\t<!-- Heading -->\n\t\t<div>\n\t\t\t<div class=\"sw-absolute-right\">\n\t\t\t\t<a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t\t<a href=\"#\"><i class=\"fas fa-bars\"></i></a>\n\t\t\t</div>\n\t\t\t<h3>Hello</h3>\n\t\t</div>\n\t\t<!-- Heading -->\n\t\t<div>\n\t\t\t<div class=\"sw-absolute-right\">\n\t\t\t\t<a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t\t<a href=\"#\"><i class=\"fas fa-bars\"></i></a>\n\t\t\t</div>\n\t\t\t<h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>\n\t\t</div>\n\t\t<!-- Image -->\n\t\t<div>\n\t\t\t<div class=\"sw-absolute-right\">\n\t\t\t\t<a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t\t<a href=\"#\"><i class=\"fas fa-bars\"></i></a>\n\t\t\t</div>\n\t\t\t<img width=\"100%\" class=\"d-lg-none\" src=\"https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg\">\n\t\t\t<img width=\"50%\" class=\"d-none d-lg-block\" src=\"https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg\">\n\t\t</div>\n\t\t<!-- Heading -->\n\t\t<div>\n\t\t\t<div class=\"sw-absolute-right\">\n\t\t\t\t<a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t\t<a href=\"#\"><i class=\"fas fa-bars\"></i></a>\n\t\t\t</div>\n\t\t\t<h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\tconsequat. <a href=\"https://www.google.com\">Duis aute irure dolor</a> in reprehenderit in voluptate velit esse\n\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>\n\t\t</div>\n\t\t<!-- Heading -->\n\t\t<div>\n\t\t\t<div class=\"sw-absolute-right\">\n\t\t\t\t<a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t\t<a href=\"#\"><i class=\"fas fa-bars\"></i></a>\n\t\t\t</div>\n\t\t\t<h5>Bye ByeByeByeByeByeByeByeByeByeByeBye</h5>\n\t\t</div>\n\t\t<!-- Youtube -->\n\t\t<div>\n\t\t\t<div class=\"sw-absolute-right\">\n\t\t\t\t<a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t\t<a href=\"#\"><i class=\"fas fa-bars\"></i></a>\n\t\t\t</div>\n\t\t\t<div class=\"d-lg-none embed-responsive embed-responsive-16by9\">\n\t\t\t\t<iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/2WDTNeQagrA\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t\t</div>\n\t\t\t<div class=\"d-none d-lg-block embed-responsive embed-responsive-16by9 sw-50-width\">\n\t\t\t\t<iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/2WDTNeQagrA\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- heading -->\n\t\t<div>\n\t\t\t<div class=\"sw-absolute-right\">\n\t\t\t\t<a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t\t<a href=\"#\"><i class=\"fas fa-bars\"></i></a>\n\t\t\t</div>\n\t\t\t<h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>\n\t\t</div>\n\t</div>\n\t<!-- footer -->\n\t<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a href=\"#\" class=\"btn btn-primary\">publish</a>\n\t\t\t<a href=\"#\" class=\"btn btn-warning\">Preview</a>\n\t\t\t<a class=\"navbar-brand float-right\" routerLink=\"/user/:uid\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</footer>"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent() {
    }
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// injecting service into module
var PageService = /** @class */ (function () {
    function PageService() {
        this.pages = [
            { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
            { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
            { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
        ];
    }
    // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
    PageService.prototype.createPage = function (websiteId, page) {
        page._id = Math.floor(Math.random() * 10000).toString();
        page.websiteId = websiteId;
        this.pages.push(page);
        return page;
    };
    // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var result = [];
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i].websiteId === websiteId) {
                result.push(this.pages[i]);
            }
        }
        return result;
    };
    //  retrieves the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.findPageById = function (pageId) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageId) {
                return this.pages[i];
            }
        }
    };
    // updates the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.updatePage = function (pageId, page) {
        var oldPage = this.findPageById(pageId);
        var index = this.pages.indexOf(oldPage);
        this.pages[index].name = page.name;
        this.pages[index].description = page.description;
    };
    //  removes the page from local pages array whose _id matches the pageId parameter
    PageService.prototype.deletePage = function (pageId) {
        var oldPage = this.findPageById(pageId);
        var index = this.pages.indexOf(oldPage);
        this.pages.splice(index, 1);
    };
    PageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// injecting service into module
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com" },
            { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com" },
            { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com" },
            { _id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org" }
        ];
    }
    UserService.prototype.createUser = function (user) {
        user._id = Math.floor(Math.random() * 10000).toString();
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        // for (let x = 0; x < this.users.length; x++) {
        //     if (this.users[x].username === username) {  
        //       return this.users[x]; 
        //     }
        //   }
        return this.users.find(function (user) {
            return user.username === username;
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username && this.users[x].password === password) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.updateUser = function (userId, user) {
        var oldUser = this.findUserById(userId);
        var index = this.users.indexOf(oldUser);
        this.users[index].username = user.username;
        this.users[index].password = user.password;
        this.users[index].firstName = user.firstName;
        this.users[index].lastName = user.lastName;
        this.users[index].email = user.email;
    };
    UserService.prototype.deleteUser = function (userId) {
        var oldUser = this.findUserById(userId);
        var index = this.users.indexOf(oldUser);
        this.users.splice(index, 1);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// injecting service into module
var WebsiteService = /** @class */ (function () {
    function WebsiteService() {
        this.websites = [
            { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
            { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
            { _id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },
            { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
            { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
            { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
            { _id: "789", name: "Chess", developerId: "234", description: "Lorem" },
        ];
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website._id = Math.floor(Math.random() * 10000).toString();
        website.developerId = userId;
        this.websites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var result = [];
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i].developerId === userId) {
                result.push(this.websites[i]);
            }
        }
        return result;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                return this.websites[i];
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var oldWeb = this.findWebsiteById(websiteId);
        var index = this.websites.indexOf(oldWeb);
        this.websites[index].name = website.name;
        this.websites[index].description = website.description;
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var web = this.findWebsiteById(websiteId);
        var index = this.websites.indexOf(web);
        this.websites.splice(index, 1);
    };
    WebsiteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// injecting service into module
var WidgetService = /** @class */ (function () {
    function WidgetService() {
        this.widgets = [
            { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO" },
            { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
            { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "https://www.w3schools.com/w3css/img_lights.jpg" },
            { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>" },
            { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
            { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
            { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>" }
        ];
    }
    // adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = Math.floor(Math.random() * Math.floor(10000)).toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var result = [];
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i].pageId === pageId) {
                result.push(this.widgets[i]);
            }
        }
        return result;
    };
    // retrieves the widget in local widgets array whose _id matches the widgetId parameterretrieves the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetId) {
                return this.widgets[i];
            }
        }
    };
    // updates the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var oldWidget = this.findWidgetById(widgetId);
        var index = this.widgets.indexOf(oldWidget);
        this.widgets[index].size = widget.size;
        this.widgets[index].text = widget.text;
        this.widgets[index].width = widget.width;
        this.widgets[index].url = widget.url;
    };
    // removes the widget from local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var oldWidget = this.findWidgetById(widgetId);
        var index = this.widgets.indexOf(oldWidget);
        this.widgets.splice(index, 1);
    };
    WidgetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\swang\Desktop\assignment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map