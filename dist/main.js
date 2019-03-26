(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/auth/auth.module": [
		"./src/app/pages/auth/auth.module.ts",
		"pages-auth-auth-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/auth/login/login.component */ "./src/app/pages/auth/login/login.component.ts");
/* harmony import */ var _pages_dash_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dash/home/home.component */ "./src/app/pages/dash/home/home.component.ts");





var routes = [
    {
        path: 'plan',
        loadChildren: './pages/auth/auth.module#AuthModule'
    },
    {
        path: 'login',
        component: _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'home',
        component: _pages_dash_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: '**',
        redirectTo: 'plan'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-side-bar></app-side-bar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'apm';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _services_httpInterceptor_httpFactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/httpInterceptor/httpFactory */ "./src/app/services/httpInterceptor/httpFactory.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/credentials/credential.service */ "./src/app/services/credentials/credential.service.ts");
/* harmony import */ var _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/auth/login/login.component */ "./src/app/pages/auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_material_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/material/material.module */ "./src/app/components/material/material.module.ts");
/* harmony import */ var _pages_dash_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/dash/home/home.component */ "./src/app/pages/dash/home/home.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pages_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _pages_dash_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _components_material_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production })
            ],
            providers: [
                _services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_11__["CredentialService"],
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                {
                    provide: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
                    useFactory: _services_httpInterceptor_httpFactory__WEBPACK_IMPORTED_MODULE_9__["HttpFactory"],
                    deps: [_angular_http__WEBPACK_IMPORTED_MODULE_3__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offers/offers.component */ "./src/app/components/offers/offers.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "./src/app/components/material/material.module.ts");






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"],
                _offers_offers_component__WEBPACK_IMPORTED_MODULE_4__["OffersComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            exports: [
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"],
                _offers_offers_component__WEBPACK_IMPORTED_MODULE_4__["OffersComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/material/material.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/material/material.module.ts ***!
  \********************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/components/offers/offers.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/offers/offers.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"plan-slide\">\n  <!-- <div class=\"plan-header\">\n    <div class=\"plan-head-row\">\n      <div class=\"plan-head-col\">\n        <h1>Order Your Future</h1>\n        <h2>Customize your Package Now</h2>\n      </div>\n      <div class=\"plan-head-col\">\n        <span class=\"active\">1</span>\n        <span>2</span>\n        <span>3</span>\n      </div>\n    </div>\n  </div> -->\n  <div class=\"plan-sections\">\n    <div class=\"plans-row plans-head-row\">\n      <div class=\"plans-col\">\n        <h3>Features Included</h3>\n      </div>\n      <div class=\"plans-col\">\n        <h3>AMP “LITE”</h3>\n        <span class=\"big-heading\">$199</span>\n        <span class=\"small-heading\">Per Month</span>\n      </div>\n      <div class=\"plans-col\">\n        <h3>AMP “PRO”</h3>\n        <span class=\"big-heading\">$399</span>\n        <span class=\"small-heading\">Per Month</span>\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Includes ALL Advanced Features+</div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/cross.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Custom Practice Branded APP</div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">2 Way Chat Feature</div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Appointment Request*</div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">About Us & Location Feature\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Social Links Feature\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Practice Referral Feature\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">$199 One Time Setup & On-Boarding\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Practice Software Integration API\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/cross.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Appointment Booking with Confirmation\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/cross.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Digital Forms Integration\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/cross.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Drip Marketing Integration </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/cross.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Emergency Messaging </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/cross.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">$299 One Time Setup & On-Boarding </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/cross.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row plans-foot-row\">\n      <div class=\"plans-col\"></div>\n      <div class=\"plans-col\">\n        <button mat-button class=\"blue-btn\" (click)=\"selectPlan(packages[0])\">Get Started</button>\n      </div>\n      <div class=\"plans-col\">\n        <button mat-button class=\"blue-btn\" (click)=\"selectPlan(packages[1])\">Get Started</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/offers/offers.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/offers/offers.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plan-slide .plan-sections {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n  border-radius: 15px;\n  margin-top: 25px; }\n  .plan-slide .plan-sections .plans-row {\n    display: flex;\n    text-align: center;\n    border-bottom: 1px solid rgba(190, 190, 190, 0.77); }\n  .plan-slide .plan-sections .plans-row .plans-col {\n      width: 30%;\n      padding: 10px 15px;\n      color: #9b9b9b; }\n  .plan-slide .plan-sections .plans-row .plans-col:first-child {\n        width: 40%;\n        text-align: left; }\n  .plan-slide .plan-sections .plans-row .plans-col:nth-child(2) {\n        border-left: 2px solid rgba(190, 190, 190, 0.77);\n        border-right: 2px solid rgba(190, 190, 190, 0.77); }\n  .plan-slide .plan-sections .plans-row .plans-col img {\n        width: 17px; }\n  .plan-slide .plan-sections .plans-row .plans-col .blue-btn {\n        background: #39d4ff;\n        padding: 15px 50px;\n        font-size: 18px;\n        display: inline-block;\n        color: #fff;\n        border-radius: 5px;\n        text-transform: uppercase; }\n  .plan-slide .plan-sections .plans-row.plans-head-row {\n      align-items: flex-end;\n      border: none; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col {\n        padding: 25px;\n        color: #4a4a4a;\n        border-bottom: 2px solid rgba(190, 190, 190, 0.77); }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col h3 {\n          margin: 10px 0; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col:nth-child(2) {\n          background: #39d4ff;\n          border-top-left-radius: 15px;\n          color: #fff;\n          border: none;\n          position: relative; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col:nth-child(2) .big-heading {\n            font-size: 52px;\n            display: block; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col:nth-child(2) .small-heading {\n            font-size: 18px;\n            display: block; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col:nth-child(3) {\n          position: relative;\n          background: #18c1f0;\n          border-top-left-radius: 15px;\n          border-top-right-radius: 15px;\n          color: #fff;\n          border: none;\n          margin-top: -25px; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col:nth-child(3) h3 {\n            margin: 20px 0 25px; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col:nth-child(3)::before {\n            content: \"\";\n            background: url('popular.png') no-repeat 0 0/contain;\n            position: absolute;\n            width: 125px;\n            height: 100px;\n            right: -5px;\n            top: -13px; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col:nth-child(3) .big-heading {\n            font-size: 52px;\n            display: block; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col:nth-child(3) .small-heading {\n            font-size: 18px;\n            display: block; }\n  .plan-slide .plan-sections .plans-row.plans-foot-row {\n      border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvQW5ndWxhci9BTVAvc3JjL2FwcC9jb21wb25lbnRzL29mZmVycy9vZmZlcnMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvSGFtemEvRG9jdW1lbnRzL0FuZ3VsYXIvQU1QL3NyYy90aGVtZS9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFUSx1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0VBSnhCO0lBTVksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrREFBa0QsRUFBQTtFQVI5RDtNQVVnQixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGNBQXlCLEVBQUE7RUFaekM7UUFjb0IsVUFBVTtRQUNWLGdCQUFnQixFQUFBO0VBZnBDO1FBa0JvQixnREFBZ0Q7UUFDaEQsaURBQWlELEVBQUE7RUFuQnJFO1FBc0JvQixXQUFXLEVBQUE7RUF0Qi9CO1FBeUJvQixtQkFBNkI7UUFDN0Isa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQix5QkFBeUIsRUFBQTtFQS9CN0M7TUFtQ2dCLHFCQUFxQjtNQUNyQixZQUFZLEVBQUE7RUFwQzVCO1FBc0NvQixhQUFhO1FBQ2IsY0FBc0I7UUFDdEIsa0RBQWtELEVBQUE7RUF4Q3RFO1VBMEN3QixjQUFjLEVBQUE7RUExQ3RDO1VBNkN3QixtQkN4Q047VUR5Q00sNEJBQTRCO1VBQzVCLFdBQVc7VUFDWCxZQUFZO1VBQ1osa0JBQWtCLEVBQUE7RUFqRDFDO1lBbUQ0QixlQUFlO1lBQ2YsY0FBYyxFQUFBO0VBcEQxQztZQXVENEIsZUFBZTtZQUNmLGNBQWMsRUFBQTtFQXhEMUM7VUE0RHdCLGtCQUFrQjtVQUNsQixtQkN2RFA7VUR3RE8sNEJBQTRCO1VBQzVCLDZCQUE2QjtVQUM3QixXQUFXO1VBQ1gsWUFBWTtVQUNaLGlCQUFpQixFQUFBO0VBbEV6QztZQW9FNEIsbUJBQW1CLEVBQUE7RUFwRS9DO1lBdUU0QixXQUFXO1lBQ1gsb0RBQXNFO1lBQ3RFLGtCQUFrQjtZQUNsQixZQUFZO1lBQ1osYUFBYTtZQUNiLFdBQVc7WUFDWCxVQUFVLEVBQUE7RUE3RXRDO1lBZ0Y0QixlQUFlO1lBQ2YsY0FBYyxFQUFBO0VBakYxQztZQW9GNEIsZUFBZTtZQUNmLGNBQWMsRUFBQTtFQXJGMUM7TUEyRmdCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2ZmZXJzL29mZmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcyc7XG4ucGxhbi1zbGlkZSB7XG4gICAgLnBsYW4tc2VjdGlvbnMge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgIC5wbGFucy1yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE5MCwgMTkwLCAxOTAsIDAuNzcpO1xuICAgICAgICAgICAgLnBsYW5zLWNvbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigxNTUsIDE1NSwgMTU1KTtcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYmEoMTkwLCAxOTAsIDE5MCwgMC43Nyk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMTkwLCAxOTAsIDE5MCwgMC43Nyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmx1ZS1idG4ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNTcsIDIxMiwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLnBsYW5zLWhlYWQtcm93IHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IC8vIGhlaWdodDogMjE1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIC5wbGFucy1jb2wge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDc0LCA3NCwgNzQpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgxOTAsIDE5MCwgMTkwLCAwLjc3KTtcbiAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWVUaGVtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iaWctaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNtYWxsLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZGFya0JsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcG9wdWxhci5wbmcpIG5vLXJlcGVhdCAwIDAvY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5iaWctaGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNtYWxsLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYucGxhbnMtZm9vdC1yb3cge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvL0FsbCB0aGUgY29sb3JzIHVzZWQgaW4gdGhlIGFwcCB3aWxsIGJlIHByZXNlbnQgaGVyZS5cbiRwcmltYXJ5OiNmZmZmZmY7XG4kdGhlbWU6I2ZhZmFmYTtcbiRib3JkZXI6I2VjZWNlYztcbiRiYXJGb250Q29sb3I6IzliOWI5YjtcbiRzaGFkb3c6I2JlYmViZWM1O1xuJGJsdWVUaGVtZTojMzlkNGZmO1xuJGRhcmtCbHVlOiMxOGMxZjA7XG4kZ3JleVRoZW1lOiNkOGQ4ZDg7XG4kaGVhZGluZ05vcm1Db2xvcjojNGE0YTRhO1xuJHNtYWxsU2l6ZToxMnB4O1xuJGhlYWRpbmdTaXplOjE0cHg7Il19 */"

/***/ }),

/***/ "./src/app/components/offers/offers.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/offers/offers.component.ts ***!
  \*******************************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OffersComponent = /** @class */ (function () {
    function OffersComponent() {
        this.packages = [
            {
                "_id": "5c7d80eacdfe5c4078983c1c",
                "name": "AMP 'Lite'",
                "price": 199,
                "__v": 0
            },
            {
                "_id": "5c7d84289757a441a5b38677",
                "name": "AMP 'Pro'",
                "price": 399,
                "__v": 0
            }
        ];
        this.selectedPlan = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    OffersComponent.prototype.ngOnInit = function () {
    };
    OffersComponent.prototype.selectPlan = function (plan) {
        var _this = this;
        setTimeout(function () {
            _this.selectedPlan.emit(plan);
        }, 300);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('plan'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], OffersComponent.prototype, "selectedPlan", void 0);
    OffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers',
            template: __webpack_require__(/*! ./offers.component.html */ "./src/app/components/offers/offers.component.html"),
            styles: [__webpack_require__(/*! ./offers.component.scss */ "./src/app/components/offers/offers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OffersComponent);
    return OffersComponent;
}());



/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"logo\">\n    <img src=\"assets/img/logo.png\" alt=\"\">\n  </div>\n  <div class=\"options\">\n    <img src=\"assets/img/settings.png\" alt=\"\">\n    <p>Dashboard</p>\n  </div>\n  <div class=\"options\">\n    <img src=\"assets/img/scheduling.png\" alt=\"\">\n    <p>Scheduling</p>\n  </div>\n  <div class=\"options\">\n    <img src=\"assets/img/chat.png\" alt=\"\">\n    <p>Chat</p>\n  </div>\n  <div class=\"options\">\n    <img src=\"assets/img/social.png\" alt=\"\">\n    <p>Social</p>\n  </div>\n  <div class=\"options\">\n    <img src=\"assets/img/forms.png\" alt=\"\">\n    <p>Forms</p>\n  </div>\n  <div class=\"options\">\n    <img src=\"assets/img/marketing.png\" alt=\"\">\n    <p>Marketing</p>\n  </div>\n  <div class=\"options\">\n    <img src=\"assets/img/settings.png\" alt=\"\">\n    <p>Setting</p>\n  </div>\n  <div class=\"options\">\n    <img src=\"assets/img/support.png\" alt=\"\">\n    <p>Support</p>\n  </div>\n  <div class=\"options\" (click)=\"login()\">\n    <img src=\"assets/img/refer.png\" alt=\"\">\n    <p>Login</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: inline-block;\n  width: 90px;\n  height: auto;\n  background: #ffffff;\n  overflow: hidden;\n  box-shadow: 0px 0px 10px 0px #bebebec5; }\n  .container .logo, .container .options {\n    height: 12vh;\n    text-align: center;\n    border-bottom: 1px solid #ececec;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-right: 1px solid #ececec; }\n  .container .logo img, .container .options img {\n      width: 6vh; }\n  .container .options {\n    height: 10vh; }\n  .container .options img {\n      width: 3vh; }\n  .container .options p {\n      margin: 2px 0 0 0;\n      color: #9b9b9b;\n      font-size: 1.5vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvQW5ndWxhci9BTVAvc3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0hhbXphL0RvY3VtZW50cy9Bbmd1bGFyL0FNUC9zcmMvdGhlbWUvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJDSlk7RURLWixnQkFBZ0I7RUFDaEIsc0NDRmEsRUFBQTtFREpqQjtJQVFRLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0NDUk87SURTUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsK0JDYk8sRUFBQTtFREZmO01BaUJZLFVBQVUsRUFBQTtFQWpCdEI7SUFzQlEsWUFBWSxFQUFBO0VBdEJwQjtNQXdCWSxVQUFVLEVBQUE7RUF4QnRCO01BMkJZLGlCQUFpQjtNQUNqQixjQ3pCUztNRDBCVCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzXCI7XG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCAkc2hhZG93O1xuICAgIC5sb2dvIHtcbiAgICAgICAgaGVpZ2h0OiAxMnZoO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJvcmRlcjtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA2dmg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm9wdGlvbnMge1xuICAgICAgICBAZXh0ZW5kIC5sb2dvO1xuICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogM3ZoO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAycHggMCAwIDA7XG4gICAgICAgICAgICBjb2xvcjogJGJhckZvbnRDb2xvcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41dmg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy9BbGwgdGhlIGNvbG9ycyB1c2VkIGluIHRoZSBhcHAgd2lsbCBiZSBwcmVzZW50IGhlcmUuXG4kcHJpbWFyeTojZmZmZmZmO1xuJHRoZW1lOiNmYWZhZmE7XG4kYm9yZGVyOiNlY2VjZWM7XG4kYmFyRm9udENvbG9yOiM5YjliOWI7XG4kc2hhZG93OiNiZWJlYmVjNTtcbiRibHVlVGhlbWU6IzM5ZDRmZjtcbiRkYXJrQmx1ZTojMThjMWYwO1xuJGdyZXlUaGVtZTojZDhkOGQ4O1xuJGhlYWRpbmdOb3JtQ29sb3I6IzRhNGE0YTtcbiRzbWFsbFNpemU6MTJweDtcbiRoZWFkaW5nU2l6ZToxNHB4OyJdfQ== */"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(router) {
        this.router = router;
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent.prototype.login = function () {
        this.router.navigate(["/login"]);
    };
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.scss */ "./src/app/components/side-bar/side-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/init/constants.service.ts":
/*!*******************************************!*\
  !*** ./src/app/init/constants.service.ts ***!
  \*******************************************/
/*! exports provided: ConstantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantsService", function() { return ConstantsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConstantsService = /** @class */ (function () {
    function ConstantsService() {
        this.LOCAL_ENDPOINT = 'http://localhost:5000';
        this.LIVE_ENDPOINT = 'https://mongodb-multi-instance-test.herokuapp.com';
        this.API_ENDPOINT = this.LOCAL_ENDPOINT;
        this.Image_base_path = '';
    }
    ConstantsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConstantsService);
    return ConstantsService;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"wrapper\">\n    <div class=\"form-slide\">\n      <div class=\"form-head-row\">\n        <span class=\"back\">\n          <img src=\"assets/img/back.png\" alt=\"icon\" />\n          <span>\n            Back\n          </span>\n        </span>\n      </div>\n      <div class=\"form-area\">\n        <h3>Login to your dashboard!</h3>\n        <form>\n\n          <div class=\"form-row\">\n            <div class=\"form-two-col\">\n              <div class=\"cus-inp-row\">\n                <label>Email</label>\n                <input type=\"text\" [(ngModel)]=\"user.email\" name=\"address\" [ngClass]=\"{'active': user.email != ''}\" />\n              </div>\n              <div class=\"cus-inp-row\">\n                <label>Password</label>\n                <input type=\"password\" [(ngModel)]=\"user.password\" name=\"unit\"\n                  [ngClass]=\"{'active': user.password != ''}\" />\n              </div>\n              <div class=\"cus-check-row\">\n                <input type=\"checkbox\" id=\"cus-check\" />\n                <label for=\"cus-check\"><span></span>REMEMBER ME</label>\n              </div>\n            </div>\n            <div class=\"form-two-col\">\n              <div class=\"\">\n                <div class=\"cus-btn fb-btn\">\n                  FACEBOOK LOGIN\n                </div>\n                <div class=\"cus-btn google-btn\">\n                  GOOGLE LOGIN\n                </div>\n                <!-- <div class=\"cus-btn inp-btn\">\n                  <a href=\"#\">INTUiT LOGIN</a>\n                </div> -->\n              </div>\n            </div>\n          </div>\n          <span class=\"blue-btn\" (click)=\"login()\">NEXT</span>\n          <p class=\"forgot-text\">Forgot Your Password</p>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: inline-block;\n  vertical-align: top;\n  width: calc(100% - 120px);\n  height: 100%; }\n  .container .wrapper {\n    width: 1700px;\n    margin: 15px auto; }\n  @media (max-width: 1900px) {\n      .container .wrapper {\n        width: 1375px; } }\n  @media (max-width: 1500px) {\n      .container .wrapper {\n        width: 975px; } }\n  @media (max-width: 1100px) {\n      .container .wrapper {\n        width: 100%; } }\n  .container .form-slide {\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n    border-radius: 15px;\n    margin-top: 25px;\n    padding: 50px; }\n  .container .form-slide .form-area {\n      max-width: 700px;\n      margin: 25px auto; }\n  .container .form-slide .form-area h3 {\n        color: #4a4a4a;\n        text-align: center; }\n  .container .form-slide .form-area form .form-row {\n        display: flex;\n        justify-content: space-between;\n        margin: 25px 0; }\n  @media (max-width: 1100px) {\n          .container .form-slide .form-area form .form-row {\n            flex-wrap: wrap; } }\n  .container .form-slide .form-area form .form-one-col {\n        width: 100%; }\n  .container .form-slide .form-area form .form-two-col {\n        width: 50%; }\n  .container .form-slide .form-area form .form-two-col:first-child {\n          padding-right: 25px;\n          border-right: 1px solid #eeeeee; }\n  @media (max-width: 1100px) {\n            .container .form-slide .form-area form .form-two-col:first-child {\n              padding: 0; } }\n  .container .form-slide .form-area form .form-two-col:last-child {\n          padding-left: 25px; }\n  @media (max-width: 1100px) {\n            .container .form-slide .form-area form .form-two-col:last-child {\n              padding: 0; } }\n  @media (max-width: 1100px) {\n          .container .form-slide .form-area form .form-two-col {\n            width: 100%;\n            border: none; } }\n  .container .form-slide .form-area form .form-two-col .cus-inp-row {\n          margin-bottom: 25px; }\n  .container .form-slide .form-area form .form-two-col .cus-check-row {\n          display: flex;\n          align-items: center;\n          padding-bottom: 50px; }\n  .container .form-slide .form-area form .form-two-col .cus-check-row label span {\n            border: 3px solid #18c1f0;\n            border-radius: 50%;\n            width: 30px;\n            height: 30px;\n            display: inline-block;\n            vertical-align: middle;\n            margin-right: 10px; }\n  .container .form-slide .form-area form .form-two-col .cus-check-row input {\n            display: none; }\n  .container .form-slide .form-area form .form-two-col .cus-check-row input:checked ~ label span {\n              background: #18c1f0; }\n  .container .form-slide .form-area form .form-two-col .cus-btn {\n          text-align: center;\n          display: block;\n          border-radius: 5px;\n          margin: 25px 0;\n          text-transform: uppercase;\n          padding: 15px 10px;\n          color: #fff; }\n  .container .form-slide .form-area form .form-two-col .cus-btn.fb-btn {\n            background: #496399; }\n  .container .form-slide .form-area form .form-two-col .cus-btn.google-btn {\n            background: #4686f1; }\n  .container .form-slide .form-area form .form-two-col .cus-btn.inp-btn {\n            background: #385fbc; }\n  .container .form-slide .form-area form .form-three-col {\n        width: 32%; }\n  .container .form-slide .form-area form label {\n        display: block;\n        color: #9b9b9b; }\n  .container .form-slide .form-area form input {\n        width: 100%;\n        border: 1px solid transparent;\n        background: #f1f4f4;\n        padding: 15px 10px;\n        border-radius: 7px;\n        outline: none; }\n  .container .form-slide .form-area form input.active {\n        background: #fff;\n        border: 1px solid #eeeeee;\n        box-shadow: 0 3px 10px rgba(192, 192, 192, 0.5); }\n  .container .form-slide .form-area .blue-btn {\n        background: #39d4ff;\n        padding: 15px 50px;\n        font-size: 18px;\n        color: #fff;\n        border-radius: 5px;\n        text-transform: uppercase;\n        width: 250px;\n        text-align: center;\n        display: block;\n        margin: 50px auto 25px; }\n  @media (max-width: 1100px) {\n          .container .form-slide .form-area .blue-btn {\n            width: auto; } }\n  .container .form-slide .form-area .forgot-text {\n        color: #39d4ff;\n        display: block;\n        text-align: center;\n        font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvQW5ndWxhci9BTVAvc3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWSxFQUFBO0VBSmhCO0lBTVEsYUFBYTtJQUNiLGlCQUFpQixFQUFBO0VBQ2pCO01BUlI7UUFTWSxhQUFhLEVBQUEsRUFRcEI7RUFORztNQVhSO1FBWVksWUFBWSxFQUFBLEVBS25CO0VBSEc7TUFkUjtRQWVZLFdBQVcsRUFBQSxFQUVsQjtFQWpCTDtJQW1CUSx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhLEVBQUE7RUF0QnJCO01Bd0JZLGdCQUFnQjtNQUNoQixpQkFBaUIsRUFBQTtFQXpCN0I7UUEyQmdCLGNBQXNCO1FBQ3RCLGtCQUFrQixFQUFBO0VBNUJsQztRQWdDb0IsYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixjQUFjLEVBQUE7RUFDZDtVQW5DcEI7WUFvQ3dCLGVBQWUsRUFBQSxFQUV0QjtFQXRDakI7UUF3Q29CLFdBQVcsRUFBQTtFQXhDL0I7UUEyQ29CLFVBQVUsRUFBQTtFQTNDOUI7VUE2Q3dCLG1CQUFtQjtVQUNuQiwrQkFBMEMsRUFBQTtFQUMxQztZQS9DeEI7Y0FnRDRCLFVBQVUsRUFBQSxFQUVqQjtFQWxEckI7VUFvRHdCLGtCQUFrQixFQUFBO0VBQ2xCO1lBckR4QjtjQXNENEIsVUFBVSxFQUFBLEVBRWpCO0VBQ0Q7VUF6RHBCO1lBMER3QixXQUFXO1lBQ1gsWUFBWSxFQUFBLEVBK0NuQjtFQTFHakI7VUE4RHdCLG1CQUFtQixFQUFBO0VBOUQzQztVQWlFd0IsYUFBYTtVQUNiLG1CQUFtQjtVQUNuQixvQkFBb0IsRUFBQTtFQW5FNUM7WUFzRWdDLHlCQUFtQztZQUNuQyxrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFlBQVk7WUFDWixxQkFBcUI7WUFDckIsc0JBQXNCO1lBQ3RCLGtCQUFrQixFQUFBO0VBNUVsRDtZQWdGNEIsYUFBYSxFQUFBO0VBaEZ6QztjQW1Gb0MsbUJBQTZCLEVBQUE7RUFuRmpFO1VBeUZ3QixrQkFBa0I7VUFDbEIsY0FBYztVQUNkLGtCQUFrQjtVQUNsQixjQUFjO1VBQ2QseUJBQXlCO1VBQ3pCLGtCQUFrQjtVQUNsQixXQUFXLEVBQUE7RUEvRm5DO1lBaUc0QixtQkFBNEIsRUFBQTtFQWpHeEQ7WUFvRzRCLG1CQUE2QixFQUFBO0VBcEd6RDtZQXVHNEIsbUJBQTRCLEVBQUE7RUF2R3hEO1FBNEdvQixVQUFVLEVBQUE7RUE1RzlCO1FBK0dvQixjQUFjO1FBQ2QsY0FBeUIsRUFBQTtFQWhIN0M7UUFtSG9CLFdBQVc7UUFDWCw2QkFBNkI7UUFDN0IsbUJBQThCO1FBQzlCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsYUFBYSxFQUFBO0VBeEhqQztRQTRId0IsZ0JBQWdCO1FBQ2hCLHlCQUFvQztRQUNwQywrQ0FBK0MsRUFBQTtFQTlIdkU7UUFtSWdCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLHNCQUFzQixFQUFBO0VBQ3RCO1VBN0loQjtZQThJb0IsV0FBVyxFQUFBLEVBRWxCO0VBaEpiO1FBa0pnQixjQUFjO1FBQ2QsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEyMHB4KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLndyYXBwZXIge1xuICAgICAgICB3aWR0aDogMTcwMHB4O1xuICAgICAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE5MDBweCkge1xuICAgICAgICAgICAgd2lkdGg6IDEzNzVweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gICAgICAgICAgICB3aWR0aDogOTc1cHg7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZvcm0tc2xpZGUge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIC5mb3JtLWFyZWEge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNzQsIDc0LCA3NCk7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgLmZvcm0tcm93IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mb3JtLW9uZS1jb2wge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZvcm0tdHdvLWNvbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyMzgsIDIzOCwgMjM4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY3VzLWlucC1yb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY3VzLWNoZWNrLXJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjQsIDE5MywgMjQwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmNoZWNrZWR+bGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNCwgMTkzLCAyNDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jdXMtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAmLmZiLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDczLCA5OSwgMTUzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJi5nb29nbGUtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNzAsIDEzNCwgMjQxKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJi5pbnAtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNTYsIDk1LCAxODgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZvcm0tdGhyZWUtY29sIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigxNTUsIDE1NSwgMTU1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0NCwgMjQ0KTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzgsIDIzOCwgMjM4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsdWUtYnRuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzlkNGZmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggNTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDUwcHggYXV0byAyNXB4O1xuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcmdvdC10ZXh0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM5ZDRmZjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB9XG4vLyB9XG4vLyBAbWVkaWEgKG1heC13aWR0aDogMTkwMHB4KSB7XG4vLyAgICAgLndyYXBwZXIge1xuLy8gICAgICAgICB3aWR0aDogMTM3NXB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgfVxuLy8gfVxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xuLy8gICAgIC53cmFwcGVyIHtcbi8vICAgICAgICAgd2lkdGg6IDk3NXB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgfVxuLy8gfVxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuLy8gICAgIC53cmFwcGVyIHtcbi8vICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbi8vICAgICB9XG4vLyB9XG4vLyBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4vLyAgICAgLmZvcm0tcm93IHtcbi8vICAgICAgICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4vLyAgICAgfVxuLy8gICAgIC5mb3JtLXR3by1jb2wge1xuLy8gICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuLy8gICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4vLyAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuLy8gICAgIH1cbi8vICAgICAuYmx1ZS1idG4ge1xuLy8gICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuLy8gICAgIH1cbi8vIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
        this.user = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        if (this.user.email == '' || this.user.password == '') {
            alert("Please don't leave any field blank");
            return;
        }
        var params = {
            email: this.user.email,
            pwd: this.user.password
        };
        this.auth.login(params).subscribe(function (success) {
            alert("Login Successful");
        }, function (error) {
            alert("wrong email or password.");
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/dash/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/dash/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>\n    You are logged in\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/pages/dash/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dash/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: inline-block;\n  vertical-align: top;\n  width: calc(100% - 120px);\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvQW5ndWxhci9BTVAvc3JjL2FwcC9wYWdlcy9kYXNoL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2gvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEyMHB4KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/dash/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dash/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/dash/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/dash/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_init_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/init/constants.service */ "./src/app/init/constants.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, constants) {
        this.http = http;
        this.constants = constants;
    }
    AuthService.prototype.signUp = function (params) {
        var url = this.constants.API_ENDPOINT + '/api/dentist/auth/v2/register';
        var response = this.http.post(url, params, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        return response;
    };
    AuthService.prototype.pay = function (params) {
        var url = this.constants.API_ENDPOINT + '/api/dentist/auth/v2/pay-init';
        var response = this.http.post(url, params, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        return response;
    };
    AuthService.prototype.login = function (params) {
        var url = this.constants.API_ENDPOINT + '/api/dentist/auth/login';
        var response = this.http.post(url, params, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        return response;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], src_app_init_constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/credentials/credential.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/credentials/credential.service.ts ***!
  \************************************************************/
/*! exports provided: CredentialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialService", function() { return CredentialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CredentialService = /** @class */ (function () {
    function CredentialService() {
    }
    CredentialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CredentialService);
    return CredentialService;
}());



/***/ }),

/***/ "./src/app/services/httpInterceptor/httpFactory.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/httpInterceptor/httpFactory.ts ***!
  \*********************************************************/
/*! exports provided: HttpFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpFactory", function() { return HttpFactory; });
/* harmony import */ var _intercepted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intercepted */ "./src/app/services/httpInterceptor/intercepted.ts");

function HttpFactory(xhrBackend, requestOptions) {
    return new _intercepted__WEBPACK_IMPORTED_MODULE_0__["InterceptedHttp"](xhrBackend, requestOptions);
}


/***/ }),

/***/ "./src/app/services/httpInterceptor/intercepted.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/httpInterceptor/intercepted.ts ***!
  \*********************************************************/
/*! exports provided: InterceptedHttp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptedHttp", function() { return InterceptedHttp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var InterceptedHttp = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InterceptedHttp, _super);
    function InterceptedHttp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    InterceptedHttp.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options);
        // .catch(err => {
        //     try {
        //         var error = JSON.parse(err._body);
        //         if (err.name == "TimeoutError") {
        //             return Observable.throw({ status: 420 })
        //         } else if (error.errorMessage == 'Session Expired') {
        //             return Observable.throw({ status: 'session', message: 'session expired' });
        //         } else
        //             return Observable.throw(err);
        //     } catch (exception) {
        //         return Observable.throw(err);
        //     }
        // });
    };
    InterceptedHttp.prototype.get = function (url, options) {
        return _super.prototype.get.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.post = function (url, body, options) {
        return _super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.delete = function (url, options) {
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
        }
        if (options.headers == null) {
            options.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        }
        options.headers.append('app_key', 'MdeDKSXifoYhQZYpEvh+Eol2PvuPWBuL7rVjaHRO7j0=');
        var _token = localStorage.getItem('token');
        if (_token)
            options.headers.set('session_token', _token);
        options.headers.set("Cache-Control", "no-cache");
        return options;
    };
    InterceptedHttp = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["ConnectionBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]])
    ], InterceptedHttp);
    return InterceptedHttp;
}(_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]));



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Hamza/Documents/Angular/AMP/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map