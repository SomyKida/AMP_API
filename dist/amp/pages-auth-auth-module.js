(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"],{

/***/ "./src/app/pages/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _plan_plan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan/plan.component */ "./src/app/pages/auth/plan/plan.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/material/material.module */ "./src/app/components/material/material.module.ts");








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_plan_plan_component__WEBPACK_IMPORTED_MODULE_3__["PlanComponent"]],
            imports: [
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _plan_plan_component__WEBPACK_IMPORTED_MODULE_3__["PlanComponent"]
                    },
                    {
                        path: ':token',
                        component: _plan_plan_component__WEBPACK_IMPORTED_MODULE_3__["PlanComponent"]
                    }
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_components_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/plan/plan.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/plan/plan.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"GlobalFormWrapper wrapper\">\n    <div class=\"plan-header\">\n      <div class=\"plan-head-row\">\n        <div class=\"plan-head-col\">\n          <ng-container *ngIf=\"selectedPlan == null\">\n            <h1>Order Your Future</h1>\n            <h2>Customize your Package Now</h2>\n          </ng-container>\n          <ng-container *ngIf=\"selectedPlan != null\">\n            <h1 *ngIf=\"selectedPlan != null && hasSignedUp == false\">Complete Billing Information</h1>\n            <h1 *ngIf=\"hasSignedUp == true\">Complete Payment Details</h1>\n            <h2>You have selected the {{selectedPlan.plan.name}} Package</h2>\n          </ng-container>\n        </div>\n        <div class=\"plan-head-col\">\n          <span [ngClass]=\"{'active': selectedPlan == null}\">1</span>\n          <span [ngClass]=\"{'active': selectedPlan != null && hasSignedUp == false}\">2</span>\n          <span [ngClass]=\"{'active': hasSignedUp == true}\">3</span>\n        </div>\n      </div>\n    </div>\n    <app-offers *ngIf=\"selectedPlan == null\" (plan)=\"register($event)\"></app-offers>\n    <div class=\"form-slide\" *ngIf=\"selectedPlan != null\">\n      <div class=\"form-head-row\">\n        <span class=\"back\" (click)=\"previous()\" *ngIf=\"userFromUrl == null\" mat-button>\n          <img src=\"assets/img/back.png\" alt=\"icon\" />\n          <span>\n            Back\n          </span>\n        </span>\n      </div>\n      <div class=\"form-area\">\n        <h3 *ngIf=\"selectedPlan != null && hasSignedUp == false\">Billing Information</h3>\n        <h3 *ngIf=\"hasSignedUp == true\">Payment Information</h3>\n        <form>\n          <ng-container *ngIf=\"selectedPlan != null && hasSignedUp == false\">\n            <div class=\"form-row\">\n              <div class=\"form-one-col\">\n                <label>NAME</label>\n                <input type=\"text\" [(ngModel)]=\"user.name\" autocomplete=\"off\" (ngModelChange)=\"changeInFields('name')\" name=\"name\" [ngClass]=\"{'active': user.name != '', 'error':userFldsVlds.name == true}\" />\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-two-col\">\n                <label>ADDRESS</label>\n                <input type=\"text\" [(ngModel)]=\"user.address\" autocomplete=\"off\" name=\"address\" (ngModelChange)=\"changeInFields('address')\" [ngClass]=\"{'active': user.address != '','error':userFldsVlds.address == true}\" />\n              </div>\n              <div class=\"form-two-col\">\n                <label>ZIPCODE</label>\n                <input type=\"text\" [(ngModel)]=\"user.zipcode\" autocomplete=\"off\" name=\"zip\" (ngModelChange)=\"changeInFields('zipcode')\" [ngClass]=\"{'active': (user.zipcode != '' && user.zipcode != null),'error':userFldsVlds.zipcode == true}\" />\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-two-col\">\n                <label>EMAIL</label>\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" autocomplete=\"off\" (ngModelChange)=\"changeInFields('email')\" [ngClass]=\"{'active': user.email != '','error':userFldsVlds.email == true}\" />\n              </div>\n              <div class=\"form-two-col\">\n                <label>PHONE #</label>\n                <input type=\"number\" [(ngModel)]=\"user.phoneNo\" autocomplete=\"off\" name=\"phone\" (ngModelChange)=\"changeInFields('phoneNo')\" [ngClass]=\"{'active': (user.phoneNo != '' && user.phoneNo != null),'error':userFldsVlds.phoneNo == true}\" />\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-two-col\">\n                <label>PASSWORD</label>\n                <input type=\"password\" name=\"email\" [(ngModel)]=\"user.pass\" autocomplete=\"off\" (ngModelChange)=\"changeInFields('pass')\" [ngClass]=\"{'active': user.pass != '','error':userFldsVlds.pass == true}\" />\n              </div>\n              <div class=\"form-two-col\">\n                <label>CONFIRM PASSWORD</label>\n                <input type=\"password\" [(ngModel)]=\"user.conPass\" name=\"phone\" autocomplete=\"off\" (ngModelChange)=\"changeInFields('conPass')\" [ngClass]=\"{'active': (user.conPass != '' && user.conPass != null),'error':userFldsVlds.conPass == true}\" />\n              </div>\n            </div>\n            <button class=\"blue-btn\" mat-raised-button (click)=\"signUp()\">NEXT</button>\n          </ng-container>\n          <ng-container *ngIf=\"hasSignedUp == true\">\n            <div class=\"form-row\">\n              <div class=\"form-one-col\">\n                <label>NAME ON CARD</label>\n                <input type=\"text\" [(ngModel)]=\"billing.name\" autocomplete=\"off\" (ngModelChange)=\"changeInFields('cardname')\" name=\"name\" [ngClass]=\"{'active': billing.name != '','error':billfldsVld.name == true}\" />\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-one-col\">\n                <label>Card Number</label>\n                <input type=\"text\" maxlength=\"16\" [(ngModel)]=\"billing.number\" autocomplete=\"off\" (ngModelChange)=\"changeInFields('cardnumber')\" name=\"unit\" [ngClass]=\"{'active': (billing.number != '' && billing.number != null),'error':billfldsVld.number == true}\" />\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-two-col\">\n                <label>Expiration Date</label>\n                <input type=\"month\" [(ngModel)]=\"billing.expiry\" autocomplete=\"off\" (ngModelChange)=\"changeInFields('cardexpiry')\" name=\"zip\" [ngClass]=\"{'active': (billing.expiry != '' && billing.expiry != null),'error':billfldsVld.expiry == true}\" />\n              </div>\n              <div class=\"form-two-col\">\n                <label>CVC</label>\n                <input type=\"text\" name=\"cvc\" maxlength=\"4\" autocomplete=\"off\" [(ngModel)]=\"billing.cvc\" (ngModelChange)=\"changeInFields('cardcvc')\" [ngClass]=\"{'active': (billing.cvc != '' && billing.cvc != null),'error':billfldsVld.cvc == true}\" />\n              </div>\n            </div>\n            <button class=\"blue-btn\" mat-raised-button (click)=\"billMe()\">NEXT</button>\n          </ng-container>\n          <mat-tab-group headerPosition=\"below\" [selectedIndex]=\"selectedTab\">\n            <mat-tab [disabled]=\"true\">\n            </mat-tab>\n            <mat-tab [disabled]=\"true\">\n            </mat-tab>\n          </mat-tab-group>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/auth/plan/plan.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/plan/plan.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: inline-block;\n  vertical-align: top;\n  width: calc(100% - 120px);\n  height: 100%; }\n  @media (max-width: 767px) {\n    .container {\n      width: 100%; } }\n  .container .wrapper {\n    width: 1700px;\n    margin: 15px auto; }\n  @media (max-width: 1900px) {\n      .container .wrapper {\n        width: 1375px; } }\n  @media (max-width: 1500px) {\n      .container .wrapper {\n        width: 975px; } }\n  @media (max-width: 1100px) {\n      .container .wrapper {\n        width: 100%; } }\n  .container .wrapper .plan-head-row {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-top: 50px; }\n  @media (max-width: 1100px) {\n        .container .wrapper .plan-head-row {\n          flex-wrap: wrap;\n          margin-top: 15px; } }\n  @media (max-width: 1100px) {\n        .container .wrapper .plan-head-row .plan-head-col {\n          width: 100%;\n          margin: 15px 0; }\n          .container .wrapper .plan-head-row .plan-head-col:nth-child(2) {\n            text-align: right; } }\n  .container .wrapper .plan-head-row .plan-head-col h1 {\n        margin: 0;\n        font-size: 52px;\n        font-family: 'ProximaNova-Bold'; }\n  @media (max-width: 1100px) {\n          .container .wrapper .plan-head-row .plan-head-col h1 {\n            font-size: 30px; } }\n  .container .wrapper .plan-head-row .plan-head-col h2 {\n        margin: 0;\n        font-size: 24px;\n        font-family: 'ProximaNova-Light';\n        color: #747474; }\n  @media (max-width: 1100px) {\n          .container .wrapper .plan-head-row .plan-head-col h2 {\n            font-size: 22px; } }\n  .container .wrapper .plan-head-row .plan-head-col span {\n        background: #d8d8d8;\n        color: #fff;\n        padding: 10px;\n        margin: 0px 20px;\n        border-radius: 50%;\n        width: 20px;\n        height: 20px;\n        display: inline-block;\n        text-align: center; }\n  .container .wrapper .plan-head-row .plan-head-col span.active {\n          background: #18c1f0; }\n  @media (max-width: 767px) {\n          .container .wrapper .plan-head-row .plan-head-col span {\n            margin: 0 5px; } }\n  .container .wrapper .form-slide .form-area form .blue-bars {\n      display: block;\n      text-align: center; }\n  .container .wrapper .form-slide .form-area form .blue-bars a {\n        width: 120px;\n        height: 3px;\n        background: #d8d8d8;\n        display: inline-block;\n        margin: 0 5px; }\n  .container .wrapper .form-slide .form-area form .blue-bars a.active {\n          background: #60b9fb; }\n  .container .wrapper .form-slide .form-area form .mat-tab-group {\n      align-items: center; }\n  .container .wrapper .form-slide .form-area form .mat-tab-label {\n      height: 5px;\n      background: #d8d8d8;\n      margin-right: 5px; }\n  .container .wrapper .form-slide .form-area form .mat-tab-header {\n      border-top: none; }\n  .container .wrapper .form-slide .form-area form .mat-ink-bar {\n      background: #39d4ff;\n      height: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy9hcHAvcGFnZXMvYXV0aC9wbGFuL3BsYW4uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvSGFtemEvRG9jdW1lbnRzL05vZGUvQU1QX0FQSS9zcmMvdGhlbWUvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWSxFQUFBO0VBRVo7SUFOSjtNQVFRLFdBQVcsRUFBQSxFQTZIbEI7RUFySUQ7SUFZUSxhQUFhO0lBQ2IsaUJBQWlCLEVBQUE7RUFFakI7TUFmUjtRQWdCWSxhQUFhLEVBQUEsRUFvSHBCO0VBakhHO01BbkJSO1FBb0JZLFlBQVksRUFBQSxFQWdIbkI7RUE3R0c7TUF2QlI7UUF3QlksV0FBVyxFQUFBLEVBNEdsQjtFQXBJTDtNQTRCWSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLG1CQUFtQjtNQUNuQixnQkFBZ0IsRUFBQTtFQUVoQjtRQWpDWjtVQWtDZ0IsZUFBZTtVQUNmLGdCQUFnQixFQUFBLEVBc0R2QjtFQWxETztRQXZDaEI7VUF3Q29CLFdBQVc7VUFDWCxjQUFjLEVBQUE7VUF6Q2xDO1lBNEN3QixpQkFBaUIsRUFBQSxFQUNwQjtFQTdDckI7UUFpRG9CLFNBQVM7UUFDVCxlQUFlO1FBQ2YsK0JBQStCLEVBQUE7RUFFL0I7VUFyRHBCO1lBc0R3QixlQUFlLEVBQUEsRUFFdEI7RUF4RGpCO1FBMkRvQixTQUFTO1FBQ1QsZUFBZTtRQUNmLGdDQUFnQztRQUNoQyxjQ3ZESyxFQUFBO0VEeURMO1VBaEVwQjtZQWlFd0IsZUFBZSxFQUFBLEVBRXRCO0VBbkVqQjtRQXNFb0IsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixrQkFBa0IsRUFBQTtFQTlFdEM7VUFpRndCLG1CQUE2QixFQUFBO0VBR2pDO1VBcEZwQjtZQXFGd0IsYUFBYSxFQUFBLEVBRXBCO0VBdkZqQjtNQStGd0IsY0FBYztNQUNkLGtCQUFrQixFQUFBO0VBaEcxQztRQW1HNEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkMvRlY7UURnR1UscUJBQXFCO1FBQ3JCLGFBQWEsRUFBQTtFQXZHekM7VUEwR2dDLG1CQUE2QixFQUFBO0VBMUc3RDtNQWdId0IsbUJBQW1CLEVBQUE7RUFoSDNDO01Bb0h3QixXQUFXO01BQ1gsbUJDL0dOO01EZ0hNLGlCQUFpQixFQUFBO0VBdEh6QztNQTBId0IsZ0JBQWdCLEVBQUE7RUExSHhDO01BOEh3QixtQkMxSE47TUQySE0sV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9wbGFuL3BsYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi90aGVtZS92YXJpYWJsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAvLyB3aWR0aDogY2FsYygxMDAlIC0gOTRweCk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC53cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDE3MDBweDtcbiAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE5MDBweCkge1xuICAgICAgICAgICAgd2lkdGg6IDEzNzVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiA5NzVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsYW4taGVhZC1yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wbGFuLWhlYWQtY29sIHtcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcblxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYU5vdmEtQm9sZCc7XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hTm92YS1MaWdodCc7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaGVhZGluZ05vcm1Db2xvcjtcblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q4ZDhkODtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI0LCAxOTMsIDI0MCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1zbGlkZSB7XG4gICAgICAgICAgICAuZm9ybS1hcmVhIHtcbiAgICAgICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgLmJsdWUtYmFycyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmV5VGhlbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig5NiwgMTg1LCAyNTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm1hdC10YWItZ3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtdGFiLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyZXlUaGVtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm1hdC10YWItaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubWF0LWluay1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWVUaGVtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vQWxsIHRoZSBjb2xvcnMgdXNlZCBpbiB0aGUgYXBwIHdpbGwgYmUgcHJlc2VudCBoZXJlLlxuJHByaW1hcnk6I2ZmZmZmZjtcbiRkYXJrOiMwMDAwMDA7XG4kdGhlbWU6I2ZhZmFmYTtcbiRib3JkZXI6I2Y1ZjRmNDtcbiRzaGFkb3c6I2JlYmViZWM1O1xuJGJsdWVUaGVtZTojMzlkNGZmO1xuJGRhcmtCbHVlOiMxOGMxZjA7XG4kZ3JleVRoZW1lOiNkOGQ4ZDg7XG4kaGVhZGluZ05vcm1Db2xvcjojNzQ3NDc0O1xuJGJhY2s6IzliOWI5YjtcbiRzbWFsbFNpemU6MTJweDtcbiRoZWFkaW5nU2l6ZToxNHB4O1xuJHZhbGlkYXRpb246I2Q4MDkwOWIzO1xuJGNoYXRHcmVlbjojMzNjZDI5O1xuJGNoYXRJbnB1dDojZjFmNGY0O1xuJHNoYWRvd0Zvcm11bGE6MCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksXG4wIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLFxuMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTsiXX0= */"

