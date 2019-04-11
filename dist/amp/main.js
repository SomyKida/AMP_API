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
	],
	"./pages/auth/login/login.module": [
		"./src/app/pages/auth/login/login.module.ts",
		"pages-auth-login-login-module"
	],
	"./pages/dash/chat/chat.module": [
		"./src/app/pages/dash/chat/chat.module.ts",
		"pages-dash-chat-chat-module"
	],
	"./pages/dash/home/home.module": [
		"./src/app/pages/dash/home/home.module.ts",
		"pages-dash-home-home-module"
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
/* harmony import */ var _services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/guards/auth-guard.service */ "./src/app/services/guards/auth-guard.service.ts");
/* harmony import */ var _services_guards_sess_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/guards/sess-guard.service */ "./src/app/services/guards/sess-guard.service.ts");





var routes = [
    {
        path: 'plan',
        loadChildren: './pages/auth/auth.module#AuthModule',
        canActivate: [_services_guards_sess_guard_service__WEBPACK_IMPORTED_MODULE_4__["SessGuardService"]]
    },
    {
        path: 'chat',
        loadChildren: './pages/dash/chat/chat.module#ChatModule',
        canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'login',
        loadChildren: './pages/auth/login/login.module#LoginModule',
        canActivate: [_services_guards_sess_guard_service__WEBPACK_IMPORTED_MODULE_4__["SessGuardService"]]
    },
    {
        path: 'home',
        loadChildren: './pages/dash/home/home.module#HomeModule',
        canActivate: [_services_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
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
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
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
        this.title = 'AMP';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_material_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/material/material.module */ "./src/app/components/material/material.module.ts");
/* harmony import */ var _auxilaries_aux_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auxilaries/aux.service */ "./src/app/auxilaries/aux.service.ts");
/* harmony import */ var _services_guards_sess_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/guards/sess-guard.service */ "./src/app/services/guards/sess-guard.service.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _components_material_material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production })
            ],
            providers: [
                _services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_11__["CredentialService"],
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _auxilaries_aux_service__WEBPACK_IMPORTED_MODULE_15__["AuxService"],
                _services_guards_sess_guard_service__WEBPACK_IMPORTED_MODULE_16__["SessGuardService"],
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

/***/ "./src/app/auxilaries/aux.service.ts":
/*!*******************************************!*\
  !*** ./src/app/auxilaries/aux.service.ts ***!
  \*******************************************/
/*! exports provided: AuxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuxService", function() { return AuxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_modals_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modals/alert/alert.component */ "./src/app/components/modals/alert/alert.component.ts");




var AuxService = /** @class */ (function () {
    function AuxService(dialog) {
        this.dialog = dialog;
    }
    AuxService.prototype.showAlert = function (message, title) {
        var dialogRef = this.dialog.open(_components_modals_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], {
            data: { message: message, title: title }
        });
    };
    AuxService.prototype.errorResponse = function (error) {
        var message = JSON.parse(error._body);
        this.showAlert(message.errorMessage, "ERROR");
    };
    AuxService.prototype.validate_email = function (email) {
        var format = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
        return (email.match(format));
    };
    AuxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AuxService);
    return AuxService;
}());



/***/ }),

/***/ "./src/app/components/alita/alita.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/alita/alita.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alitaWrapper\">\n  <div class=\"botArea\">\n    <div class=\"botIntro\">\n      <div class=\"face\"></div>\n      <div class=\"content\">\n        <span class=\"line\"></span>\n        <h2>Meet Alita!</h2>\n        <p>\n          She will help you get everything set up with your new account!\n        </p>\n        <button (click)=\"manual()\" mat-raised-button>Self Setup</button>\n      </div>\n    </div>\n    <div class=\"chatArea\">\n      <ul>\n        <li>\n          <div class=\"someone\">\n            <p>I want some help Alita!</p>\n            <img src=\"assets/img/alita.png\" alt=\"\">\n          </div>\n        </li>\n\n        <li>\n          <div class=\"myself\">\n            <img src=\"assets/img/alita.png\" alt=\"\">\n            <p>Welcome to your App Dashboard, My name is Alita and i will be assisting you through the set-up process. It will be quick and easy, I will ask you questions and all you need to do is answer them! If you need to pause the on-boarding setup at anytime, just press “Pause” or type “Pause” in the chat window and you can pick up right where we left off. Are you Ready to get started?</p>\n          </div>\n        </li>\n      </ul>\n      <form>\n        <input type=\"text\" placeholder=\"Type Something\">\n        <button type=\"button\" mat-raised-button>Send</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/alita/alita.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/alita/alita.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alitaWrapper {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  padding: 5%;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available; }\n  .alitaWrapper .botArea {\n    display: flex;\n    flex-direction: row;\n    width: -webkit-fill-available;\n    height: -webkit-fill-available; }\n  .alitaWrapper .botArea .botIntro {\n      flex: 0.4;\n      display: flex;\n      width: -webkit-fill-available;\n      height: -webkit-fill-available;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n      border-right: 2px solid #ececec; }\n  .alitaWrapper .botArea .botIntro .face {\n        width: 253px;\n        height: 253px;\n        border-radius: 80px;\n        overflow: hidden;\n        text-align: center;\n        background: transparent;\n        background-image: url('alita.png');\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover; }\n  .alitaWrapper .botArea .botIntro .content {\n        margin-top: 20px;\n        text-align: center; }\n  .alitaWrapper .botArea .botIntro .content .line {\n          display: inline-block;\n          width: 50px;\n          height: 2px;\n          background: #18c1f0; }\n  .alitaWrapper .botArea .botIntro .content h2 {\n          color: #000000;\n          font-size: 20px;\n          font-weight: bold; }\n  .alitaWrapper .botArea .botIntro .content p {\n          display: inline-block;\n          width: 70%;\n          font-size: 16px;\n          color: #747474; }\n  .alitaWrapper .botArea .botIntro .content button {\n          width: 50%;\n          background: #18c1f0;\n          color: #ffffff;\n          text-transform: uppercase;\n          letter-spacing: 1.5px;\n          font-family: 'ProximaNova-Regular';\n          padding: 3%;\n          white-space: normal;\n          line-height: 1; }\n  .alitaWrapper .botArea .chatArea {\n      flex: 0.6;\n      flex-direction: column;\n      justify-content: flex-start;\n      padding: 0 5%; }\n  .alitaWrapper .botArea .chatArea ul {\n        width: 100%;\n        height: 90%;\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        overflow-y: auto;\n        overflow-x: hidden; }\n  .alitaWrapper .botArea .chatArea ul li {\n          margin-bottom: 10px; }\n  .alitaWrapper .botArea .chatArea ul li .someone, .alitaWrapper .botArea .chatArea ul li .myself {\n            text-align: right; }\n  .alitaWrapper .botArea .chatArea ul li .someone img, .alitaWrapper .botArea .chatArea ul li .myself img {\n              display: inline-block;\n              width: 10%;\n              border-radius: 50px;\n              vertical-align: middle; }\n  .alitaWrapper .botArea .chatArea ul li .someone p, .alitaWrapper .botArea .chatArea ul li .myself p {\n              display: inline-block;\n              padding: 3%;\n              font-size: 14px;\n              background: #33cd29;\n              margin: 0;\n              vertical-align: middle;\n              margin-right: 5px;\n              border-radius: 5px;\n              color: #ffffff;\n              max-width: 80%; }\n  .alitaWrapper .botArea .chatArea ul li .myself {\n            text-align: left; }\n  .alitaWrapper .botArea .chatArea ul li .myself img {\n              margin-right: 3px; }\n  .alitaWrapper .botArea .chatArea ul li .myself p {\n              background: #18c1f0;\n              color: #ffffff;\n              margin: 0; }\n  .alitaWrapper .botArea .chatArea form {\n        width: 100%;\n        height: 10%;\n        align-items: center;\n        display: flex;\n        justify-content: space-between; }\n  .alitaWrapper .botArea .chatArea form input {\n          background: #f1f4f4;\n          display: inline-block;\n          vertical-align: middle;\n          width: 75%;\n          border: none;\n          padding: 10px;\n          font-size: 14px;\n          padding-top: 15px;\n          padding-bottom: 15px; }\n  .alitaWrapper .botArea .chatArea form button {\n          display: inline-block;\n          vertical-align: middle;\n          width: 20%;\n          background: #18c1f0;\n          padding: 2px;\n          color: #ffffff;\n          font-size: 16px;\n          letter-spacing: 1.56px;\n          text-transform: uppercase;\n          border-radius: 10px;\n          font-family: 'ProximaNova-Regular'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy9hcHAvY29tcG9uZW50cy9hbGl0YS9hbGl0YS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy90aGVtZS9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLDhCQUE4QixFQUFBO0VBUGxDO0lBVVEsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsOEJBQThCLEVBQUE7RUFidEM7TUFnQlksU0FBUztNQUNULGFBQWE7TUFDYiw2QkFBNkI7TUFDN0IsOEJBQThCO01BQzlCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsc0JBQXNCO01BQ3RCLCtCQUErQixFQUFBO0VBdkIzQztRQTBCZ0IsWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFFdkIsa0NBQW9EO1FBQ3BELDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsc0JBQXNCLEVBQUE7RUFwQ3RDO1FBd0NnQixnQkFBZ0I7UUFDaEIsa0JBQWtCLEVBQUE7RUF6Q2xDO1VBNENvQixxQkFBcUI7VUFDckIsV0FBVztVQUNYLFdBQVc7VUFDWCxtQkMxQ0gsRUFBQTtFRExqQjtVQW1Eb0IsY0NuRFA7VURvRE8sZUFBZTtVQUNmLGlCQUFpQixFQUFBO0VBckRyQztVQXlEb0IscUJBQXFCO1VBQ3JCLFVBQVU7VUFDVixlQUFlO1VBQ2YsY0NyREssRUFBQTtFRFB6QjtVQWdFb0IsVUFBVTtVQUNWLG1CQzVESDtVRDZERyxjQUFjO1VBQ2QseUJBQXlCO1VBQ3pCLHFCQUFxQjtVQUNyQixrQ0FBa0M7VUFDbEMsV0FBVztVQUNYLG1CQUFtQjtVQUNuQixjQUFjLEVBQUE7RUF4RWxDO01BZ0ZZLFNBQVM7TUFDVCxzQkFBc0I7TUFDdEIsMkJBQTJCO01BQzNCLGFBQWEsRUFBQTtFQW5GekI7UUFzRmdCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsU0FBUztRQUNULFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQixFQUFBO0VBNUZsQztVQStGb0IsbUJBQW1CLEVBQUE7RUEvRnZDO1lBa0d3QixpQkFBaUIsRUFBQTtFQWxHekM7Y0FxRzRCLHFCQUFxQjtjQUNyQixVQUFVO2NBQ1YsbUJBQW1CO2NBQ25CLHNCQUFzQixFQUFBO0VBeEdsRDtjQTRHNEIscUJBQXFCO2NBQ3JCLFdBQVc7Y0FDWCxlQUFlO2NBQ2YsbUJDbEdWO2NEbUdVLFNBQVM7Y0FDVCxzQkFBc0I7Y0FDdEIsaUJBQWlCO2NBQ2pCLGtCQUFrQjtjQUNsQixjQUFjO2NBQ2QsY0FBYyxFQUFBO0VBckgxQztZQTJId0IsZ0JBQWdCLEVBQUE7RUEzSHhDO2NBOEg0QixpQkFBaUIsRUFBQTtFQTlIN0M7Y0FrSTRCLG1CQzdIWDtjRDhIVyxjQUFjO2NBQ2QsU0FBUyxFQUFBO0VBcElyQztRQTJJZ0IsV0FBVztRQUNYLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLDhCQUE4QixFQUFBO0VBL0k5QztVQWtKb0IsbUJDcElGO1VEcUlFLHFCQUFxQjtVQUNyQixzQkFBc0I7VUFDdEIsVUFBVTtVQUNWLFlBQVk7VUFDWixhQUFhO1VBQ2IsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixvQkFBb0IsRUFBQTtFQTFKeEM7VUE4Sm9CLHFCQUFxQjtVQUNyQixzQkFBc0I7VUFDdEIsVUFBVTtVQUNWLG1CQzVKSDtVRDZKRyxZQUFZO1VBQ1osY0FBYztVQUNkLGVBQWU7VUFDZixzQkFBc0I7VUFDdEIseUJBQXlCO1VBQ3pCLG1CQUFtQjtVQUNuQixrQ0FBa0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxpdGEvYWxpdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS92YXJpYWJsZXMnO1xuXG4uYWxpdGFXcmFwcGVyIHtcblxuICAgIGZsZXg6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG5cbiAgICAuYm90QXJlYSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG5cbiAgICAgICAgLmJvdEludHJvIHtcbiAgICAgICAgICAgIGZsZXg6IDAuNDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgICAgICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZWNlY2VjO1xuXG4gICAgICAgICAgICAuZmFjZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1M3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjUzcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogODBweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9hbGl0YS5wbmcpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIC5saW5lIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRkYXJrQmx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFyaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaGVhZGluZ05vcm1Db2xvcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZGFya0JsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYU5vdmEtUmVndWxhcic7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMlO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgLmNoYXRBcmVhIHtcbiAgICAgICAgICAgIGZsZXg6IDAuNjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDUlO1xuXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAgICAgICAgICAgICAuc29tZW9uZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNoYXRHcmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubXlzZWxmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgLnNvbWVvbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZGFya0JsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY2hhdElucHV0O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZGFya0JsdWU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNTZweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hTm92YS1SZWd1bGFyJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy9BbGwgdGhlIGNvbG9ycyB1c2VkIGluIHRoZSBhcHAgd2lsbCBiZSBwcmVzZW50IGhlcmUuXG4kcHJpbWFyeTojZmZmZmZmO1xuJGRhcms6IzAwMDAwMDtcbiR0aGVtZTojZmFmYWZhO1xuJGJvcmRlcjojZjVmNGY0O1xuJHNoYWRvdzojYmViZWJlYzU7XG4kYmx1ZVRoZW1lOiMzOWQ0ZmY7XG4kZGFya0JsdWU6IzE4YzFmMDtcbiRncmV5VGhlbWU6I2Q4ZDhkODtcbiRoZWFkaW5nTm9ybUNvbG9yOiM3NDc0NzQ7XG4kYmxvY2tPcHQ6I2M3YzdjNztcbiRiYWNrOiM5YjliOWI7XG4kc21hbGxTaXplOjEycHg7XG4kaGVhZGluZ1NpemU6MTRweDtcbiR2YWxpZGF0aW9uOiNkODA5MDliMztcbiRjaGF0R3JlZW46IzMzY2QyOTtcbiRjaGF0SW5wdXQ6I2YxZjRmNDtcbiRzaGFkb3dGb3JtdWxhOjAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLFxuMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSxcbjAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7Il19 */"

