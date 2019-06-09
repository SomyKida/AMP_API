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

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  background: url('background.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL2Rpc3QvbW9iaWxlL29tbmkvc3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUE0QztFQUM1QywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFja2dyb3VuZC5wbmcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"

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

module.exports = "<div class=\"wrapper\">\n  <div class=\"upper\">\n    <img class=\"logo\" src=\"../../../assets/img/logo_mobile.png\" alt=\"logo\">\n  </div>\n  <div class=\"lower\">\n    <div class=\"buttons\">\n      <button class=\"btn\" (click)=\"goTo('login')\">LOGIN</button>\n      <button class=\"btn\" (click)=\"goTo('signup')\">SIGN UP</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/dummy/dummy.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/dummy/dummy.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background: transparent; }\n  .wrapper .upper {\n    display: flex;\n    flex: 0.9;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center; }\n  .wrapper .upper img {\n      width: 70%; }\n  .wrapper .lower {\n    flex: 0.1;\n    padding: 5%; }\n  .wrapper .lower .buttons {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: row; }\n  .wrapper .lower .buttons .btn {\n        flex: 1;\n        font-size: 4.5vw;\n        text-transform: uppercase;\n        background: #33cd29;\n        color: #ffffff;\n        font-family: 'ProximaNova-Regular';\n        letter-spacing: 2.5px;\n        box-shadow: 0px 10px 3px 0px #afaaaa33; }\n  .wrapper .lower .buttons .btn:first-child {\n          border-top-left-radius: 4vw;\n          border-bottom-left-radius: 4vw; }\n  .wrapper .lower .buttons .btn:last-child {\n          border-top-right-radius: 4vw;\n          border-bottom-right-radius: 4vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL2Rpc3QvbW9iaWxlL29tbmkvc3JjL2FwcC9hdXRoL2R1bW15L2R1bW15LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QixFQUFBO0VBTDNCO0lBUVEsYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0IsRUFBQTtFQWIxQjtNQWdCWSxVQUFVLEVBQUE7RUFoQnRCO0lBcUJRLFNBQVM7SUFDVCxXQUFXLEVBQUE7RUF0Qm5CO01BeUJZLFdBQVc7TUFDWCxZQUFZO01BQ1osYUFBYTtNQUNiLG1CQUFtQixFQUFBO0VBNUIvQjtRQStCZ0IsT0FBTztRQUNQLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxrQ0FBa0M7UUFDbEMscUJBQXFCO1FBQ3JCLHNDQUFzQyxFQUFBO0VBdEN0RDtVQXlDb0IsMkJBQTJCO1VBQzNCLDhCQUE4QixFQUFBO0VBMUNsRDtVQThDb0IsNEJBQTRCO1VBQzVCLCtCQUErQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9kdW1teS9kdW1teS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgLnVwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMC45O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxvd2VyIHtcbiAgICAgICAgZmxleDogMC4xO1xuICAgICAgICBwYWRkaW5nOiA1JTtcblxuICAgICAgICAuYnV0dG9ucyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNC41dnc7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzNjZDI5O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYU5vdmEtUmVndWxhcic7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDNweCAwcHggI2FmYWFhYTMzO1xuXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDR2dztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHZ3O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0dnc7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0dnc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"

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

module.exports = "<div class=\"container\">\n  <div class=\"upper\">\n    <img src=\"assets/img/logo_mobile.png\" alt=\"logo\">\n  </div>\n  <div class=\"lower\">\n    <div class=\"tabs\">\n      <button class=\"btn\" [ngClass]=\"{'active': whichTab == 'login' }\" (click)=\"changeTab('login')\">LOGIN</button>\n      <button class=\"btn\" [ngClass]=\"{'active': whichTab == 'signup' }\" (click)=\"changeTab('signup')\">SIGN UP</button>\n    </div>\n    <ng-container *ngIf=\"whichTab == 'signup'\">\n      <form class=\"fields\">\n        <div class=\"SignfieldSection\">\n          <div class=\"field\">\n            <p>Email</p>\n            <input [(ngModel)]=\"newUser.email\" placeholder=\"Enter your email\" type=\"email\" name=\"Email\">\n          </div>\n          <div class=\"field\">\n            <p>Password</p>\n            <input [(ngModel)]=\"newUser.password\" placeholder=\"Enter your password\" type=\"password\" name=\"Password\">\n          </div>\n          <div class=\"field\">\n            <p>Confirm Password</p>\n            <input [(ngModel)]=\"newUser.conf_password\" placeholder=\"Confirm your password\" type=\"password\"\n              name=\"Confirm Password\">\n          </div>\n          <div class=\"birth\">\n            <p>Birthdate</p>\n            <div class=\"shots\">\n              <input [(ngModel)]=\"newUser.day\" class=\"space\" type=\"number\" name=\"Day\">\n              <span> /</span>\n            </div>\n            <div class=\"shots middle\">\n              <input [(ngModel)]=\"newUser.month\" class=\"space\" type=\"number\" name=\"Month\">\n              <span> /</span>\n            </div>\n            <div class=\"last\">\n              <input [(ngModel)]=\"newUser.year\" type=\"number\" name=\"Year\">\n            </div>\n          </div>\n        </div>\n        <div class=\"signSub\">\n          <button [disabled]=\"authLoader\" type='button' (click)=\"signup()\" class=\"btn\">\n            <span>SIGN UP</span>\n          </button>\n        </div>\n      </form>\n    </ng-container>\n    <ng-container *ngIf=\"whichTab == 'login'\">\n      <form class=\"fields\">\n        <div class=\"fieldSection\">\n          <div class=\"field\">\n            <p>Email</p>\n            <input [(ngModel)]=\"authData.email\" placeholder=\"someone@somewhere.com\" type=\"email\" name=\"email\">\n          </div>\n          <div class=\"field\">\n            <p>Password</p>\n            <input [(ngModel)]=\"authData.password\" placeholder=\"something secrative\" type=\"password\" name=\"password\">\n          </div>\n          <div (click)=\"toggle('session')\" class=\"remember\">\n            <span [ngClass]=\"saveSession?'sessionChecked':'sessionUnChecked'\"></span>\n            <p>Remember Me</p>\n          </div>\n          <div (click)=\"toggle('touch')\" class=\"remember\">\n            <span [ngClass]=\"touchId?'sessionChecked':'sessionUnChecked'\"></span>\n            <p>Touch Id</p>\n          </div>\n        </div>\n        <div class=\"submission\">\n          <div class=\"forgot\">\n            <p>Forgot Username</p>\n            <p>Forgot Password</p>\n          </div>\n          <button [disabled]=\"authLoader\" type='button' (click)=\"login()\" class=\"btn\">\n            <span>LOGIN</span>\n          </button>\n        </div>\n      </form>\n    </ng-container>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%; }\n  .container .upper {\n    display: flex;\n    flex: 0.3;\n    align-items: center;\n    justify-content: center; }\n  .container .upper img {\n      width: 75%; }\n  .container .lower {\n    display: flex;\n    flex-direction: column;\n    flex: 0.7;\n    background: #ffffff;\n    border-top-left-radius: 5vw;\n    border-top-right-radius: 5vw;\n    box-shadow: 0 5vw 8vw #000000;\n    overflow: hidden; }\n  .container .lower .tabs {\n      display: flex;\n      flex: 0.15;\n      flex-direction: row; }\n  .container .lower .tabs .btn {\n        flex: 1;\n        font-size: 4vw;\n        font-weight: bold;\n        letter-spacing: 0.5vw;\n        color: #9b9b9b;\n        background: #ffffff;\n        border: none;\n        font-family: 'ProximaNova-Semibold'; }\n  .container .lower .tabs .btn.active {\n          border-bottom: 1vw solid #33cd29;\n          color: #33cd29; }\n  .container .lower .fields {\n      flex: 0.85;\n      display: flex;\n      flex-direction: column; }\n  .container .lower .fields .fieldSection, .container .lower .fields .SignfieldSection {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        flex: 0.7;\n        padding: 5%; }\n  .container .lower .fields .fieldSection .field, .container .lower .fields .SignfieldSection .field {\n          width: 100%;\n          margin-bottom: 4vw; }\n  .container .lower .fields .fieldSection .field p, .container .lower .fields .SignfieldSection .field p {\n            margin: 0;\n            font-size: 4vw;\n            font-weight: bold;\n            color: #9b9b9b; }\n  .container .lower .fields .fieldSection .field input, .container .lower .fields .SignfieldSection .field input {\n            padding: 4% 0;\n            width: 100%;\n            font-size: 4vw;\n            color: #000000;\n            border: 0;\n            border-bottom: 1px solid #9b9b9b; }\n  .container .lower .fields .fieldSection .birth, .container .lower .fields .SignfieldSection .birth {\n          display: inline-block;\n          width: 100%; }\n  .container .lower .fields .fieldSection .birth p, .container .lower .fields .SignfieldSection .birth p {\n            margin-bottom: 4vw;\n            font-size: 4vw;\n            font-weight: bold;\n            color: #9b9b9b; }\n  .container .lower .fields .fieldSection .birth .shots, .container .lower .fields .SignfieldSection .birth .shots, .container .lower .fields .fieldSection .birth .last, .container .lower .fields .SignfieldSection .birth .last {\n            display: inline-block;\n            width: 35%; }\n  .container .lower .fields .fieldSection .birth .shots input, .container .lower .fields .SignfieldSection .birth .shots input, .container .lower .fields .fieldSection .birth .last input, .container .lower .fields .SignfieldSection .birth .last input {\n              width: 65%;\n              height: 9vw;\n              padding: 5%;\n              border: 1px solid #9b9b9b;\n              box-shadow: 0 1vw 2vw 0 #d3d3d380;\n              vertical-align: middle;\n              border-radius: 4vw; }\n  .container .lower .fields .fieldSection .birth .shots span, .container .lower .fields .SignfieldSection .birth .shots span, .container .lower .fields .fieldSection .birth .last span, .container .lower .fields .SignfieldSection .birth .last span {\n              float: right;\n              font-size: 10vw;\n              vertical-align: middle; }\n  .container .lower .fields .fieldSection .birth .middle, .container .lower .fields .SignfieldSection .birth .middle {\n            text-align: center; }\n  .container .lower .fields .fieldSection .birth .last, .container .lower .fields .SignfieldSection .birth .last {\n            width: calc(100% - 70%); }\n  .container .lower .fields .fieldSection .birth .last input, .container .lower .fields .SignfieldSection .birth .last input {\n              text-align: right;\n              width: 80%; }\n  .container .lower .fields .SignfieldSection {\n        flex: 0.8; }\n  .container .lower .fields .submission, .container .lower .fields .signSub {\n        flex: 0.3;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column; }\n  .container .lower .fields .submission .btn, .container .lower .fields .signSub .btn {\n          width: 90%;\n          background: #33cd29;\n          border-radius: 3vw;\n          padding: 5%;\n          letter-spacing: 2.3px;\n          font-size: 4vw;\n          color: #ffffff;\n          box-shadow: 0px 5px 15px 5px #afaaaa33; }\n  .container .lower .fields .submission .forgot, .container .lower .fields .signSub .forgot {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          justify-content: center;\n          width: 90%;\n          margin-bottom: 4vw; }\n  .container .lower .fields .submission .forgot p, .container .lower .fields .signSub .forgot p {\n            flex: 1;\n            margin: 0;\n            text-align: center;\n            color: #33cd29;\n            font-size: 3.5vw;\n            letter-spacing: 0.59px; }\n  .container .lower .fields .signSub {\n        flex: 0.2; }\n  .container .lower .fields .remember {\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n        align-items: center;\n        margin-bottom: 4vw; }\n  .container .lower .fields .remember p {\n          margin: 0;\n          font-size: 4vw;\n          color: #b7b7b7; }\n  .container .lower .fields .remember .sessionUnChecked {\n          width: 5vw;\n          height: 5vw;\n          border: 1vw solid #33cd29;\n          border-radius: 10vw;\n          margin-right: 3vw; }\n  .container .lower .fields .remember .sessionChecked {\n          width: 5vw;\n          background-color: #33cd29;\n          height: 5vw;\n          border: 1vw solid #33cd29;\n          border-radius: 10vw;\n          margin-right: 3vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL2Rpc3QvbW9iaWxlL29tbmkvc3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBSmhCO0lBT1EsYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsdUJBQXVCLEVBQUE7RUFWL0I7TUFhWSxVQUFVLEVBQUE7RUFidEI7SUFtQlEsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGdCQUFnQixFQUFBO0VBMUJ4QjtNQTZCWSxhQUFhO01BQ2IsVUFBVTtNQUNWLG1CQUFtQixFQUFBO0VBL0IvQjtRQWtDZ0IsT0FBTztRQUNQLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLG1DQUFtQyxFQUFBO0VBekNuRDtVQTRDb0IsZ0NBQWdDO1VBQ2hDLGNBQWMsRUFBQTtFQTdDbEM7TUFvRFksVUFBVTtNQUNWLGFBQWE7TUFDYixzQkFBc0IsRUFBQTtFQXREbEM7UUF5RGdCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxXQUFXLEVBQUE7RUE3RDNCO1VBZ0VvQixXQUFXO1VBQ1gsa0JBQWtCLEVBQUE7RUFqRXRDO1lBb0V3QixTQUFTO1lBQ1QsY0FBYztZQUNkLGlCQUFpQjtZQUNqQixjQUFjLEVBQUE7RUF2RXRDO1lBMkV3QixhQUFhO1lBQ2IsV0FBVztZQUNYLGNBQWM7WUFDZCxjQUFjO1lBQ2QsU0FBUztZQUNULGdDQUFnQyxFQUFBO0VBaEZ4RDtVQXFGb0IscUJBQXFCO1VBQ3JCLFdBQVcsRUFBQTtFQXRGL0I7WUF5RndCLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLGNBQWMsRUFBQTtFQTVGdEM7WUFnR3dCLHFCQUFxQjtZQUNyQixVQUFVLEVBQUE7RUFqR2xDO2NBb0c0QixVQUFVO2NBQ1YsV0FBVztjQUNYLFdBQVc7Y0FDWCx5QkFBeUI7Y0FDekIsaUNBQWlDO2NBQ2pDLHNCQUFzQjtjQUN0QixrQkFBa0IsRUFBQTtFQTFHOUM7Y0E4RzRCLFlBQVk7Y0FDWixlQUFlO2NBQ2Ysc0JBQXNCLEVBQUE7RUFoSGxEO1lBcUh3QixrQkFBa0IsRUFBQTtFQXJIMUM7WUEwSHdCLHVCQUF1QixFQUFBO0VBMUgvQztjQTZINEIsaUJBQWlCO2NBQ2pCLFVBQVUsRUFBQTtFQTlIdEM7UUF1SWdCLFNBQVMsRUFBQTtFQXZJekI7UUEySWdCLFNBQVM7UUFDVCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixzQkFBc0IsRUFBQTtFQS9JdEM7VUFrSm9CLFVBQVU7VUFDVixtQkFBbUI7VUFDbkIsa0JBQWtCO1VBQ2xCLFdBQVc7VUFDWCxxQkFBcUI7VUFDckIsY0FBYztVQUNkLGNBQWM7VUFDZCxzQ0FBc0MsRUFBQTtFQXpKMUQ7VUE4Sm9CLGFBQWE7VUFDYixtQkFBbUI7VUFDbkIsbUJBQW1CO1VBQ25CLHVCQUF1QjtVQUN2QixVQUFVO1VBQ1Ysa0JBQWtCLEVBQUE7RUFuS3RDO1lBc0t3QixPQUFPO1lBQ1AsU0FBUztZQUNULGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLHNCQUFzQixFQUFBO0VBM0s5QztRQW1MZ0IsU0FBUyxFQUFBO0VBbkx6QjtRQXVMZ0IsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGtCQUFrQixFQUFBO0VBM0xsQztVQThMb0IsU0FBUztVQUNULGNBQWM7VUFDZCxjQUFjLEVBQUE7RUFoTWxDO1VBb01vQixVQUFVO1VBQ1YsV0FBVztVQUNYLHlCQUF5QjtVQUN6QixtQkFBbUI7VUFDbkIsaUJBQWlCLEVBQUE7RUF4TXJDO1VBMk1rQixVQUFVO1VBQ1YseUJBQXlCO1VBQ3pCLFdBQVc7VUFDWCx5QkFBeUI7VUFDekIsbUJBQW1CO1VBQ25CLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAudXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4OiAwLjM7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAubG93ZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4OiAwLjc7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDV2dztcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDV2dztcbiAgICAgICAgYm94LXNoYWRvdzogMCA1dncgOHZ3ICMwMDAwMDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgLnRhYnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDAuMTU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjV2dztcbiAgICAgICAgICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3hpbWFOb3ZhLVNlbWlib2xkJztcblxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXZ3IHNvbGlkICMzM2NkMjk7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzNjZDI5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLmZpZWxkcyB7XG4gICAgICAgICAgICBmbGV4OiAwLjg1O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIC5maWVsZFNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZsZXg6IDAuNztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JTtcblxuICAgICAgICAgICAgICAgIC5maWVsZCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0dnc7XG5cbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDR2dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0JSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDR2dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYmlydGgge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnNob3RzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxdncgMnZ3IDAgI2QzZDNkMzgwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubWlkZGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5sYXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgLnNob3RzO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwJSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5TaWduZmllbGRTZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBAZXh0ZW5kIC5maWVsZFNlY3Rpb247XG4gICAgICAgICAgICAgICAgZmxleDogMC44O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3VibWlzc2lvbiB7XG4gICAgICAgICAgICAgICAgZmxleDogMC4zO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzM2NkMjk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDN2dztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjNweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggNXB4ICNhZmFhYWEzMztcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC5mb3Jnb3Qge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHZ3O1xuXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzNjZDI5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjV2dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjU5cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNpZ25TdWIge1xuICAgICAgICAgICAgICAgIEBleHRlbmQgLnN1Ym1pc3Npb247XG4gICAgICAgICAgICAgICAgZmxleDogMC4yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVtZW1iZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDR2dztcblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I3YjdiNztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc2Vzc2lvblVuQ2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1dnc7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXZ3O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDF2dyBzb2xpZCAjMzNjZDI5O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHZ3O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDN2dztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNlc3Npb25DaGVja2VkIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1dnc7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNjZDI5O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1dnc7XG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDF2dyBzb2xpZCAjMzNjZDI5O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTB2dztcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3Z3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbn1cbiJdfQ== */"

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