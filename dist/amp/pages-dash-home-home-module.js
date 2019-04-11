(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dash-home-home-module"],{

/***/ "./src/app/pages/dash/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/dash/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"user == null || (user != null && user.first_setup == false)\">\n  <app-alita *ngIf=\"botOrManual == true\" (switch)=\"switchToManual($event)\"></app-alita>\n  <app-manual *ngIf=\"botOrManual == false\" (switch)=\"switchToAuto($event)\"></app-manual>\n  <app-fab></app-fab>\n</div>\n<div class=\"GlobalContainer\" *ngIf=\"user != null && user.first_setup == true\">\n  <div class=\"wrapper\">\n    <div class=\"heading\">\n      <h1>Your Dashboard</h1>\n      <span></span>\n    </div>\n    <div class=\"content\">\n      <ul>\n        <li matRipple>\n          <div class=\"elements\">\n            <img style=\"width:80px\" src=\"assets/img/dashboard/notifications.png\" alt=\"\">\n            <p>Notifications</p>\n          </div>\n        </li>\n        <li (click)=\"category('second')\" matRipple>\n          <div class=\"elements\">\n            <img src=\"assets/img/scheduling.png\" alt=\"\">\n            <p>Scheduling</p>\n          </div>\n        </li>\n        <li (click)=\"category('third')\" matRipple>\n          <div class=\"elements\">\n            <img src=\"assets/img/chat.png\" alt=\"\">\n            <p>Chat</p>\n          </div>\n        </li>\n        <li (click)=\"category('fourth')\" matRipple>\n          <div class=\"elements\">\n            <img style=\"width:70px\" src=\"assets/img/marketing.png\" alt=\"\">\n            <p>Marketing</p>\n          </div>\n        </li>\n        <li (click)=\"category('fifth')\" matRipple>\n          <div class=\"elements\">\n            <img src=\"assets/img/forms.png\" alt=\"\">\n            <p>Forms</p>\n          </div>\n        </li>\n        <li (click)=\"category('sixth')\" matRipple>\n          <div class=\"elements\">\n            <img src=\"assets/img/settings.png\" alt=\"\">\n            <p>Admin</p>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/dash/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dash/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: inline-block;\n  vertical-align: top;\n  width: calc(100% - 120px);\n  height: 100%; }\n\n.mat-app-background {\n  background: #fff; }\n\n.wrapper {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  padding: 2%;\n  flex-direction: column;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available; }\n\n.wrapper .heading {\n    display: inline-block;\n    width: 100%;\n    height: 20%;\n    text-align: center; }\n\n.wrapper .heading h1 {\n      font-weight: bold;\n      color: #000000;\n      margin-bottom: 0; }\n\n.wrapper .heading span {\n      display: inline-block;\n      width: 80px;\n      height: 5px;\n      background: #18c1f0; }\n\n.wrapper .content {\n    display: inline-block;\n    width: -webkit-fill-available;\n    height: -webkit-fill-available;\n    text-align: center;\n    overflow: visible;\n    margin-top: 35px; }\n\n.wrapper .content ul {\n      margin: 0;\n      padding: 0;\n      list-style: none; }\n\n.wrapper .content ul li {\n        display: inline-block;\n        width: 30%;\n        height: 35vh;\n        background: #ffffff;\n        margin-right: 20px;\n        margin-bottom: 20px;\n        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n        border-radius: 10px;\n        position: relative; }\n\n.wrapper .content ul li .elements {\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          margin: auto;\n          width: 100%;\n          height: 50%; }\n\n.wrapper .content ul li .elements img {\n            width: 60px; }\n\n.wrapper .content ul li .elements p {\n            position: absolute;\n            bottom: 0;\n            margin: 0;\n            left: 0;\n            right: 0;\n            color: #c7c7c7;\n            font-weight: bold;\n            font-size: 28px;\n            font-family: 'ProximaNova-Semibold'; }\n\n.wrapper .content ul li .info {\n          padding: 5%;\n          text-align: center; }\n\n.wrapper .content ul li .info h1 {\n            font-size: 20px;\n            font-weight: bold;\n            color: #18c1f0;\n            margin-bottom: 0; }\n\n.wrapper .content ul li .info p {\n            display: inline-block;\n            width: 80%;\n            font-size: 14px;\n            color: #747474; }\n\n.wrapper .content ul .selected {\n        border: 2px solid #18c1f0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy9hcHAvcGFnZXMvZGFzaC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvSGFtemEvRG9jdW1lbnRzL05vZGUvQU1QX0FQSS9zcmMvdGhlbWUvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLDhCQUE4QixFQUFBOztBQVBsQztJQVVRLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQixFQUFBOztBQWIxQjtNQWdCWSxpQkFBaUI7TUFDakIsY0M1QkM7TUQ2QkQsZ0JBQWdCLEVBQUE7O0FBbEI1QjtNQXNCWSxxQkFBcUI7TUFDckIsV0FBVztNQUNYLFdBQVc7TUFDWCxtQkMvQkssRUFBQTs7QURNakI7SUErQlEscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTs7QUFwQ3hCO01BdUNZLFNBQVM7TUFDVCxVQUFVO01BQ1YsZ0JBQWdCLEVBQUE7O0FBekM1QjtRQTRDZ0IscUJBQXFCO1FBQ3JCLFVBQVU7UUFDVixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsaUhDNUNlO1FENkNmLG1CQUFtQjtRQUNuQixrQkFBa0IsRUFBQTs7QUFwRGxDO1VBdURvQixrQkFBa0I7VUFDbEIsTUFBTTtVQUNOLFNBQVM7VUFDVCxZQUFZO1VBQ1osV0FBVztVQUNYLFdBQVcsRUFBQTs7QUE1RC9CO1lBK0R3QixXQUFXLEVBQUE7O0FBL0RuQztZQW1Fd0Isa0JBQWtCO1lBQ2xCLFNBQVM7WUFDVCxTQUFTO1lBQ1QsT0FBTztZQUNQLFFBQVE7WUFDUixjQzNFUDtZRDRFTyxpQkFBaUI7WUFDakIsZUFBZTtZQUNmLG1DQUNKLEVBQUE7O0FBNUVwQjtVQWdGb0IsV0FBVztVQUNYLGtCQUFrQixFQUFBOztBQWpGdEM7WUFvRndCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0M1RlA7WUQ2Rk8sZ0JBQWdCLEVBQUE7O0FBdkZ4QztZQTJGd0IscUJBQXFCO1lBQ3JCLFVBQVU7WUFDVixlQUFlO1lBQ2YsY0NsR0MsRUFBQTs7QURJekI7UUFzR2dCLHlCQzVHQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi90aGVtZS92YXJpYWJsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm1hdC1hcHAtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLndyYXBwZXIge1xuICAgIGZsZXg6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcblxuICAgIC5oZWFkaW5nIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAkZGFyaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZGFya0JsdWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXZoO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvd0Zvcm11bGE7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICAuZWxlbWVudHMge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcblxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxvY2tPcHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYU5vdmEtU2VtaWJvbGQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGRhcmtCbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaGVhZGluZ05vcm1Db2xvcjtcblxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGRhcmtCbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vQWxsIHRoZSBjb2xvcnMgdXNlZCBpbiB0aGUgYXBwIHdpbGwgYmUgcHJlc2VudCBoZXJlLlxuJHByaW1hcnk6I2ZmZmZmZjtcbiRkYXJrOiMwMDAwMDA7XG4kdGhlbWU6I2ZhZmFmYTtcbiRib3JkZXI6I2Y1ZjRmNDtcbiRzaGFkb3c6I2JlYmViZWM1O1xuJGJsdWVUaGVtZTojMzlkNGZmO1xuJGRhcmtCbHVlOiMxOGMxZjA7XG4kZ3JleVRoZW1lOiNkOGQ4ZDg7XG4kaGVhZGluZ05vcm1Db2xvcjojNzQ3NDc0O1xuJGJsb2NrT3B0OiNjN2M3Yzc7XG4kYmFjazojOWI5YjliO1xuJHNtYWxsU2l6ZToxMnB4O1xuJGhlYWRpbmdTaXplOjE0cHg7XG4kdmFsaWRhdGlvbjojZDgwOTA5YjM7XG4kY2hhdEdyZWVuOiMzM2NkMjk7XG4kY2hhdElucHV0OiNmMWY0ZjQ7XG4kc2hhZG93Rm9ybXVsYTowIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIC4yKSxcbjAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksXG4wIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpOyJdfQ== */"

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
/* harmony import */ var _services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/credentials/credential.service */ "./src/app/services/credentials/credential.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(credentials) {
        var _this = this;
        this.credentials = credentials;
        this.botOrManual = true;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.credentials.tempUser.subscribe(function (value) {
            _this.user = value;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.switchToManual = function (event) {
        this.botOrManual = false;
    };
    HomeComponent.prototype.switchToAuto = function (event) {
        this.botOrManual = true;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/dash/home/home.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/dash/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_2__["CredentialService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/dash/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/dash/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/dash/home/home.component.ts");
/* harmony import */ var src_app_components_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/material/material.module */ "./src/app/components/material/material.module.ts");








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
            imports: [
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
                    }
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_components_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dash-home-home-module.js.map