/***/ }),

/***/ "./src/app/components/alita/alita.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/alita/alita.component.ts ***!
  \*****************************************************/
/*! exports provided: AlitaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlitaComponent", function() { return AlitaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlitaComponent = /** @class */ (function () {
    function AlitaComponent() {
        this.proceed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AlitaComponent.prototype.ngOnInit = function () {
    };
    AlitaComponent.prototype.manual = function () {
        this.proceed.emit('manual');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('switch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlitaComponent.prototype, "proceed", void 0);
    AlitaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alita',
            template: __webpack_require__(/*! ./alita.component.html */ "./src/app/components/alita/alita.component.html"),
            styles: [__webpack_require__(/*! ./alita.component.scss */ "./src/app/components/alita/alita.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlitaComponent);
    return AlitaComponent;
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
/* harmony import */ var _modals_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/alert/alert.component */ "./src/app/components/modals/alert/alert.component.ts");
/* harmony import */ var _fab_fab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fab/fab.component */ "./src/app/components/fab/fab.component.ts");
/* harmony import */ var _alita_alita_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alita/alita.component */ "./src/app/components/alita/alita.component.ts");
/* harmony import */ var _manual_manual_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manual/manual.component */ "./src/app/components/manual/manual.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modals_pro_details_pro_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/pro-details/pro-details.component */ "./src/app/components/modals/pro-details/pro-details.component.ts");
/* harmony import */ var _modals_themes_themes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/themes/themes.component */ "./src/app/components/modals/themes/themes.component.ts");













var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"],
                _offers_offers_component__WEBPACK_IMPORTED_MODULE_4__["OffersComponent"],
                _modals_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"],
                _fab_fab_component__WEBPACK_IMPORTED_MODULE_7__["FabComponent"],
                _alita_alita_component__WEBPACK_IMPORTED_MODULE_8__["AlitaComponent"],
                _manual_manual_component__WEBPACK_IMPORTED_MODULE_9__["ManualComponent"],
                _modals_pro_details_pro_details_component__WEBPACK_IMPORTED_MODULE_11__["ProDetailsComponent"],
                _modals_themes_themes_component__WEBPACK_IMPORTED_MODULE_12__["ThemesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            exports: [
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"],
                _offers_offers_component__WEBPACK_IMPORTED_MODULE_4__["OffersComponent"],
                _modals_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"],
                _fab_fab_component__WEBPACK_IMPORTED_MODULE_7__["FabComponent"],
                _alita_alita_component__WEBPACK_IMPORTED_MODULE_8__["AlitaComponent"],
                _manual_manual_component__WEBPACK_IMPORTED_MODULE_9__["ManualComponent"],
                _modals_pro_details_pro_details_component__WEBPACK_IMPORTED_MODULE_11__["ProDetailsComponent"]
            ],
            entryComponents: [
                _modals_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"],
                _modals_pro_details_pro_details_component__WEBPACK_IMPORTED_MODULE_11__["ProDetailsComponent"],
                _modals_themes_themes_component__WEBPACK_IMPORTED_MODULE_12__["ThemesComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/fab/fab.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/fab/fab.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\" *ngIf=\"showDialog == true\">\n  <div class=\"fabDialogWrapper\">\n    <ul>\n      <li>\n        <div class=\"someone\">\n          <p>I want some help Alita!</p>\n          <span></span>\n        </div>\n      </li>\n\n      <li>\n        <div class=\"myself\">\n          <span></span>\n          <p>Hey John, No problem! What is it I can help you with?</p>\n        </div>\n      </li>\n    </ul>\n    <form>\n      <input type=\"text\" placeholder=\"Type Something\">\n      <button mat-button>Send Message</button>\n    </form>\n  </div>\n</div>\n<div class=\"fab\">\n  <div class=\"fabWrapper\">\n    <button mat-fab (click)=\"openDialog()\" [ngClass]=\"{'cross': showDialog}\"></button>\n    <p class=\"botName\">ALITA</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/fab/fab.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/fab/fab.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fab {\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n  width: 80px;\n  height: 60px; }\n  .fab .fabWrapper {\n    text-align: center; }\n  .fab .fabWrapper button {\n      background-color: #ffffff;\n      width: 70px;\n      height: 70px;\n      background-image: url('alitaLogo.png');\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 35px; }\n  .fab .fabWrapper button.cross {\n        background-image: url('multiply.png');\n        background-color: #18c1f0;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: 20px;\n        width: 60px;\n        height: 60px; }\n  .fab .fabWrapper .botName {\n      font-size: 16px;\n      color: #747474;\n      letter-spacing: 1.75px; }\n  .dialog {\n  position: fixed;\n  right: 50px;\n  bottom: 130px;\n  width: 250px;\n  height: 300px;\n  background: #ffffff;\n  border-radius: 10px;\n  box-shadow: 0 0 20px #bebebec5; }\n  .dialog .fabDialogWrapper {\n    width: -webkit-fill-available;\n    height: -webkit-fill-available;\n    padding-top: 0;\n    padding: 5%;\n    display: flex;\n    flex-direction: column; }\n  .dialog .fabDialogWrapper ul {\n      display: flex;\n      flex: 0.97;\n      margin: 0;\n      padding: 0;\n      list-style: none;\n      flex-direction: column;\n      overflow: scroll; }\n  .dialog .fabDialogWrapper ul li {\n        margin-bottom: 15px; }\n  .dialog .fabDialogWrapper ul li .someone, .dialog .fabDialogWrapper ul li .myself {\n          text-align: right; }\n  .dialog .fabDialogWrapper ul li .someone span, .dialog .fabDialogWrapper ul li .myself span {\n            display: inline-block;\n            width: 45px;\n            height: 45px;\n            border-radius: 50px;\n            vertical-align: middle;\n            background: url('alitaLogo.png');\n            background-repeat: no-repeat;\n            background-size: contain;\n            background-position: center; }\n  .dialog .fabDialogWrapper ul li .someone p, .dialog .fabDialogWrapper ul li .myself p {\n            width: 65%;\n            display: inline-block;\n            padding: 10px;\n            font-size: 14px;\n            background: #33cd29;\n            margin: 0;\n            vertical-align: middle;\n            margin-right: 5px;\n            border-radius: 5px;\n            letter-spacing: 0.25px;\n            color: #ffffff;\n            border-radius: 10px; }\n  .dialog .fabDialogWrapper ul li .myself {\n          text-align: left; }\n  .dialog .fabDialogWrapper ul li .myself img {\n            margin-right: 3px; }\n  .dialog .fabDialogWrapper ul li .myself p {\n            background: #18c1f0;\n            color: #ffffff;\n            margin: 0;\n            margin-left: 7px; }\n  .dialog .fabDialogWrapper form {\n      flex: 0.03;\n      flex-direction: column;\n      align-items: flex-end; }\n  .dialog .fabDialogWrapper form input {\n        width: -webkit-fill-available;\n        padding: 5%;\n        border: 1px solid #f5f4f4;\n        margin-bottom: 5%;\n        font-size: 14px;\n        border-radius: 5px; }\n  .dialog .fabDialogWrapper form button {\n        width: 100%;\n        background: #18c1f0;\n        color: #ffffff;\n        letter-spacing: 1.75px;\n        text-transform: uppercase;\n        font-size: 16px;\n        padding: 10px;\n        font-family: 'ProximaNova-Semibold'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy9hcHAvY29tcG9uZW50cy9mYWIvZmFiLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0hhbXphL0RvY3VtZW50cy9Ob2RlL0FNUF9BUEkvc3JjL3RoZW1lL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFMaEI7SUFTUSxrQkFBa0IsRUFBQTtFQVQxQjtNQVlZLHlCQUF5QjtNQUN6QixXQUFXO01BQ1gsWUFBWTtNQUNaLHNDQUF3RDtNQUN4RCwyQkFBMkI7TUFDM0IsNEJBQTRCO01BQzVCLHFCQUFxQixFQUFBO0VBbEJqQztRQXFCZ0IscUNBQXVEO1FBQ3ZELHlCQ2pCQztRRGtCRCwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsWUFBWSxFQUFBO0VBM0I1QjtNQWdDWSxlQUFlO01BQ2YsY0MxQmE7TUQyQmIsc0JBQXNCLEVBQUE7RUFLbEM7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJDNUNhLEVBQUE7RURvQ2pCO0lBV1EsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0IsRUFBQTtFQWhCOUI7TUFtQlksYUFBYTtNQUNiLFVBQVU7TUFDVixTQUFTO01BQ1QsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixzQkFBc0I7TUFDdEIsZ0JBQWdCLEVBQUE7RUF6QjVCO1FBNEJnQixtQkFBbUIsRUFBQTtFQTVCbkM7VUErQm9CLGlCQUFpQixFQUFBO0VBL0JyQztZQWtDd0IscUJBQXFCO1lBQ3JCLFdBQVc7WUFDWCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLHNCQUFzQjtZQUN0QixnQ0FBa0Q7WUFDbEQsNEJBQTRCO1lBQzVCLHdCQUF3QjtZQUN4QiwyQkFBMkIsRUFBQTtFQTFDbkQ7WUE4Q3dCLFVBQVU7WUFDVixxQkFBcUI7WUFDckIsYUFBYTtZQUNiLGVBQWU7WUFDZixtQkM1RU47WUQ2RU0sU0FBUztZQUNULHNCQUFzQjtZQUN0QixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLHNCQUFzQjtZQUN0QixjQUFjO1lBQ2QsbUJBQW1CLEVBQUE7RUF6RDNDO1VBK0RvQixnQkFBZ0IsRUFBQTtFQS9EcEM7WUFrRXdCLGlCQUFpQixFQUFBO0VBbEV6QztZQXNFd0IsbUJDeEdQO1lEeUdPLGNBQWM7WUFDZCxTQUFTO1lBQ1QsZ0JBQWdCLEVBQUE7RUF6RXhDO01BZ0ZZLFVBQVU7TUFDVixzQkFBc0I7TUFDdEIscUJBQXFCLEVBQUE7RUFsRmpDO1FBc0ZnQiw2QkFBNkI7UUFDN0IsV0FBVztRQUNYLHlCQzdIRDtRRDhIQyxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGtCQUFrQixFQUFBO0VBM0ZsQztRQStGZ0IsV0FBVztRQUNYLG1CQ2xJQztRRG1JRCxjQUFjO1FBQ2Qsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsYUFBYTtRQUNiLG1DQUFtQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYWIvZmFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzJztcblxuLmZhYiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICByaWdodDogNTBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG5cblxuICAgIC5mYWJXcmFwcGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9hbGl0YUxvZ28ucG5nKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDM1cHg7XG5cbiAgICAgICAgICAgICYuY3Jvc3Mge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL211bHRpcGx5LnBuZyk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtCbHVlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYm90TmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogJGhlYWRpbmdOb3JtQ29sb3I7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS43NXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDUwcHg7XG4gICAgYm90dG9tOiAxMzBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggJHNoYWRvdztcblxuICAgIC5mYWJEaWFsb2dXcmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4OiAwLjk3O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgICAgICAgICAuc29tZW9uZSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2FsaXRhTG9nby5wbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY2hhdEdyZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5teXNlbGYge1xuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kIC5zb21lb25lO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGRhcmtCbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBmbGV4OiAwLjAzO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuXG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRkYXJrQmx1ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS43NXB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hTm92YS1TZW1pYm9sZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIvL0FsbCB0aGUgY29sb3JzIHVzZWQgaW4gdGhlIGFwcCB3aWxsIGJlIHByZXNlbnQgaGVyZS5cbiRwcmltYXJ5OiNmZmZmZmY7XG4kZGFyazojMDAwMDAwO1xuJHRoZW1lOiNmYWZhZmE7XG4kYm9yZGVyOiNmNWY0ZjQ7XG4kc2hhZG93OiNiZWJlYmVjNTtcbiRibHVlVGhlbWU6IzM5ZDRmZjtcbiRkYXJrQmx1ZTojMThjMWYwO1xuJGdyZXlUaGVtZTojZDhkOGQ4O1xuJGhlYWRpbmdOb3JtQ29sb3I6Izc0NzQ3NDtcbiRibG9ja09wdDojYzdjN2M3O1xuJGJhY2s6IzliOWI5YjtcbiRzbWFsbFNpemU6MTJweDtcbiRoZWFkaW5nU2l6ZToxNHB4O1xuJHZhbGlkYXRpb246I2Q4MDkwOWIzO1xuJGNoYXRHcmVlbjojMzNjZDI5O1xuJGNoYXRJbnB1dDojZjFmNGY0O1xuJHNoYWRvd0Zvcm11bGE6MCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksXG4wIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLFxuMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTsiXX0= */"

/***/ }),

/***/ "./src/app/components/fab/fab.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/fab/fab.component.ts ***!
  \*************************************************/
/*! exports provided: FabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabComponent", function() { return FabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FabComponent = /** @class */ (function () {
    function FabComponent() {
        this.showDialog = false;
    }
    FabComponent.prototype.ngOnInit = function () {
    };
    FabComponent.prototype.openDialog = function () {
        this.showDialog = !this.showDialog;
    };
    FabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fab',
            template: __webpack_require__(/*! ./fab.component.html */ "./src/app/components/fab/fab.component.html"),
            styles: [__webpack_require__(/*! ./fab.component.scss */ "./src/app/components/fab/fab.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FabComponent);
    return FabComponent;
}());



/***/ }),

/***/ "./src/app/components/manual/manual.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/manual/manual.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"manualWrapper\">\n  <div class=\"form-slide\">\n    <div class=\"form-head-row\">\n      <span class=\"back\" (click)=\"previous()\" mat-button>\n        <img src=\"assets/img/back.png\" alt=\"icon\" />\n        <span>\n          Back\n        </span>\n      </span>\n    </div>\n    <div class=\"form-area\">\n      <h3 *ngIf=\"selectedTab == 0\">Practice Information</h3>\n      <h3 *ngIf=\"selectedTab == 1\">EMR/Software</h3>\n      <h3 *ngIf=\"selectedTab == 2\">Social</h3>\n      <form>\n        <ng-container *ngIf=\"selectedTab == 0\">\n          <div class=\"form-row\">\n            <div class=\"form-one-col\">\n              <label>Phone</label>\n              <input type=\"text\" placeholder=\"# Patients use to call office\" [(ngModel)]=\"stepOne.phone\"\n                (ngModelChange)=\"changeInFields('name')\" name=\"name\" />\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-two-col\">\n              <label>Email</label>\n              <input type=\"email\" [(ngModel)]=\"stepOne.email\" name=\"address\"\n                placeholder=\"# Email patients use to contact office\" (ngModelChange)=\"changeInFields('address')\" />\n            </div>\n            <div class=\"form-two-col\">\n              <label>Address</label>\n              <input type=\"text\" placeholder=\"# Physical Address of Practice\" [(ngModel)]=\"stepOne.address\" name=\"zip\"\n                (ngModelChange)=\"changeInFields('zipcode')\" />\n            </div>\n          </div>\n          <h3>Doctors Names</h3>\n          <div class=\"form-row\" *ngFor=\"let doctor of stepOne.docNames\">\n            <div class=\"form-two-col\">\n              <label>First Name</label>\n              <input type=\"text\" [(ngModel)]=\"doctor.fname\" [ngModelOptions]=\"{standalone: true}\" />\n            </div>\n            <div class=\"form-two-col\">\n              <label>Last Name</label>\n              <input type=\"text\" [(ngModel)]=\"doctor.lname\" [ngModelOptions]=\"{standalone: true}\" />\n            </div>\n          </div>\n          <button class=\"add-doc\" (click)=\"addDoc()\" mat-raised-button>Add Another Doctor</button>\n          <h3>Office Hours</h3>\n          <ng-container *ngFor=\"let din of stepOne.officeHours\">\n            <h4>{{din.day}}</h4>\n            <div class=\"form-row\">\n              <div class=\"form-three-col\">\n                <label>Opening Time</label>\n                <input type=\"time\" name=\"open\" [(ngModel)]=\"din.openTime\" (ngModelChange)=\"changeInFields('email')\" />\n              </div>\n              <div class=\"form-three-col\">\n                <label>Lunch Time</label>\n                <input type=\"time\" [(ngModel)]=\"din.lunchTime\" name=\"lunch\"\n                  (ngModelChange)=\"changeInFields('phoneNo')\" />\n              </div>\n              <div class=\"form-three-col\">\n                <label>Closing Time</label>\n                <input type=\"time\" [(ngModel)]=\"din.closeTime\" name=\"close\"\n                  (ngModelChange)=\"changeInFields('phoneNo')\" />\n              </div>\n            </div>\n          </ng-container>\n          <button class=\"blue-btn\" (click)=\"toStep(1)\" mat-raised-button>NEXT</button>\n        </ng-container>\n        <ng-container *ngIf=\"selectedTab == 1\">\n          <div class=\"form-row\">\n            <div class=\"form-one-col\">\n              <label>Which Software are you using?</label>\n              <input type=\"text\" [(ngModel)]=\"stepTwo.software\" (ngModelChange)=\"changeInFields('name')\" name=\"soft\" />\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-two-col\">\n              <label>NPI</label>\n              <input type=\"text\" [(ngModel)]=\"stepTwo.npi\" name=\"npi\" (ngModelChange)=\"changeInFields('address')\" />\n            </div>\n            <div class=\"form-two-col\">\n              <label>Authorization Credentials</label>\n              <input type=\"text\" [(ngModel)]=\"stepTwo.auth\" name=\"auth\" (ngModelChange)=\"changeInFields('zipcode')\" />\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-one-col\">\n              <label>Token</label>\n              <input type=\"text\" name=\"token\" [(ngModel)]=\"stepTwo.token\" (ngModelChange)=\"changeInFields('email')\" />\n            </div>\n          </div>\n          <button class=\"add-doc\" (click)=\"selectTheme()\" mat-raised-button>{{selectedTheme}}</button>\n          <button class=\"blue-btn\" (click)=\"update()\" mat-raised-button>NEXT</button>\n        </ng-container>\n        <!-- <ng-container *ngIf=\"selectedTab == 2\">\n          <div class=\"form-row\">\n            <div class=\"form-one-col\">\n              <label>Email/Username of social media account?</label>\n              <input type=\"number\" [(ngModel)]=\"stepOne.phone\" (ngModelChange)=\"changeInFields('name')\" name=\"name\" />\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-one-col\">\n              <label>Email</label>\n              <input type=\"email\" [(ngModel)]=\"stepOne.email\" name=\"address\" (ngModelChange)=\"changeInFields('address')\" />\n            </div>\n          </div>\n          <button class=\"blue-btn\" (click)=\"done()\" mat-raised-button>Done</button>\n        </ng-container> -->\n\n        <mat-tab-group headerPosition=\"below\" [selectedIndex]=\"selectedTab\">\n          <mat-tab [disabled]=\"true\">\n          </mat-tab>\n          <mat-tab [disabled]=\"true\">\n          </mat-tab>\n          <!-- <mat-tab [disabled]=\"true\">\n          </mat-tab> -->\n        </mat-tab-group>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/manual/manual.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/manual/manual.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".manualWrapper {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  padding: 5%;\n  width: -webkit-fill-available; }\n  .manualWrapper .form-slide {\n    background: #ffffff;\n    padding: 3%;\n    border-radius: 10px;\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n  .manualWrapper .form-slide .form-head-row .back img {\n      vertical-align: middle; }\n  .manualWrapper .form-slide .form-head-row .back span {\n      vertical-align: middle;\n      color: #9b9b9b;\n      text-transform: uppercase; }\n  .manualWrapper .form-slide .form-area {\n      max-width: 700px;\n      margin: 25px auto; }\n  .manualWrapper .form-slide .form-area h3 {\n        color: #747474; }\n  .manualWrapper .form-slide .form-area form .form-row {\n        display: flex;\n        justify-content: space-between;\n        margin: 25px 0; }\n  @media (max-width: 767px) {\n          .manualWrapper .form-slide .form-area form .form-row {\n            flex-wrap: wrap; } }\n  .manualWrapper .form-slide .form-area form .form-row .form-one-col {\n          width: 100%; }\n  .manualWrapper .form-slide .form-area form .form-row .form-two-col {\n          width: 49%; }\n  @media (max-width: 767px) {\n            .manualWrapper .form-slide .form-area form .form-row .form-two-col {\n              width: 100%; } }\n  .manualWrapper .form-slide .form-area form .form-row .form-three-col {\n          width: 32%; }\n  @media (max-width: 767px) {\n            .manualWrapper .form-slide .form-area form .form-row .form-three-col {\n              width: 100%; } }\n  .manualWrapper .form-slide .form-area form .form-row label {\n          display: block;\n          color: #9b9b9b;\n          text-transform: uppercase; }\n  .manualWrapper .form-slide .form-area form .form-row input {\n          width: -webkit-fill-available;\n          border: 1px solid transparent;\n          background: #f1f4f4;\n          padding: 15px 10px;\n          border-radius: 7px;\n          outline: none; }\n  .manualWrapper .form-slide .form-area form .form-row input.active {\n          background: #fff;\n          border: 1px solid #eeeeee;\n          box-shadow: 0 3px 10px rgba(192, 192, 192, 0.5); }\n  .manualWrapper .form-slide .form-area form .form-row input.error {\n          background: #d80909b3; }\n  .manualWrapper .form-slide .form-area form .blue-btn {\n        background: #39d4ff;\n        padding: 15px 50px;\n        font-size: 18px;\n        color: #fff;\n        border-radius: 5px;\n        text-transform: uppercase;\n        width: 250px;\n        text-align: center;\n        display: block;\n        margin: 50px auto 25px; }\n  @media (max-width: 767px) {\n          .manualWrapper .form-slide .form-area form .blue-btn {\n            width: auto;\n            font-size: 14px; } }\n  .manualWrapper .form-slide .form-area form .add-doc {\n        background: #39d4ff;\n        color: #fff; }\n  .manualWrapper .form-slide .form-area form .mat-tab-group {\n        align-items: center; }\n  .manualWrapper .form-slide .form-area form .mat-tab-label {\n        height: 5px;\n        background: #d8d8d8;\n        margin-right: 5px; }\n  .manualWrapper .form-slide .form-area form .mat-tab-header {\n        border-top: none; }\n  .manualWrapper .form-slide .form-area form .mat-ink-bar {\n        background: #39d4ff;\n        height: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy9hcHAvY29tcG9uZW50cy9tYW51YWwvbWFudWFsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0hhbXphL0RvY3VtZW50cy9Ob2RlL0FNUF9BUEkvc3JjL3RoZW1lL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw2QkFBNkIsRUFBQTtFQUxqQztJQVNRLG1CQ1ZRO0lEV1IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpSENLdUIsRUFBQTtFRGpCL0I7TUFpQm9CLHNCQUFzQixFQUFBO0VBakIxQztNQXFCb0Isc0JBQXNCO01BQ3RCLGNDYlA7TURjTyx5QkFBeUIsRUFBQTtFQXZCN0M7TUE2QlksZ0JBQWdCO01BQ2hCLGlCQUFpQixFQUFBO0VBOUI3QjtRQWlDZ0IsY0MxQlMsRUFBQTtFRFB6QjtRQXNDb0IsYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixjQUFjLEVBQUE7RUFFZDtVQTFDcEI7WUEyQ3dCLGVBQ0osRUFBQSxFQWdESDtFQTVGakI7VUErQ3dCLFdBQVcsRUFBQTtFQS9DbkM7VUFtRHdCLFVBQVUsRUFBQTtFQUVWO1lBckR4QjtjQXNENEIsV0FDSixFQUFBLEVBQ0g7RUF4RHJCO1VBMkR3QixVQUFVLEVBQUE7RUFFVjtZQTdEeEI7Y0E4RDRCLFdBQ0osRUFBQSxFQUNIO0VBaEVyQjtVQW1Fd0IsY0FBYztVQUNkLGNDM0RYO1VENERXLHlCQUF5QixFQUFBO0VBckVqRDtVQXlFd0IsNkJBQTZCO1VBQzdCLDZCQUE2QjtVQUM3QixtQkFBOEI7VUFDOUIsa0JBQWtCO1VBQ2xCLGtCQUFrQjtVQUNsQixhQUFhLEVBQUE7RUE5RXJDO1VBbUY0QixnQkFBZ0I7VUFDaEIseUJBQW9DO1VBQ3BDLCtDQUErQyxFQUFBO0VBckYzRTtVQXlGNEIscUJDN0VQLEVBQUE7RURackI7UUErRm9CLG1CQzNGRjtRRDRGRSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLHNCQUFzQixFQUFBO0VBRXRCO1VBMUdwQjtZQTJHd0IsV0FBVztZQUNYLGVBQWUsRUFBQSxFQUV0QjtFQTlHakI7UUFpSG9CLG1CQzdHRjtRRDhHRSxXQUFXLEVBQUE7RUFsSC9CO1FBc0hvQixtQkFBbUIsRUFBQTtFQXRIdkM7UUEwSG9CLFdBQVc7UUFDWCxtQkNySEY7UURzSEUsaUJBQWlCLEVBQUE7RUE1SHJDO1FBZ0lvQixnQkFBZ0IsRUFBQTtFQWhJcEM7UUFvSW9CLG1CQ2hJRjtRRGlJRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hbnVhbC9tYW51YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS92YXJpYWJsZXMnO1xuXG4ubWFudWFsV3JhcHBlciB7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuXG5cbiAgICAuZm9ybS1zbGlkZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgICAgICBwYWRkaW5nOiAzJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvd0Zvcm11bGE7XG5cbiAgICAgICAgLmZvcm0taGVhZC1yb3cge1xuICAgICAgICAgICAgLmJhY2sge1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmFjaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1hcmVhIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkaGVhZGluZ05vcm1Db2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgLmZvcm0tcm93IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggMDtcblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZvcm0tb25lLWNvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtLXR3by1jb2wge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ5JTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtLXRocmVlLWNvbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzIlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0NCwgMjQ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjM4LCAyMzgsIDIzOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICYuZXJyb3Ige1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR2YWxpZGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYmx1ZS1idG4ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZVRoZW1lO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDUwcHggYXV0byAyNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYWRkLWRvYyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlVGhlbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tYXQtdGFiLWdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWF0LXRhYi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JleVRoZW1lO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tYXQtaW5rLWJhciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlVGhlbWU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvL0FsbCB0aGUgY29sb3JzIHVzZWQgaW4gdGhlIGFwcCB3aWxsIGJlIHByZXNlbnQgaGVyZS5cbiRwcmltYXJ5OiNmZmZmZmY7XG4kZGFyazojMDAwMDAwO1xuJHRoZW1lOiNmYWZhZmE7XG4kYm9yZGVyOiNmNWY0ZjQ7XG4kc2hhZG93OiNiZWJlYmVjNTtcbiRibHVlVGhlbWU6IzM5ZDRmZjtcbiRkYXJrQmx1ZTojMThjMWYwO1xuJGdyZXlUaGVtZTojZDhkOGQ4O1xuJGhlYWRpbmdOb3JtQ29sb3I6Izc0NzQ3NDtcbiRibG9ja09wdDojYzdjN2M3O1xuJGJhY2s6IzliOWI5YjtcbiRzbWFsbFNpemU6MTJweDtcbiRoZWFkaW5nU2l6ZToxNHB4O1xuJHZhbGlkYXRpb246I2Q4MDkwOWIzO1xuJGNoYXRHcmVlbjojMzNjZDI5O1xuJGNoYXRJbnB1dDojZjFmNGY0O1xuJHNoYWRvd0Zvcm11bGE6MCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksXG4wIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLFxuMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTsiXX0= */"

/***/ }),

/***/ "./src/app/components/manual/manual.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/manual/manual.component.ts ***!
  \*******************************************************/
/*! exports provided: ManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualComponent", function() { return ManualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_auxilaries_aux_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auxilaries/aux.service */ "./src/app/auxilaries/aux.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modals_themes_themes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/themes/themes.component */ "./src/app/components/modals/themes/themes.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/credentials/credential.service */ "./src/app/services/credentials/credential.service.ts");









var ManualComponent = /** @class */ (function () {
    function ManualComponent(loc, aux, dialog, auth, router, credentials) {
        this.loc = loc;
        this.aux = aux;
        this.dialog = dialog;
        this.auth = auth;
        this.router = router;
        this.credentials = credentials;
        this.stepOne = {
            phone: '',
            email: '',
            address: '',
            officeHours: [
                {
                    day: 'Monday',
                    openTime: '',
                    lunchTime: '',
                    closeTime: ''
                },
                {
                    day: 'Tuesday',
                    openTime: '',
                    lunchTime: '',
                    closeTime: ''
                },
                {
                    day: 'Wednesday',
                    openTime: '',
                    lunchTime: '',
                    closeTime: ''
                },
                {
                    day: 'Thursday',
                    openTime: '',
                    lunchTime: '',
                    closeTime: ''
                },
                {
                    day: 'Friday',
                    openTime: '',
                    lunchTime: '',
                    closeTime: ''
                },
                {
                    day: 'Saturday',
                    openTime: '',
                    lunchTime: '',
                    closeTime: ''
                },
                {
                    day: 'Sunday',
                    openTime: '',
                    lunchTime: '',
                    closeTime: ''
                },
            ],
            docNames: [
                {
                    id: Math.random(),
                    fname: '',
                    lname: ''
                }
            ]
        };
        this.stepTwo = {
            software: '',
            npi: '',
            auth: '',
            token: ''
        };
        this.selectedTab = 0;
        this.proceed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ManualComponent.prototype.ngOnInit = function () {
    };
    ManualComponent.prototype.toStep = function (which) {
        this.selectedTab = which;
    };
    ManualComponent.prototype.selectTheme = function () {
        var dialogRef = this.dialog.open(_modals_themes_themes_component__WEBPACK_IMPORTED_MODULE_6__["ThemesComponent"], {});
    };
    ManualComponent.prototype.previous = function () {
        if (this.selectedTab > 0) {
            this.selectedTab--;
        }
        else {
            this.proceed.emit('auto');
        }
    };
    ManualComponent.prototype.changeInFields = function (which) {
    };
    ManualComponent.prototype.addDoc = function () {
        this.stepOne.docNames.push({
            id: Math.random(),
            fname: '',
            lname: ''
        });
    };
    ManualComponent.prototype.update = function () {
        var _this = this;
        if (this.stepOne.email != '' && this.stepOne.phone != '' && this.stepOne.address != ''
            && this.stepTwo.software != '' && this.stepTwo)
            var params = {
                theme_id: '5c9e753da7953e3028adc5d3',
                phone: this.stepOne.phone,
                name: 'Harry - The Nutritionist',
                email: this.stepOne.email,
                address: this.stepOne.address,
                office_hours: this.stepOne.officeHours,
                doctor_names: this.stepOne.docNames,
                npi: this.stepTwo.npi,
                software: this.stepTwo.software,
                auth: this.stepTwo.auth,
                token: this.stepTwo.token,
                url: 'harry'
            };
        this.auth.setupDentist(params).subscribe(function (success) {
            _this.credentials.setUser(success.data);
            _this.router.navigate(['/home']);
            console.log(success);
        }, function (error) {
            _this.aux.errorResponse(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('switch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ManualComponent.prototype, "proceed", void 0);
    ManualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manual',
            template: __webpack_require__(/*! ./manual.component.html */ "./src/app/components/manual/manual.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./manual.component.scss */ "./src/app/components/manual/manual.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            src_app_auxilaries_aux_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_8__["CredentialService"]])
    ], ManualComponent);
    return ManualComponent;
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
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/components/modals/alert/alert.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/modals/alert/alert.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{title}}</h2>\n\n<mat-dialog-content>\n  <p>{{message}}</p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-button class=\"dimiss\" (click)=\"dismiss()\">Okay</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/components/modals/alert/alert.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/modals/alert/alert.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container {\n  background: #fafafa;\n  text-align: center; }\n\n.mat-dialog-content {\n  font-size: 14px; }\n\n.mat-dialog-actions {\n  justify-content: center; }\n\n.dimiss {\n  background: #39d4ff;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvSGFtemEvRG9jdW1lbnRzL05vZGUvQU1QX0FQSS9zcmMvdGhlbWUvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJDQ1U7RURBVixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksbUJDVGM7RURVZCxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcyc7XG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICR0aGVtZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaW1pc3Mge1xuICAgIGJhY2tncm91bmQ6ICRibHVlVGhlbWU7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwiLy9BbGwgdGhlIGNvbG9ycyB1c2VkIGluIHRoZSBhcHAgd2lsbCBiZSBwcmVzZW50IGhlcmUuXG4kcHJpbWFyeTojZmZmZmZmO1xuJGRhcms6IzAwMDAwMDtcbiR0aGVtZTojZmFmYWZhO1xuJGJvcmRlcjojZjVmNGY0O1xuJHNoYWRvdzojYmViZWJlYzU7XG4kYmx1ZVRoZW1lOiMzOWQ0ZmY7XG4kZGFya0JsdWU6IzE4YzFmMDtcbiRncmV5VGhlbWU6I2Q4ZDhkODtcbiRoZWFkaW5nTm9ybUNvbG9yOiM3NDc0NzQ7XG4kYmxvY2tPcHQ6I2M3YzdjNztcbiRiYWNrOiM5YjliOWI7XG4kc21hbGxTaXplOjEycHg7XG4kaGVhZGluZ1NpemU6MTRweDtcbiR2YWxpZGF0aW9uOiNkODA5MDliMztcbiRjaGF0R3JlZW46IzMzY2QyOTtcbiRjaGF0SW5wdXQ6I2YxZjRmNDtcbiRzaGFkb3dGb3JtdWxhOjAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLFxuMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSxcbjAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7Il19 */"

/***/ }),

/***/ "./src/app/components/modals/alert/alert.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/modals/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(data, dialogRef) {
        this.dialogRef = dialogRef;
        this.message = data.message;
        this.title = data.title;
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.dismiss = function () {
        this.dialogRef.close();
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/components/modals/alert/alert.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/components/modals/alert/alert.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/components/modals/pro-details/pro-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/modals/pro-details/pro-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2 mat-dialog-title>Which Software are you currently using?</h2> -->\n\n<mat-dialog-content>\n  <div class=\"spinner\" *ngIf=\"wait\">\n    <mat-progress-spinner [diameter]=\"30\" mode=\"indeterminate\"></mat-progress-spinner>\n  </div>\n  <mat-list *ngIf=\"wait == false && listed == true\">\n    <mat-list-item class=\"item\" *ngFor=\"let provider of providers\" (click)=\"thisIs(provider)\" matRipple> {{provider.name}} </mat-list-item>\n  </mat-list>\n  <p class=\"desc\" *ngIf=\"listed == false\">\n    Unfortunately we are not integrated with your Software at this time, we are diligently working to be fully integrated with your software provider.. Please accept our apologies, we will notify you as soon as the integration is complete. In the meantime, Please order “LITE PACKAGE” at a substantial discount. (50%) off sign-up) and we will contact you as soon as we are fully integrated with your patient software\n  </p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <div class=\"field\" *ngIf=\"listed == false\">\n    <input [(ngModel)]=\"provider.newProvider\" name=\"provider\" type=\"text\" placeholder=\"Name of software you are currently using\">\n    <input [(ngModel)]=\"provider.email\" name=\"provider\" type=\"email\" placeholder=\"Enter you email\">\n    <button mat-button class=\"dimiss\" (click)=\"add()\">SUBMIT</button>\n  </div>\n  <button mat-button class=\"dimiss\" (click)=\"notListed()\" *ngIf=\"listed == true\">Not in the list?</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/components/modals/pro-details/pro-details.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/modals/pro-details/pro-details.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container {\n  background: #fafafa;\n  text-align: center; }\n\n.mat-dialog-content {\n  font-size: 14px;\n  max-width: 40vw; }\n\n.mat-dialog-actions {\n  justify-content: center; }\n\n.dimiss {\n  background: #39d4ff;\n  width: 100%;\n  color: #fff;\n  padding: 10px 50px;\n  font-size: 16px;\n  letter-spacing: 1.75px;\n  text-transform: uppercase;\n  font-family: 'ProximaNova-Semibold'; }\n\n.item {\n  font-family: 'ProximaNova-Semibold';\n  letter-spacing: 1.0;\n  padding-left: 5px !important; }\n\n.item .mat-list-item-content {\n    font-size: 20px !important; }\n\n.item:hover {\n    background: #d8d8d8; }\n\n.mat-progress-spinner circle,\n.mat-spinner circle {\n  stroke: #39d4ff; }\n\n.spinner {\n  text-align: center;\n  margin-top: 5px; }\n\n.spinner .mat-progress-spinner {\n    display: inline-block !important; }\n\n.mat-list-item-content {\n  padding: 0 !important;\n  font-size: 15px; }\n\n.desc {\n  max-width: 35vw;\n  font-size: 18px;\n  text-align: left;\n  font-weight: bold; }\n\n.field {\n  width: 100%; }\n\n.field input {\n    width: -webkit-fill-available;\n    border: 1px solid transparent;\n    background: #f1f4f4;\n    padding: 15px 10px;\n    border-radius: 7px;\n    font-size: 16px;\n    outline: none;\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvcHJvLWRldGFpbHMvcHJvLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvSGFtemEvRG9jdW1lbnRzL05vZGUvQU1QX0FQSS9zcmMvdGhlbWUvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJDQVU7RURDVixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUduQjtFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLG1CQ1hjO0VEWWQsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsbUNBQW1DLEVBQUE7O0FBR3ZDO0VBQ0ksbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQiw0QkFBNEIsRUFBQTs7QUFIaEM7SUFNUSwwQkFBMEIsRUFBQTs7QUFObEM7SUFVUSxtQkM3QlUsRUFBQTs7QURpQ2xCOztFQUVJLGVDckNjLEVBQUE7O0FEd0NsQjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRm5CO0lBS1EsZ0NBQWdDLEVBQUE7O0FBSXhDO0VBQ0kscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXLEVBQUE7O0FBRGY7SUFJUSw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLG1CQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9wcm8tZGV0YWlscy9wcm8tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcyc7XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogJHRoZW1lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1heC13aWR0aDogNDB2dztcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaW1pc3Mge1xuICAgIGJhY2tncm91bmQ6ICRibHVlVGhlbWU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS43NXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6ICdQcm94aW1hTm92YS1TZW1pYm9sZCc7XG59XG5cbi5pdGVtIHtcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWFOb3ZhLVNlbWlib2xkJztcbiAgICBsZXR0ZXItc3BhY2luZzogMS4wO1xuICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG5cbiAgICAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRncmV5VGhlbWU7XG4gICAgfVxufVxuXG4ubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLFxuLm1hdC1zcGlubmVyIGNpcmNsZSB7XG4gICAgc3Ryb2tlOiAkYmx1ZVRoZW1lO1xufVxuXG4uc3Bpbm5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDVweDtcblxuICAgIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmRlc2Mge1xuICAgIG1heC13aWR0aDogMzV2dztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDQsIDI0NCk7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxufSIsIi8vQWxsIHRoZSBjb2xvcnMgdXNlZCBpbiB0aGUgYXBwIHdpbGwgYmUgcHJlc2VudCBoZXJlLlxuJHByaW1hcnk6I2ZmZmZmZjtcbiRkYXJrOiMwMDAwMDA7XG4kdGhlbWU6I2ZhZmFmYTtcbiRib3JkZXI6I2Y1ZjRmNDtcbiRzaGFkb3c6I2JlYmViZWM1O1xuJGJsdWVUaGVtZTojMzlkNGZmO1xuJGRhcmtCbHVlOiMxOGMxZjA7XG4kZ3JleVRoZW1lOiNkOGQ4ZDg7XG4kaGVhZGluZ05vcm1Db2xvcjojNzQ3NDc0O1xuJGJsb2NrT3B0OiNjN2M3Yzc7XG4kYmFjazojOWI5YjliO1xuJHNtYWxsU2l6ZToxMnB4O1xuJGhlYWRpbmdTaXplOjE0cHg7XG4kdmFsaWRhdGlvbjojZDgwOTA5YjM7XG4kY2hhdEdyZWVuOiMzM2NkMjk7XG4kY2hhdElucHV0OiNmMWY0ZjQ7XG4kc2hhZG93Rm9ybXVsYTowIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIC4yKSxcbjAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksXG4wIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/modals/pro-details/pro-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/modals/pro-details/pro-details.component.ts ***!
  \************************************************************************/
/*! exports provided: ProDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProDetailsComponent", function() { return ProDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_auxilaries_aux_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auxilaries/aux.service */ "./src/app/auxilaries/aux.service.ts");





var ProDetailsComponent = /** @class */ (function () {
    function ProDetailsComponent(data, auth, aux, dialogRef) {
        this.auth = auth;
        this.aux = aux;
        this.dialogRef = dialogRef;
        this.wait = true;
        this.listed = true;
        this.provider = {
            newProvider: '',
            email: ''
        };
        this.newProvider = '';
        this.providers = [];
    }
    ProDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.providers.length == 0)
            this.auth.serviceProviders().subscribe(function (success) {
                _this.wait = false;
                _this.auth.providers = success.data;
                _this.providers = success.data;
            }, function (error) {
                _this.wait = false;
                _this.aux.errorResponse(error);
            });
        else {
            this.wait = false;
            this.providers = this.auth.providers;
        }
    };
    ProDetailsComponent.prototype.notListed = function () {
        this.listed = false;
    };
    ProDetailsComponent.prototype.add = function () {
        var _this = this;
        if (this.provider.newProvider != '' && this.provider.email != '') {
            var params = {
                name: this.provider.newProvider,
                email: this.provider.email
            };
            this.auth.requestProvider(params).subscribe(function () {
                _this.dialogRef.close({ listed: false });
            }, function (error) {
                _this.aux.errorResponse(error);
            });
        }
        else {
            this.aux.showAlert("Please, don't leave any field blank", 'ERROR');
        }
    };
    ProDetailsComponent.prototype.thisIs = function (provider) {
        this.dialogRef.close(provider);
    };
    ProDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pro-details',
            template: __webpack_require__(/*! ./pro-details.component.html */ "./src/app/components/modals/pro-details/pro-details.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./pro-details.component.scss */ "./src/app/components/modals/pro-details/pro-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_auxilaries_aux_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ProDetailsComponent);
    return ProDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/modals/themes/themes.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/modals/themes/themes.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Select Theme</h2>\n\n<mat-dialog-content>\n  <mat-list role=\"list\">\n    <mat-list-item role=\"listitem\" (click)=\"thisIs(1)\" matRipple>Theme 1</mat-list-item>\n    <mat-list-item role=\"listitem\" (click)=\"thisIs(2)\" matRipple>Theme 2</mat-list-item>\n    <mat-list-item role=\"listitem\" (click)=\"thisIs(3)\" matRipple>Theme 3</mat-list-item>\n  </mat-list>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/components/modals/themes/themes.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/modals/themes/themes.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL3RoZW1lcy90aGVtZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/modals/themes/themes.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/modals/themes/themes.component.ts ***!
  \**************************************************************/
/*! exports provided: ThemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesComponent", function() { return ThemesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ThemesComponent = /** @class */ (function () {
    function ThemesComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ThemesComponent.prototype.ngOnInit = function () {
    };
    ThemesComponent.prototype.thisIs = function (which) {
        this.dialogRef.close(which);
    };
    ThemesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-themes',
            template: __webpack_require__(/*! ./themes.component.html */ "./src/app/components/modals/themes/themes.component.html"),
            styles: [__webpack_require__(/*! ./themes.component.scss */ "./src/app/components/modals/themes/themes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ThemesComponent);
    return ThemesComponent;
}());



/***/ }),

/***/ "./src/app/components/offers/offers.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/offers/offers.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"plan-slide\">\n  <div class=\"plan-sections\">\n    <div class=\"plans-row plans-head-row\">\n      <div class=\"plans-col\">\n        <h3 class=\"feature\">Features</h3>\n      </div>\n      <div class=\"plans-col\">\n        <h3>AMP “PRO”</h3>\n        <span class=\"big-heading\">$399</span>\n        <span class=\"small-heading\">$399 Per Month</span>\n      </div>\n      <div class=\"plans-col\">\n        <h3>AMP “LITE”</h3>\n        <span class=\"big-heading\">$199</span>\n        <span class=\"small-heading\">$199 Per Month</span>\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Custom Practice Branded App</div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">2 Way Chat</div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Appointment Request</div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Practice Info/Map\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Social Links\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Practice Referral\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Practice Software Integration\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/cross.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Appointment Booking with Confirmation\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/cross.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Digital Forms Integration\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/cross.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Marketing Dashboard </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/cross.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row\">\n      <div class=\"plans-col\">Emergency Messaging </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/tick.png\" alt=\"icons\" />\n      </div>\n      <div class=\"plans-col\">\n        <img src=\"assets/img/cross.png\" alt=\"icons\" />\n      </div>\n    </div>\n    <div class=\"plans-row plans-foot-row\">\n      <div class=\"plans-col\"></div>\n      <div class=\"plans-col\">\n        <button mat-button class=\"blue-btn\" (click)=\"proPackage()\">Get Started</button>\n      </div>\n      <div class=\"plans-col\">\n        <button mat-button class=\"blue-btn\" (click)=\"selectPlan(packages[0])\">Get Started</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/offers/offers.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/offers/offers.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plan-slide {\n  background: #ffffff; }\n  .plan-slide .plan-sections {\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n    border-radius: 15px;\n    margin-top: 25px; }\n  .plan-slide .plan-sections .plans-row {\n      display: flex;\n      text-align: center;\n      border-bottom: 1px solid #f5f4f4; }\n  .plan-slide .plan-sections .plans-row .plans-col {\n        width: 30%;\n        padding: 10px 20px;\n        color: #9b9b9b; }\n  .plan-slide .plan-sections .plans-row .plans-col:first-child {\n          width: 40%;\n          text-align: left; }\n  .plan-slide .plan-sections .plans-row .plans-col:nth-child(2) {\n          border-left: 1px solid #f5f4f4;\n          border-right: 1px solid #f5f4f4; }\n  .plan-slide .plan-sections .plans-row .plans-col img {\n          width: 17px; }\n  .plan-slide .plan-sections .plans-row .plans-col .blue-btn {\n          background: #18c1f0;\n          padding: 10px 50px;\n          font-size: 16px;\n          letter-spacing: 1.75px;\n          display: inline-block;\n          color: #fff;\n          border-radius: 5px;\n          text-transform: uppercase;\n          font-family: 'ProximaNova-Semibold'; }\n  .plan-slide .plan-sections .plans-row.plans-head-row {\n        align-items: flex-end;\n        border: none; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col {\n          padding: 20px;\n          color: #4a4a4a;\n          border-bottom: 1px solid #f5f4f4; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col h3 {\n            margin: 10px 0;\n            font-size: 22px;\n            font-family: 'ProximaNova-Semibold';\n            letter-spacing: 1.0; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col .feature {\n            font-size: 24px;\n            font-family: 'ProximaNova-Semibold';\n            color: #747474;\n            margin: 0; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col .big-heading {\n            font-size: 64px;\n            display: block;\n            font-family: 'ProximaNova-Extrabld'; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col .small-heading {\n            font-size: 18px;\n            display: block;\n            letter-spacing: 0.25; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col:nth-child(2) {\n            background: #18c1f0;\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px;\n            color: #fff;\n            border: none;\n            position: relative;\n            margin-top: -25px; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col:nth-child(2) h3 {\n              margin: 20px 0 25px; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col:nth-child(2)::before {\n              content: \"\";\n              background: url('popular.png') no-repeat 0 0/contain;\n              position: absolute;\n              width: 125px;\n              height: 100px;\n              right: -9px;\n              top: -10px;\n              z-index: 999; }\n  .plan-slide .plan-sections .plans-row.plans-head-row .plans-col:nth-child(3) {\n            position: relative;\n            background: #39d4ff;\n            border-top-right-radius: 10px;\n            color: #fff;\n            border: none; }\n  .plan-slide .plan-sections .plans-row.plans-foot-row {\n        border: none; }\n  .plan-slide .plan-sections .plans-row.plans-foot-row .plans-col {\n          padding: 35px 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy9hcHAvY29tcG9uZW50cy9vZmZlcnMvb2ZmZXJzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0hhbXphL0RvY3VtZW50cy9Ob2RlL0FNUF9BUEkvc3JjL3RoZW1lL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQ0ZZLEVBQUE7RURDaEI7SUFJUSx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBO0VBTnhCO01BU1ksYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixnQ0NURyxFQUFBO0VERmY7UUFjZ0IsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixjQ1BILEVBQUE7RURUYjtVQW1Cb0IsVUFBVTtVQUNWLGdCQUFnQixFQUFBO0VBcEJwQztVQXdCb0IsOEJDdEJMO1VEdUJLLCtCQ3ZCTCxFQUFBO0VERmY7VUE2Qm9CLFdBQVcsRUFBQTtFQTdCL0I7VUFpQ29CLG1CQzVCSDtVRDZCRyxrQkFBa0I7VUFDbEIsZUFBZTtVQUNmLHNCQUFzQjtVQUN0QixxQkFBcUI7VUFDckIsV0FBVztVQUNYLGtCQUFrQjtVQUNsQix5QkFBeUI7VUFDekIsbUNBQW1DLEVBQUE7RUF6Q3ZEO1FBOENnQixxQkFBcUI7UUFDckIsWUFBWSxFQUFBO0VBL0M1QjtVQWtEb0IsYUFBYTtVQUNiLGNBQXNCO1VBQ3RCLGdDQ2xETCxFQUFBO0VERmY7WUF1RHdCLGNBQWM7WUFDZCxlQUFlO1lBQ2YsbUNBQW1DO1lBQ25DLG1CQUFtQixFQUFBO0VBMUQzQztZQThEd0IsZUFBZTtZQUNmLG1DQUFtQztZQUNuQyxjQ3pEQztZRDBERCxTQUFTLEVBQUE7RUFqRWpDO1lBcUV3QixlQUFlO1lBQ2YsY0FBYztZQUNkLG1DQUFtQyxFQUFBO0VBdkUzRDtZQTJFd0IsZUFBZTtZQUNmLGNBQWM7WUFDZCxvQkFBb0IsRUFBQTtFQTdFNUM7WUFpRndCLG1CQzVFUDtZRDZFTyw0QkFBNEI7WUFDNUIsNkJBQTZCO1lBQzdCLFdBQVc7WUFDWCxZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGlCQUFpQixFQUFBO0VBdkZ6QztjQTBGNEIsbUJBQW1CLEVBQUE7RUExRi9DO2NBOEY0QixXQUFXO2NBQ1gsb0RBQXNFO2NBQ3RFLGtCQUFrQjtjQUNsQixZQUFZO2NBQ1osYUFBYTtjQUNiLFdBQVc7Y0FDWCxVQUFVO2NBQ1YsWUFBWSxFQUFBO0VBckd4QztZQTBHd0Isa0JBQWtCO1lBQ2xCLG1CQ3ZHTjtZRHdHTSw2QkFBNkI7WUFDN0IsV0FBVztZQUNYLFlBQVksRUFBQTtFQTlHcEM7UUFvSGdCLFlBQVksRUFBQTtFQXBINUI7VUF1SG9CLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vZmZlcnMvb2ZmZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzJztcblxuLnBsYW4tc2xpZGUge1xuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuXG4gICAgLnBsYW4tc2VjdGlvbnMge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG5cbiAgICAgICAgLnBsYW5zLXJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXI7XG5cbiAgICAgICAgICAgIC5wbGFucy1jb2wge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmFjaztcblxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkYm9yZGVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ibHVlLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRkYXJrQmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjc1cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hTm92YS1TZW1pYm9sZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnBsYW5zLWhlYWQtcm93IHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IC8vIGhlaWdodDogMjE1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICAgICAgICAgICAgLnBsYW5zLWNvbCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNzQsIDc0LCA3NCk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyO1xuXG4gICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hTm92YS1TZW1pYm9sZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4wO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZlYXR1cmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hTm92YS1TZW1pYm9sZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGhlYWRpbmdOb3JtQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYmlnLWhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWFOb3ZhLUV4dHJhYmxkJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5zbWFsbC1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZGFya0JsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3BvcHVsYXIucG5nKSBuby1yZXBlYXQgMCAwL2NvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWVUaGVtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYucGxhbnMtZm9vdC1yb3cge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgICAgICAgICAgIC5wbGFucy1jb2wge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzNXB4IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vQWxsIHRoZSBjb2xvcnMgdXNlZCBpbiB0aGUgYXBwIHdpbGwgYmUgcHJlc2VudCBoZXJlLlxuJHByaW1hcnk6I2ZmZmZmZjtcbiRkYXJrOiMwMDAwMDA7XG4kdGhlbWU6I2ZhZmFmYTtcbiRib3JkZXI6I2Y1ZjRmNDtcbiRzaGFkb3c6I2JlYmViZWM1O1xuJGJsdWVUaGVtZTojMzlkNGZmO1xuJGRhcmtCbHVlOiMxOGMxZjA7XG4kZ3JleVRoZW1lOiNkOGQ4ZDg7XG4kaGVhZGluZ05vcm1Db2xvcjojNzQ3NDc0O1xuJGJsb2NrT3B0OiNjN2M3Yzc7XG4kYmFjazojOWI5YjliO1xuJHNtYWxsU2l6ZToxMnB4O1xuJGhlYWRpbmdTaXplOjE0cHg7XG4kdmFsaWRhdGlvbjojZDgwOTA5YjM7XG4kY2hhdEdyZWVuOiMzM2NkMjk7XG4kY2hhdElucHV0OiNmMWY0ZjQ7XG4kc2hhZG93Rm9ybXVsYTowIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIC4yKSxcbjAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksXG4wIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpOyJdfQ== */"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modals_pro_details_pro_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/pro-details/pro-details.component */ "./src/app/components/modals/pro-details/pro-details.component.ts");




var OffersComponent = /** @class */ (function () {
    function OffersComponent(dialog) {
        this.dialog = dialog;
        this.packages = [
            {
                "_id": "5c9f1e3eaa6b2b80b3092919",
                "name": "LITE",
                "price": 199,
                "__v": 0
            },
            {
                "_id": "5c9f1e44aa6b2b80b309291a",
                "name": "PRO",
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
            _this.selectedPlan.emit({ plan: plan, provider: null });
        }, 300);
    };
    OffersComponent.prototype.proPackage = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_modals_pro_details_pro_details_component__WEBPACK_IMPORTED_MODULE_3__["ProDetailsComponent"], {});
        dialogRef.afterClosed().subscribe(function (provider) {
            if (provider && provider.listed == null)
                _this.selectedPlan.emit({ plan: _this.packages[1], provider: provider });
            else if (provider.listed == false)
                _this.selectedPlan.emit({ plan: _this.packages[0], provider: null });
        });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
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

module.exports = "<div class=\"container\">\n  <button class=\"logo\" mat-button>\n    <img src=\"assets/img/logo.png\" alt=\"\">\n  </button>\n  <button class=\"options\" (click)=\"goTo('dashboard')\" mat-button>\n    <img src=\"assets/img/dash.png\" alt=\"\">\n    <p [ngClass]=\"{'highlighted': currentPage == '/home'}\">Dashboard</p>\n  </button>\n  <button class=\"options\" mat-button>\n    <img class=\"schedule\" src=\"assets/img/scheduling.png\" alt=\"\">\n    <p>Scheduling</p>\n  </button>\n  <button class=\"options\" (click)=\"goTo('chat')\" mat-button>\n    <img *ngIf=\"currentPage != '/chat'\" src=\"assets/img/chat.png\" alt=\"\">\n    <img *ngIf=\"currentPage == '/chat'\" src=\"assets/img/chatSelected.png\" alt=\"\">\n    <p [ngClass]=\"{'highlighted': currentPage == '/chat'}\">Chat</p>\n  </button>\n  <button class=\"options\" mat-button>\n    <img src=\"assets/img/rating.png\" alt=\"\">\n    <p>Social</p>\n  </button>\n  <button class=\"options\" mat-button>\n    <img src=\"assets/img/forms.png\" alt=\"\">\n    <p>Forms</p>\n  </button>\n  <button class=\"options\" mat-button>\n    <img class=\"mkt\" src=\"assets/img/marketing.png\" alt=\"\">\n    <p>Marketing</p>\n  </button>\n  <button class=\"options\" mat-button>\n    <img src=\"assets/img/settings.png\" alt=\"\">\n    <p>Setting</p>\n  </button>\n  <button class=\"options\" mat-button>\n    <img src=\"assets/img/support.png\" alt=\"\">\n    <p>Support</p>\n  </button>\n  <button class=\"options\" (click)=\"goTo('login')\" *ngIf=\"isLoggedIn == false\" mat-button>\n    <img src=\"assets/img/login.png\" alt=\"\">\n    <p [ngClass]=\"{'highlighted': currentPage == '/login'}\">Login</p>\n  </button>\n  <button class=\"options\" (click)=\"logout()\" *ngIf=\"isLoggedIn == true\" mat-button>\n    <img src=\"assets/img/login.png\" alt=\"\">\n    <p>Logout</p>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: inline-block;\n  width: 97px;\n  height: auto;\n  background: #ffffff;\n  overflow: hidden;\n  box-shadow: 0px 0px 10px 0px #bebebec5;\n  z-index: 9999; }\n  .container .logo, .container .options {\n    height: 12vh;\n    width: 100%;\n    text-align: center;\n    border-bottom: 1px solid #f5f4f4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-right: 1px solid #f5f4f4; }\n  .container .logo img, .container .options img {\n      width: 6vh; }\n  .container .options {\n    line-height: 3vh; }\n  .container .options img {\n      width: 34px; }\n  .container .options .mkt {\n      width: 45px; }\n  .container .options p {\n      margin: 2px 0 0 0;\n      color: #9b9b9b;\n      font-size: 11px; }\n  .container .options .highlighted {\n      color: #39d4ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy90aGVtZS9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkNMWTtFRE1aLGdCQUFnQjtFQUNoQixzQ0NIYTtFREliLGFBQWEsRUFBQTtFQVBqQjtJQVVRLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdDQ1hPO0lEWVAsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLCtCQ2hCTyxFQUFBO0VERmY7TUFxQlksVUFBVSxFQUFBO0VBckJ0QjtJQTRCUSxnQkFBZ0IsRUFBQTtFQTVCeEI7TUErQlksV0FBVyxFQUFBO0VBL0J2QjtNQW1DWSxXQUFXLEVBQUE7RUFuQ3ZCO01BdUNZLGlCQUFpQjtNQUNqQixjQy9CQztNRGdDRCxlQUFlLEVBQUE7RUF6QzNCO01BNkNZLGNDekNNLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlc1wiO1xuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDk3cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCAkc2hhZG93O1xuICAgIHotaW5kZXg6IDk5OTk7XG5cbiAgICAubG9nbyB7XG4gICAgICAgIGhlaWdodDogMTJ2aDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNnZoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm9wdGlvbnMge1xuICAgICAgICBAZXh0ZW5kIC5sb2dvO1xuICAgICAgICAvLyBoZWlnaHQ6IDEwdmg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzdmg7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1rdCB7XG4gICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAycHggMCAwIDA7XG4gICAgICAgICAgICBjb2xvcjogJGJhY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGlnaGxpZ2h0ZWQge1xuICAgICAgICAgICAgY29sb3I6ICRibHVlVGhlbWU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy9BbGwgdGhlIGNvbG9ycyB1c2VkIGluIHRoZSBhcHAgd2lsbCBiZSBwcmVzZW50IGhlcmUuXG4kcHJpbWFyeTojZmZmZmZmO1xuJGRhcms6IzAwMDAwMDtcbiR0aGVtZTojZmFmYWZhO1xuJGJvcmRlcjojZjVmNGY0O1xuJHNoYWRvdzojYmViZWJlYzU7XG4kYmx1ZVRoZW1lOiMzOWQ0ZmY7XG4kZGFya0JsdWU6IzE4YzFmMDtcbiRncmV5VGhlbWU6I2Q4ZDhkODtcbiRoZWFkaW5nTm9ybUNvbG9yOiM3NDc0NzQ7XG4kYmxvY2tPcHQ6I2M3YzdjNztcbiRiYWNrOiM5YjliOWI7XG4kc21hbGxTaXplOjEycHg7XG4kaGVhZGluZ1NpemU6MTRweDtcbiR2YWxpZGF0aW9uOiNkODA5MDliMztcbiRjaGF0R3JlZW46IzMzY2QyOTtcbiRjaGF0SW5wdXQ6I2YxZjRmNDtcbiRzaGFkb3dGb3JtdWxhOjAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLFxuMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSxcbjAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7Il19 */"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/credentials/credential.service */ "./src/app/services/credentials/credential.service.ts");





var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(router, loc, credentials) {
        var _this = this;
        this.router = router;
        this.loc = loc;
        this.credentials = credentials;
        this.currentPage = '';
        this.isLoggedIn = false;
        if (this.credentials.user != null)
            this.isLoggedIn = true;
        this.credentials.isLoggedIn.subscribe(function (value) {
            _this.isLoggedIn = value;
        });
    }
    SideBarComponent.prototype.ngOnInit = function () {
        this.currentPage = this.loc.path();
    };
    SideBarComponent.prototype.goTo = function (page) {
        if (page == 'login') {
            this.currentPage = '/login';
            this.router.navigate(["/login"]);
        }
        else if (page == 'chat') {
            this.currentPage = '/chat';
            this.router.navigate(["/chat"]);
        }
        else if (page == 'dashboard') {
            this.currentPage = '/home';
            this.router.navigate(["/home"]);
        }
    };
    SideBarComponent.prototype.logout = function () {
        this.credentials.logout();
        this.router.navigate(['/plan']);
    };
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.scss */ "./src/app/components/side-bar/side-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], src_app_services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_4__["CredentialService"]])
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
        this.API_ENDPOINT = 'http://localhost:5000';
        // public API_ENDPOINT = 'https://mongodb-multi-instance-test.herokuapp.com'
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
        this.providers = [];
    }
    AuthService.prototype.signUp = function (params) {
        var url = this.constants.API_ENDPOINT + '/api/dentist/auth/v3/register';
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
    AuthService.prototype.forgot = function (params) {
        var url = this.constants.API_ENDPOINT + '/api/dentist/auth/login';
        var response = this.http.post(url, params, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        return response;
    };
    AuthService.prototype.setupDentist = function (params) {
        var url = this.constants.API_ENDPOINT + '/api/dentist/auth/v2/setup';
        var response = this.http.post(url, params, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        return response;
    };
    AuthService.prototype.serviceProviders = function () {
        var url = this.constants.API_ENDPOINT + '/api/system/get-services';
        var response = this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        return response;
    };
    AuthService.prototype.requestProvider = function (params) {
        var url = this.constants.API_ENDPOINT + '/api/system/add-service-request';
        var response = this.http.post(url, params, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        return response;
    };
    AuthService.prototype.authenticateToken = function (params) {
        var url = this.constants.API_ENDPOINT + '/api/dentist/auth/authenticate-token';
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CredentialService = /** @class */ (function () {
    function CredentialService() {
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.tempUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.token = localStorage.getItem('token');
        var temp = localStorage.getItem('user');
        if (temp) {
            this.user = JSON.parse(temp);
            this.tempUser.next(this.user);
            this.isLoggedIn.next(true);
        }
    }
    CredentialService.prototype.setUser = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', user.access_token);
        this.token = user.access_token;
        this.user = user;
        this.isLoggedIn.next(true);
        this.tempUser.next(this.user);
        console.log(this.isLoggedIn);
    };
    CredentialService.prototype.logout = function () {
        localStorage.clear();
        this.user = null;
        this.token = null;
        this.tempUser.next(this.user);
        this.isLoggedIn.next(false);
    };
    CredentialService.prototype.loggedIn = function () {
        console.log(this.loggedIn, this.user);
        if (this.token && this.user) {
            return true;
        }
        else {
            return false;
        }
    };
    CredentialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CredentialService);
    return CredentialService;
}());



/***/ }),

/***/ "./src/app/services/guards/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/guards/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _credentials_credential_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../credentials/credential.service */ "./src/app/services/credentials/credential.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.loggedIn()) {
            this.router.navigate(['plan']);
            return false;
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_credentials_credential_service__WEBPACK_IMPORTED_MODULE_2__["CredentialService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/guards/sess-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/guards/sess-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: SessGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessGuardService", function() { return SessGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _credentials_credential_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../credentials/credential.service */ "./src/app/services/credentials/credential.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SessGuardService = /** @class */ (function () {
    function SessGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    SessGuardService.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    };
    SessGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_credentials_credential_service__WEBPACK_IMPORTED_MODULE_2__["CredentialService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SessGuardService);
    return SessGuardService;
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
        var _token = localStorage.getItem('token');
        if (_token)
            options.headers.set('Authorization', _token);
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

module.exports = __webpack_require__(/*! /Users/Hamza/Documents/Node/AMP_API/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map