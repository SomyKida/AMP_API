(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _dummy_dummy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dummy/dummy.component */ "./src/app/auth/dummy/dummy.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");






var routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dummy',
                pathMatch: 'full'
            },
            {
                path: 'dummy',
                component: _dummy_dummy_component__WEBPACK_IMPORTED_MODULE_4__["DummyComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
            },
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  background: url('background.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcVXNlcnNcXEtlZWFub1xcRGVza3RvcFxca2VlYW5cXFNvbXlraWRhXFxDbGllbnRzXFxBTVBcXFByb2plY3RcXEFQSVxcQU1QX0FQSVxcZGlzdFxcbW9iaWxlXFxvbW5pL3NyY1xcYXBwXFxhdXRoXFxhdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBNEM7RUFDNUMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _dummy_dummy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dummy/dummy.component */ "./src/app/auth/dummy/dummy.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], _dummy_dummy_component__WEBPACK_IMPORTED_MODULE_6__["DummyComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/dummy/dummy.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/dummy/dummy.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"upper\">\r\n    <img class=\"logo\" src=\"../../../assets/img/logo_mobile.png\" alt=\"logo\">\r\n  </div>\r\n  <div class=\"lower\">\r\n    <div class=\"buttons\">\r\n      <div align=\"center\" class=\"btn\" (click)=\"goTo('login')\">LOGIN</div>\r\n      <div align=\"center\" class=\"btn\" (click)=\"goTo('signup')\">SIGN UP</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/dummy/dummy.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/dummy/dummy.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background: transparent; }\n  .wrapper .upper {\n    display: flex;\n    flex: 0.9;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    margin-bottom: 12% !important; }\n  .wrapper .upper img {\n      width: 70%; }\n  .wrapper .lower {\n    flex: 0.1;\n    padding: 5%; }\n  .wrapper .lower .buttons {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: row; }\n  .wrapper .lower .buttons .btn {\n        flex: 1;\n        font-size: 5.5vw;\n        text-transform: uppercase;\n        background: #33cd29;\n        color: #ffffff;\n        font-family: 'ProximaNova-Semibold';\n        letter-spacing: 2.52px;\n        padding: 15px; }\n  .wrapper .lower .buttons .btn:first-child {\n          border-top-left-radius: 4vw;\n          border-bottom-left-radius: 4vw; }\n  .wrapper .lower .buttons .btn:last-child {\n          border-top-right-radius: 4vw;\n          border-bottom-right-radius: 4vw; }\n  .wrapper .lower .buttons:first-child {\n        border-right: gray;\n        border-width: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9kdW1teS9DOlxcVXNlcnNcXEtlZWFub1xcRGVza3RvcFxca2VlYW5cXFNvbXlraWRhXFxDbGllbnRzXFxBTVBcXFByb2plY3RcXEFQSVxcQU1QX0FQSVxcZGlzdFxcbW9iaWxlXFxvbW5pL3NyY1xcYXBwXFxhdXRoXFxkdW1teVxcZHVtbXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7RUFMM0I7SUFRUSxhQUFhO0lBQ2IsU0FBUztJQUNULHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQiw2QkFBNkIsRUFBQTtFQWRyQztNQWlCWSxVQUFVLEVBQUE7RUFqQnRCO0lBc0JRLFNBQVM7SUFDVCxXQUFXLEVBQUE7RUF2Qm5CO01BMEJZLFdBQVc7TUFDWCxZQUFZO01BQ1osYUFBYTtNQUNiLG1CQUFtQixFQUFBO0VBN0IvQjtRQWdDZ0IsT0FBTztRQUNQLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxtQ0FBbUM7UUFDbkMsc0JBQXNCO1FBQ3RCLGFBQWEsRUFBQTtFQXZDN0I7VUEwQ29CLDJCQUEyQjtVQUMzQiw4QkFBOEIsRUFBQTtFQTNDbEQ7VUErQ29CLDRCQUE0QjtVQUM1QiwrQkFBK0IsRUFBQTtFQWhEbkQ7UUFxRGdCLGtCQUFrQjtRQUNsQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZHVtbXkvZHVtbXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgLnVwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXg6IDAuOTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEyJSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG93ZXIge1xyXG4gICAgICAgIGZsZXg6IDAuMTtcclxuICAgICAgICBwYWRkaW5nOiA1JTtcclxuXHJcbiAgICAgICAgLmJ1dHRvbnMge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1LjV2dztcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzNjZDI5O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWFOb3ZhLVNlbWlib2xkJztcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjUycHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDR2dztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBncmF5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/dummy/dummy.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/dummy/dummy.component.ts ***!
  \***********************************************/
/*! exports provided: DummyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyComponent", function() { return DummyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DummyComponent = /** @class */ (function () {
    function DummyComponent(router) {
        this.router = router;
    }
    DummyComponent.prototype.ngOnInit = function () {
    };
    DummyComponent.prototype.goTo = function (which) {
        this.router.navigate(['/auth/login']);
    };
    DummyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dummy',
            template: __webpack_require__(/*! ./dummy.component.html */ "./src/app/auth/dummy/dummy.component.html"),
            styles: [__webpack_require__(/*! ./dummy.component.scss */ "./src/app/auth/dummy/dummy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DummyComponent);
    return DummyComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"upper\">\r\n    <img src=\"assets/img/logo_mobile.png\" alt=\"logo\">\r\n  </div>\r\n  <div class=\"lower\">\r\n    <div class=\"tabs\">\r\n      <button class=\"btn\" [ngClass]=\"{'active': whichTab == 'login' }\" (click)=\"changeTab('login')\">LOGIN</button>\r\n      <button class=\"btn\" [ngClass]=\"{'active': whichTab == 'signup' }\" (click)=\"changeTab('signup')\">SIGN UP</button>\r\n    </div>\r\n    <ng-container *ngIf=\"whichTab == 'signup'\">\r\n      <form class=\"fields\">\r\n        <div class=\"SignfieldSection\">\r\n          <div class=\"field\">\r\n            <p>Username</p>\r\n            <input [(ngModel)]=\"newUser.email\" placeholder=\"Enter your email\" type=\"email\" name=\"Email\">\r\n          </div>\r\n          <div class=\"field\">\r\n            <p>Password</p>\r\n            <input [(ngModel)]=\"newUser.password\" placeholder=\"Enter your password\" type=\"password\" name=\"Password\">\r\n            <img class=\"touch_id\" src=\"/assets/img/touch_id.png\" alt=\"touch_id\">\r\n          </div>\r\n          <div class=\"field\">\r\n            <p>Confirm Password</p>\r\n            <input [(ngModel)]=\"newUser.conf_password\" placeholder=\"Confirm your password\" type=\"password\"\r\n              name=\"Confirm Password\">\r\n          </div>\r\n          <div class=\"birth\">\r\n            <p>Birthdate</p>\r\n            <div class=\"shots\">\r\n              <input [(ngModel)]=\"newUser.day\" class=\"space\" type=\"number\" name=\"Day\">\r\n              <span> /</span>\r\n            </div>\r\n            <div class=\"shots middle\">\r\n              <input [(ngModel)]=\"newUser.month\" class=\"space\" type=\"number\" name=\"Month\">\r\n              <span> /</span>\r\n            </div>\r\n            <div class=\"last\">\r\n              <input [(ngModel)]=\"newUser.year\" type=\"number\" name=\"Year\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"signSub\">\r\n          <button [disabled]=\"authLoader\" type='button' (click)=\"signup()\" class=\"btn\">\r\n            <span>SIGN UP</span>\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"whichTab == 'login'\">\r\n      <form class=\"fields\">\r\n        <div class=\"fieldSection\">\r\n          <div class=\"field\">\r\n            <p>Email</p>\r\n            <input [(ngModel)]=\"authData.email\" placeholder=\"someone@somewhere.com\" type=\"email\" name=\"email\">\r\n          </div>\r\n          <div class=\"field\">\r\n            <p>Password</p>\r\n            <input [(ngModel)]=\"authData.password\" placeholder=\"something secrative\" type=\"password\" name=\"password\">\r\n          </div>\r\n          <div (click)=\"toggle('session')\" class=\"remember\">\r\n            <span [ngClass]=\"saveSession?'sessionChecked':'sessionUnChecked'\"></span>\r\n            <p>Remember Me</p>\r\n          </div>\r\n          <div (click)=\"toggle('touch')\" class=\"remember\">\r\n            <span [ngClass]=\"touchId?'sessionChecked':'sessionUnChecked'\"></span>\r\n            <p>Touch Id</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"submission\">\r\n          <div class=\"forgot\">\r\n            <p>Forgot Username</p>\r\n            <p>Forgot Password</p>\r\n          </div>\r\n          <button [disabled]=\"authLoader\" type='button' (click)=\"login()\" class=\"btn\">\r\n            <span>LOGIN</span>\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </ng-container>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%; }\n  .container .upper {\n    display: flex;\n    flex: 0.3;\n    align-items: center;\n    justify-content: center; }\n  .container .upper img {\n      width: 75%; }\n  .container .lower {\n    display: flex;\n    flex-direction: column;\n    flex: 0.7;\n    background: #ffffff;\n    border-top-left-radius: 5vw;\n    border-top-right-radius: 5vw;\n    box-shadow: 0 5vw 8vw #000000;\n    overflow: hidden; }\n  .container .lower .tabs {\n      display: flex;\n      flex: 0.15;\n      flex-direction: row; }\n  .container .lower .tabs .btn {\n        flex: 1;\n        font-size: 4vw;\n        font-weight: bold;\n        letter-spacing: 0.5vw;\n        color: #9b9b9b;\n        background: #ffffff;\n        border: none;\n        font-family: 'ProximaNova-Semibold'; }\n  .container .lower .tabs .btn.active {\n          border-bottom: 1vw solid #33cd29;\n          color: #33cd29; }\n  .container .lower .fields {\n      flex: 0.85;\n      display: flex;\n      flex-direction: column; }\n  .container .lower .fields .fieldSection, .container .lower .fields .SignfieldSection {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        flex: 0.7;\n        padding: 5%; }\n  .container .lower .fields .fieldSection .field, .container .lower .fields .SignfieldSection .field {\n          width: 100%;\n          margin-bottom: 4vw; }\n  .container .lower .fields .fieldSection .field p, .container .lower .fields .SignfieldSection .field p {\n            margin: 0;\n            font-size: 4vw;\n            font-weight: bold;\n            color: #9b9b9b; }\n  .container .lower .fields .fieldSection .field input, .container .lower .fields .SignfieldSection .field input {\n            padding: 4% 0;\n            width: 100%;\n            font-size: 4vw;\n            color: #000000;\n            border: 0;\n            border-bottom: 1px solid #9b9b9b; }\n  .container .lower .fields .fieldSection .birth, .container .lower .fields .SignfieldSection .birth {\n          display: inline-block;\n          width: 100%; }\n  .container .lower .fields .fieldSection .birth p, .container .lower .fields .SignfieldSection .birth p {\n            margin-bottom: 4vw;\n            font-size: 4vw;\n            font-weight: bold;\n            color: #9b9b9b; }\n  .container .lower .fields .fieldSection .birth .shots, .container .lower .fields .SignfieldSection .birth .shots, .container .lower .fields .fieldSection .birth .last, .container .lower .fields .SignfieldSection .birth .last {\n            display: inline-block;\n            width: 35%; }\n  .container .lower .fields .fieldSection .birth .shots input, .container .lower .fields .SignfieldSection .birth .shots input, .container .lower .fields .fieldSection .birth .last input, .container .lower .fields .SignfieldSection .birth .last input {\n              width: 65%;\n              height: 9vw;\n              padding: 5%;\n              border: 1px solid #9b9b9b;\n              box-shadow: 0 1vw 2vw 0 #d3d3d380;\n              vertical-align: middle;\n              border-radius: 4vw; }\n  .container .lower .fields .fieldSection .birth .shots span, .container .lower .fields .SignfieldSection .birth .shots span, .container .lower .fields .fieldSection .birth .last span, .container .lower .fields .SignfieldSection .birth .last span {\n              float: right;\n              font-size: 10vw;\n              vertical-align: middle; }\n  .container .lower .fields .fieldSection .birth .middle, .container .lower .fields .SignfieldSection .birth .middle {\n            text-align: center; }\n  .container .lower .fields .fieldSection .birth .last, .container .lower .fields .SignfieldSection .birth .last {\n            width: calc(100% - 70%); }\n  .container .lower .fields .fieldSection .birth .last input, .container .lower .fields .SignfieldSection .birth .last input {\n              text-align: right;\n              width: 80%; }\n  .container .lower .fields .SignfieldSection {\n        flex: 0.8; }\n  .container .lower .fields .submission, .container .lower .fields .signSub {\n        flex: 0.3;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column; }\n  .container .lower .fields .submission .btn, .container .lower .fields .signSub .btn {\n          width: 90%;\n          background: #33cd29;\n          border-radius: 3vw;\n          padding: 5%;\n          letter-spacing: 2.3px;\n          font-size: 4vw;\n          color: #ffffff;\n          box-shadow: 0px 5px 15px 5px #afaaaa33; }\n  .container .lower .fields .submission .forgot, .container .lower .fields .signSub .forgot {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          justify-content: center;\n          width: 90%;\n          margin-bottom: 4vw; }\n  .container .lower .fields .submission .forgot p, .container .lower .fields .signSub .forgot p {\n            flex: 1;\n            margin: 0;\n            text-align: center;\n            color: #33cd29;\n            font-size: 3.5vw;\n            letter-spacing: 0.59px; }\n  .container .lower .fields .signSub {\n        flex: 0.2; }\n  .container .lower .fields .remember {\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n        align-items: center;\n        margin-bottom: 4vw; }\n  .container .lower .fields .remember p {\n          margin: 0;\n          font-size: 4vw;\n          color: #b7b7b7; }\n  .container .lower .fields .remember .sessionUnChecked {\n          width: 5vw;\n          height: 5vw;\n          border: 1vw solid #33cd29;\n          border-radius: 10vw;\n          margin-right: 3vw; }\n  .container .lower .fields .remember .sessionChecked {\n          width: 5vw;\n          background-color: #33cd29;\n          height: 5vw;\n          border: 1vw solid #33cd29;\n          border-radius: 10vw;\n          margin-right: 3vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9DOlxcVXNlcnNcXEtlZWFub1xcRGVza3RvcFxca2VlYW5cXFNvbXlraWRhXFxDbGllbnRzXFxBTVBcXFByb2plY3RcXEFQSVxcQU1QX0FQSVxcZGlzdFxcbW9iaWxlXFxvbW5pL3NyY1xcYXBwXFxhdXRoXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFKaEI7SUFPUSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTtFQVYvQjtNQWFZLFVBQVUsRUFBQTtFQWJ0QjtJQW1CUSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsZ0JBQWdCLEVBQUE7RUExQnhCO01BNkJZLGFBQWE7TUFDYixVQUFVO01BQ1YsbUJBQW1CLEVBQUE7RUEvQi9CO1FBa0NnQixPQUFPO1FBQ1AsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsY0FBYztRQUNkLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osbUNBQW1DLEVBQUE7RUF6Q25EO1VBNENvQixnQ0FBZ0M7VUFDaEMsY0FBYyxFQUFBO0VBN0NsQztNQW9EWSxVQUFVO01BQ1YsYUFBYTtNQUNiLHNCQUFzQixFQUFBO0VBdERsQztRQXlEZ0IsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUztRQUNULFdBQVcsRUFBQTtFQTdEM0I7VUFnRW9CLFdBQVc7VUFDWCxrQkFBa0IsRUFBQTtFQWpFdEM7WUFvRXdCLFNBQVM7WUFDVCxjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLGNBQWMsRUFBQTtFQXZFdEM7WUEyRXdCLGFBQWE7WUFDYixXQUFXO1lBQ1gsY0FBYztZQUNkLGNBQWM7WUFDZCxTQUFTO1lBQ1QsZ0NBQWdDLEVBQUE7RUFoRnhEO1VBcUZvQixxQkFBcUI7VUFDckIsV0FBVyxFQUFBO0VBdEYvQjtZQXlGd0Isa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsY0FBYyxFQUFBO0VBNUZ0QztZQWdHd0IscUJBQXFCO1lBQ3JCLFVBQVUsRUFBQTtFQWpHbEM7Y0FvRzRCLFVBQVU7Y0FDVixXQUFXO2NBQ1gsV0FBVztjQUNYLHlCQUF5QjtjQUN6QixpQ0FBaUM7Y0FDakMsc0JBQXNCO2NBQ3RCLGtCQUFrQixFQUFBO0VBMUc5QztjQThHNEIsWUFBWTtjQUNaLGVBQWU7Y0FDZixzQkFBc0IsRUFBQTtFQWhIbEQ7WUFxSHdCLGtCQUFrQixFQUFBO0VBckgxQztZQTBId0IsdUJBQXVCLEVBQUE7RUExSC9DO2NBNkg0QixpQkFBaUI7Y0FDakIsVUFBVSxFQUFBO0VBOUh0QztRQXVJZ0IsU0FBUyxFQUFBO0VBdkl6QjtRQTJJZ0IsU0FBUztRQUNULGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLHNCQUFzQixFQUFBO0VBL0l0QztVQWtKb0IsVUFBVTtVQUNWLG1CQUFtQjtVQUNuQixrQkFBa0I7VUFDbEIsV0FBVztVQUNYLHFCQUFxQjtVQUNyQixjQUFjO1VBQ2QsY0FBYztVQUNkLHNDQUFzQyxFQUFBO0VBekoxRDtVQThKb0IsYUFBYTtVQUNiLG1CQUFtQjtVQUNuQixtQkFBbUI7VUFDbkIsdUJBQXVCO1VBQ3ZCLFVBQVU7VUFDVixrQkFBa0IsRUFBQTtFQW5LdEM7WUFzS3dCLE9BQU87WUFDUCxTQUFTO1lBQ1Qsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsc0JBQXNCLEVBQUE7RUEzSzlDO1FBbUxnQixTQUFTLEVBQUE7RUFuTHpCO1FBdUxnQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsa0JBQWtCLEVBQUE7RUEzTGxDO1VBOExvQixTQUFTO1VBQ1QsY0FBYztVQUNkLGNBQWMsRUFBQTtFQWhNbEM7VUFvTW9CLFVBQVU7VUFDVixXQUFXO1VBQ1gseUJBQXlCO1VBQ3pCLG1CQUFtQjtVQUNuQixpQkFBaUIsRUFBQTtFQXhNckM7VUEyTWtCLFVBQVU7VUFDVix5QkFBeUI7VUFDekIsV0FBVztVQUNYLHlCQUF5QjtVQUN6QixtQkFBbUI7VUFDbkIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC51cHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAwLjM7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5sb3dlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXg6IDAuNztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDV2dztcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXZ3O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXZ3IDh2dyAjMDAwMDAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgIC50YWJzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleDogMC4xNTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41dnc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWFOb3ZhLVNlbWlib2xkJztcclxuXHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXZ3IHNvbGlkICMzM2NkMjk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzM2NkMjk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmllbGRzIHtcclxuICAgICAgICAgICAgZmxleDogMC44NTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIC5maWVsZFNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleDogMC43O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNSU7XHJcblxyXG4gICAgICAgICAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0dnc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5YjliOWI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQlIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5YjliOWI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5iaXJ0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDR2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3RzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxdncgMnZ3IDAgI2QzZDNkMzgwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDR2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWlkZGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmxhc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kIC5zaG90cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuU2lnbmZpZWxkU2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kIC5maWVsZFNlY3Rpb247XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAwLjg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdWJtaXNzaW9uIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDAuMztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzY2QyOTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCA1cHggI2FmYWFhYTMzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9yZ290IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDR2dztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzY2QyOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjV2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNTlweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2lnblN1YiB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kIC5zdWJtaXNzaW9uO1xyXG4gICAgICAgICAgICAgICAgZmxleDogMC4yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmVtZW1iZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0dnc7XHJcblxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjdiN2I3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zZXNzaW9uVW5DaGVja2VkIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXZ3IHNvbGlkICMzM2NkMjk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTB2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDN2dztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZXNzaW9uQ2hlY2tlZCB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1dnc7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzM2NkMjk7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNXZ3O1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDF2dyBzb2xpZCAjMzNjZDI5O1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHZ3O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDN2dztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/credentials/credential.service */ "./src/app/services/credentials/credential.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, credential) {
        this.auth = auth;
        this.router = router;
        this.credential = credential;
        this.whichTab = 'login';
        this.authData = {
            email: '',
            password: ''
        };
        this.newUser = {
            email: '',
            password: '',
            conf_password: '',
            month: '',
            day: '',
            year: ''
        };
        this.authLoader = false;
        this.saveSession = false;
        this.touchId = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.changeTab = function (which) {
        this.whichTab = which;
    };
    LoginComponent.prototype.toggle = function (type) {
        switch (type) {
            case 'session':
                this.saveSession = !this.saveSession;
                break;
            case 'touch':
                this.touchId = !this.touchId;
                break;
            default:
                return;
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.authData.email == '' || this.authData.password == '') {
            alert("Please don't leave any field blank.");
            return;
        }
        var params = {
            email: this.authData.email,
            pwd: this.authData.password
        };
        this.authLoader = true;
        this.auth.login(params).subscribe(function (success) {
            _this.credential.setUser(success.data);
            _this.authLoader = false;
            _this.router.navigate(['/home']);
        }, function (error) {
            var message = JSON.parse(error._body);
            alert(message.errorMessage);
            _this.authLoader = false;
        });
    };
    LoginComponent.prototype.signup = function () {
        var _this = this;
        if (this.newUser.email == '' || this.newUser.day == '' || this.newUser.password == '' || this.newUser.conf_password == '' || this.newUser.month == '' || this.newUser.year == '') {
            alert("Please don't leave any field blank.");
            return;
        }
        var params = {
            email: this.newUser.email,
            pwd: this.newUser.password,
            conf_pwd: this.newUser.conf_password,
            dob: this.newUser.day + '/' + this.newUser.month + '/' + this.newUser.year
        };
        this.authLoader = true;
        this.auth.signUp(params).subscribe(function (success) {
            _this.credential.setUser(success.data);
            _this.authLoader = false;
            _this.router.navigate(['/home']);
        }, function (error) {
            var message = JSON.parse(error._body);
            alert(message.errorMessage);
            _this.authLoader = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_4__["CredentialService"]])
    ], LoginComponent);
    return LoginComponent;
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
        //public API_ENDPOINT = 'http://localhost:5000'
        this.API_ENDPOINT = 'https://mongodb-multi-instance-test.herokuapp.com';
        this.Image_base_path = '';
        this.fbAppId = "668732456921248";
        this.googleClientId = "287989781591-0l0m9f6dmgikf84c8223gbkfu8g27mus.apps.googleusercontent.com"; //email used codingpixel.test6@gmail.com
        this.googleClientSecret = "DDFBh7oI3NO6qaQsxpLdGNEN";
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
/* harmony import */ var _init_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../init/constants.service */ "./src/app/init/constants.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, constants) {
        this.http = http;
        this.constants = constants;
        this.providers = [];
    }
    AuthService.prototype.signUp = function (params) {
        var url = this.constants.API_ENDPOINT + '/api/patient/auth/signup';
        var response = this.http.post(url, params, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        return response;
    };
    AuthService.prototype.login = function (params) {
        var url = this.constants.API_ENDPOINT + '/api/patient/auth/login';
        var response = this.http.post(url, params, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        return response;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _init_constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"]])
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
        this.sessionStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.token = localStorage.getItem('token');
        var temp = localStorage.getItem('user');
        if (temp) {
            this.user = JSON.parse(temp);
        }
    }
    CredentialService.prototype.setUser = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', user.access_token);
        this.token = user.access_token;
        this.user = user;
        this.sessionStatus.next(this.user);
    };
    CredentialService.prototype.logout = function () {
        localStorage.clear();
        this.user = null;
        this.token = null;
        this.sessionStatus.next(null);
    };
    CredentialService.prototype.loggedIn = function () {
        if (this.token && this.user) {
            if (this.user.init_payment == true)
                return true;
            else
                return false;
        }
        else {
            return false;
        }
    };
    CredentialService.prototype.selfSetup = function () {
        if (this.user.first_setup == true && this.user.theme_setup == true) {
            return true;
        }
        else
            return false;
    };
    CredentialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CredentialService);
    return CredentialService;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map