/***/ }),

/***/ "./src/app/pages/auth/plan/plan.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/auth/plan/plan.component.ts ***!
  \***************************************************/
/*! exports provided: PlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanComponent", function() { return PlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auxilaries_aux_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auxilaries/aux.service */ "./src/app/auxilaries/aux.service.ts");





var PlanComponent = /** @class */ (function () {
    function PlanComponent(auth, aux, extractor, router) {
        this.auth = auth;
        this.aux = aux;
        this.extractor = extractor;
        this.router = router;
        this.selectedPlan = null;
        this.hasSignedUp = false;
        this.selectedTab = 0;
        this.userFromUrl = null;
        this.user = {
            name: '',
            address: '',
            zipcode: '',
            email: '',
            phoneNo: '',
            pass: '',
            conPass: ''
        };
        this.userFldsVlds = {
            name: false,
            address: false,
            zipcode: false,
            email: false,
            phoneNo: false,
            pass: false,
            conPass: false
        };
        this.wait = false;
        this.billing = {
            name: '',
            number: '',
            cvc: '',
            expiry: ''
        };
        this.billfldsVld = {
            name: false,
            number: false,
            cvc: false,
            expiry: false,
        };
    }
    PlanComponent.prototype.ngOnInit = function () {
        // this.userFromUrl = this.extractor.snapshot.paramMap.get('token');
        // if (this.userFromUrl) {
        //   this.wait = true;
        //   var params = {
        //     token: this.userFromUrl
        //   }
        //   this.auth.authenticateToken(params).subscribe((success) => {
        //     localStorage.setItem('token', success.data.access_token);
        //     this.wait = false;
        //     this.user = success.data;
        //     this.selectedPlan = {
        //       plan: {
        //         name: success.data.package
        //       },
        //       message: 'User has already signed up, So no need to worry for plan'
        //     }
        //     this.hasSignedUp = true;
        //     this.selectedTab = 1;
        //   }, (error) => {
        //     this.wait = false;
        //     this.aux.errorResponse(error);
        //   })
        // }
    };
    PlanComponent.prototype.register = function (plan) {
        this.selectedPlan = plan;
    };
    PlanComponent.prototype.changeInFields = function (field) {
        if (field == 'name')
            this.userFldsVlds.name = false;
        else if (field == 'address')
            this.userFldsVlds.address = false;
        else if (field == 'email')
            this.userFldsVlds.email = false;
        else if (field == 'phoneNo')
            this.userFldsVlds.phoneNo = false;
        else if (field == 'zipcode')
            this.userFldsVlds.zipcode = false;
        else if (field == 'pass')
            this.userFldsVlds.pass = false;
        else if (field == 'conPass')
            this.userFldsVlds.conPass = false;
        else if (field == 'cardname')
            this.billfldsVld.name = false;
        else if (field == 'cardnumber')
            this.billfldsVld.number = false;
        else if (field == 'cardexpiry')
            this.billfldsVld.expiry = false;
        else if (field == 'cardcvc')
            this.billfldsVld.cvc = false;
    };
    PlanComponent.prototype.previous = function () {
        if (this.hasSignedUp == true) {
            this.selectedTab = 0;
            this.hasSignedUp = false;
        }
        else if (this.selectedPlan != null) {
            this.selectedTab = 0;
            this.selectedPlan = null;
        }
    };
    PlanComponent.prototype.signUp = function () {
        var _this = this;
        var check = false;
        if (this.user.name == '') {
            this.userFldsVlds.name = true;
            check = true;
        }
        if (this.user.address == '') {
            this.userFldsVlds.address = true;
            if (!check)
                check = true;
        }
        if (this.user.email == '') {
            this.userFldsVlds.email = true;
            if (!check)
                check = true;
        }
        if (this.user.phoneNo == '' || this.user.phoneNo == null) {
            this.userFldsVlds.phoneNo = true;
            if (!check)
                check = true;
        }
        if (this.user.zipcode == '' || this.user.zipcode == null) {
            this.userFldsVlds.zipcode = true;
            if (!check)
                check = true;
        }
        if (this.user.pass == '') {
            this.userFldsVlds.pass = true;
            if (!check)
                check = true;
        }
        if (this.user.conPass == '') {
            this.userFldsVlds.conPass = true;
            if (!check)
                check = true;
        }
        if (this.user.pass != this.user.conPass) {
            this.userFldsVlds.pass = true;
            this.userFldsVlds.conPass = true;
            this.aux.showAlert("Passwords don't match.", "ERROR");
            return;
        }
        if (this.user.pass.length < 8 || this.user.conPass.length < 8) {
            this.userFldsVlds.pass = true;
            this.userFldsVlds.conPass = true;
            this.aux.showAlert("Password must be atleast 8 characters long.", "ERROR");
            return;
        }
        if (!this.aux.validate_email(this.user.email)) {
            this.userFldsVlds.email = true;
            this.aux.showAlert("Please enter a valid email address.", "ERROR");
            return;
        }
        if (check) {
            this.aux.showAlert("Please don't leave any field blank.", "ERROR");
            return;
        }
        var params = {
            name: this.user.name,
            address: this.user.address,
            zip: this.user.zipcode,
            email: this.user.email,
            phone: this.user.phoneNo,
            package: this.selectedPlan.plan.name,
            pwd: this.user.pass,
            conf_pwd: this.user.conPass
        };
        if (this.selectedPlan.provider)
            params['service_provider'] = this.selectedPlan.provider._id;
        this.auth.signUp(params).subscribe(function (success) {
            // this.aux.showAlert("Please check your email for completing furthur steps.", "Successfully Registered!!")
            localStorage.setItem('token', success.data.access_token);
            localStorage.setItem('user', JSON.stringify(success.data));
            _this.user = success.data;
            _this.hasSignedUp = true;
            _this.selectedTab = 1;
        }, function (error) {
            _this.aux.errorResponse(error);
        });
    };
    PlanComponent.prototype.billMe = function () {
        var _this = this;
        var check = false;
        if (this.billing.name == '') {
            check = true;
            this.billfldsVld.name = true;
        }
        if (this.billing.number == '' || this.billing.number == null) {
            this.billfldsVld.number = true;
            if (!check)
                check = true;
        }
        if (this.billing.expiry == '' || this.billing.expiry == null) {
            this.billfldsVld.expiry = true;
            if (!check)
                check = true;
        }
        if (this.billing.cvc == '' || this.billing.cvc == null) {
            this.billfldsVld.cvc = true;
            if (!check)
                check = true;
        }
        if (this.billing.number.toString().length < 16) {
            this.billfldsVld.number = true;
            this.aux.showAlert("Incorrect card number", "ERROR");
            return;
        }
        if (this.billing.cvc.toString().length < 3 || this.billing.cvc.toString().length > 4) {
            this.billfldsVld.cvc = true;
            this.aux.showAlert("Incorrect CVC", "ERROR");
            return;
        }
        if (check) {
            this.aux.showAlert("Please don't leave any field blank.", "ERROR");
            return;
        }
        var params = {
            email: this.user.email,
            card_number: this.billing.number,
            card_expiry_year: this.billing.expiry.split('-')[0],
            card_expiry_month: this.billing.expiry.split('-')[1],
            card_cvc: this.billing.cvc
        };
        this.auth.pay(params).subscribe(function (success) {
            _this.aux.showAlert('Payment recieved, Please check your email.', "Successful Transaction!");
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.aux.errorResponse(error);
        });
    };
    PlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plan',
            template: __webpack_require__(/*! ./plan.component.html */ "./src/app/pages/auth/plan/plan.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./plan.component.scss */ "./src/app/pages/auth/plan/plan.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_auxilaries_aux_service__WEBPACK_IMPORTED_MODULE_4__["AuxService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PlanComponent);
    return PlanComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module.js.map