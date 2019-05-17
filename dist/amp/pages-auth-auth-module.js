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
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");









var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_plan_plan_component__WEBPACK_IMPORTED_MODULE_3__["PlanComponent"]],
            imports: [
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"].forChild(),
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

module.exports = "<app-side-bar [display]=\"menuForMobs\" (close)=\"openMenuForMobile()\"></app-side-bar>\n<div class=\"container\">\n  <div class=\"GlobalFormWrapper wrapper\">\n    <div class=\"plan-header\">\n      <div class=\"plan-head-row\">\n        <div class=\"headFab\" (click)=\"openMenuForMobile()\" matRipple>\n          <img src=\"assets/img/phoneFab.png\" alt=\"\">\n        </div>\n        <div class=\"plan-head-col\">\n          <ng-container *ngIf=\"selectedPlan == null\">\n            <h1>Order Your Future</h1>\n            <h2>Customize your Package Now</h2>\n          </ng-container>\n          <ng-container *ngIf=\"selectedPlan != null\">\n            <h1 *ngIf=\"steps.loginInfo == false\">Complete SignUp Information</h1>\n            <h1 *ngIf=\"steps.loginInfo == true && steps.billingInfo == false\">Complete Billing Information</h1>\n            <h1 *ngIf=\"steps.billingInfo == true\">Complete Payment Details</h1>\n            <h2 class=\"package\">You have selected the ({{selectedPlan.plan.name}}) Package</h2>\n          </ng-container>\n        </div>\n        <div class=\"plan-head-col statusBtns\">\n          <span class=\"rounds\" [ngClass]=\"{'active': selectedPlan == null}\">\n            <span class=\"num\">1</span>\n          </span>\n          <span class=\"rounds\" [ngClass]=\"{'active': selectedPlan != null && steps.loginInfo == false}\">\n            <span class=\"num\">2</span>\n          </span>\n          <span class=\"rounds\" [ngClass]=\"{'active': (steps.loginInfo == true || steps.billingInfo == true)}\">\n            <span class=\"num\">3</span>\n          </span>\n        </div>\n      </div>\n    </div>\n    <app-offers *ngIf=\"selectedPlan == null\" (plan)=\"register($event)\"></app-offers>\n    <app-logged [which]=\"'create'\" (backPlan)=\"previous()\" (created)=\"loginCreated($event)\" *ngIf=\"selectedPlan != null && steps.loginInfo == false\"></app-logged>\n    <div class=\"form-slide\" *ngIf=\"steps.loginInfo == true\">\n      <div class=\"form-head-row\">\n        <span class=\"back\" (click)=\"previous()\" *ngIf=\"credentials.user == null\" mat-button>\n          <img src=\"assets/img/back.png\" alt=\"icon\" />\n          <span>\n            Back\n          </span>\n        </span>\n      </div>\n      <div class=\"form-area\">\n        <h3 *ngIf=\"steps.billingInfo == false\">Billing Information</h3>\n        <h3 *ngIf=\"steps.billingInfo == true\">Payment Information</h3>\n        <form>\n          <ng-container *ngIf=\"steps.billingInfo == false\">\n            <div class=\"form-row\">\n              <div class=\"form-two-col\">\n                <label>FIRST NAME</label>\n                <input type=\"text\" [(ngModel)]=\"user.fname\" autocomplete=\"off\" (ngModelChange)=\"changeInFields('fname')\" name=\"fname\" [ngClass]=\"{'active': user.fname != '', 'error':userFldsVlds.fname == true}\" />\n              </div>\n              <div class=\"form-two-col\">\n                <label>LAST NAME</label>\n                <input type=\"text\" [(ngModel)]=\"user.lname\" autocomplete=\"off\" (ngModelChange)=\"changeInFields('lname')\" name=\"lname\" [ngClass]=\"{'active': user.lname != '', 'error':userFldsVlds.lname == true}\" />\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-one-col\">\n                <label>ADDRESS</label>\n                <input type=\"text\" [(ngModel)]=\"user.address\" autocomplete=\"off\" name=\"address\" (ngModelChange)=\"changeInFields('address')\" [ngClass]=\"{'active': user.address != '','error':userFldsVlds.address == true}\" />\n              </div>\n\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-two-col\">\n                <label>ZIP CODE</label>\n                <input type=\"text\" [(ngModel)]=\"user.zipcode\" autocomplete=\"off\" name=\"zip\" (ngModelChange)=\"changeInFields('zipcode')\" [ngClass]=\"{'active': (user.zipcode != '' && user.zipcode != null),'error':userFldsVlds.zipcode == true}\" />\n              </div>\n              <div class=\"form-two-col\">\n                <label>CITY</label>\n                <input type=\"text\" [(ngModel)]=\"user.city\" autocomplete=\"off\" name=\"city\" (ngModelChange)=\"changeInFields('city')\" [ngClass]=\"{'active': user.city != '','error':userFldsVlds.city == true}\" />\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-two-col\">\n                <label>STATE</label>\n                <input type=\"text\" [(ngModel)]=\"user.state\" autocomplete=\"off\" name=\"state\" (ngModelChange)=\"changeInFields('state')\" [ngClass]=\"{'active': (user.state != '' && user.state != null),'error':userFldsVlds.state == true}\" />\n              </div>\n              <div class=\"form-two-col\">\n                <label>PHONE #</label>\n                <input type=\"tel\" mask=\"(000) 000-0000\" [(ngModel)]=\"user.phoneNo\" autocomplete=\"off\" name=\"phone\" (ngModelChange)=\"changeInFields('phoneNo')\" [ngClass]=\"{'active': (user.phoneNo != '' && user.phoneNo != null),'error':userFldsVlds.phoneNo == true}\" />\n              </div>\n            </div>\n            <button class=\"blue-btn\" mat-raised-button (click)=\"signUp()\">NEXT</button>\n          </ng-container>\n          <ng-container *ngIf=\"steps.billingInfo == true\">\n            <div class=\"form-row\">\n              <div class=\"form-one-col\">\n                <label>NAME ON CARD</label>\n                <input type=\"text\" [(ngModel)]=\"billing.name\" autocomplete=\"off\" (ngModelChange)=\"changeInFields('cardname')\" name=\"name\" [ngClass]=\"{'active': billing.name != '','error':billfldsVld.name == true}\" />\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-one-col\">\n                <label>Card Number</label>\n                <input type=\"text\" mask=\"0000 0000 0000 0000\" [(ngModel)]=\"billing.number\" autocomplete=\"off\" (ngModelChange)=\"changeInFields('cardnumber')\" name=\"unit\" [ngClass]=\"{'active': (billing.number != '' && billing.number != null),'error':billfldsVld.number == true}\" />\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-two-col\">\n                <label>Expiration Date</label>\n                <!-- <input mask=\"00-0000\" placeholder=\"09-2021\" [(ngModel)]=\"billing.expiry\" autocomplete=\"off\" (ngModelChange)=\"changeInFields('cardexpiry')\" name=\"zip\" [ngClass]=\"{'active': (billing.expiry != '' && billing.expiry != null),'error':billfldsVld.expiry == true}\" /> -->\n                <input [(ngModel)]=\"billing.expiry\" (click)=\"picker.open()\" [matDatepicker]=\"picker\" (ngModelChange)=\"changeInFields('cardexpiry')\" name=\"zip\" [ngClass]=\"{'active': (billing.expiry != '' && billing.expiry != null),'error':billfldsVld.expiry == true}\">\n                <mat-datepicker #picker startView=\"multi-year\" (monthSelected)=\"monthSelection($event, picker)\"></mat-datepicker>\n              </div>\n              <div class=\"form-two-col\">\n                <label>CVC</label>\n                <input type=\"text\" name=\"cvc\" maxlength=\"4\" autocomplete=\"off\" [(ngModel)]=\"billing.cvc\" (ngModelChange)=\"changeInFields('cardcvc')\" [ngClass]=\"{'active': (billing.cvc != '' && billing.cvc != null),'error':billfldsVld.cvc == true}\" />\n              </div>\n            </div>\n            <div class=\"cus-check-row\">\n              <div class=\"item-check\">\n                <div class=\"box\">\n                  <input type=\"checkbox\" [(ngModel)]=\"billing.todays\" id=\"cussed\" name=\"today\" />\n                  <label for=\"cussed\"><span></span></label>\n                </div>\n                <div class=\"statement\" (click)=\"agree('today')\">\n                  <!-- By clicking this you agree to our terms and conditions. Moreover you also agree to pay $399 / $199 per month according to the plan you choose. -->\n                  <ng-container *ngIf=\"selectedPlan.discount == null\">\n                    <ng-container *ngIf=\"selectedPlan.plan.name == 'PRO'\">Click here to approve todays charge of $399</ng-container>\n                    <ng-container *ngIf=\"selectedPlan.plan.name == 'LITE'\">Click here to approve todays charge of $199</ng-container>\n                  </ng-container>\n                  <ng-container *ngIf=\"selectedPlan.discount == true\">\n                    Click here to approve todays charge of $99 (After discount)\n                  </ng-container>\n\n                </div>\n              </div>\n              <div class=\"item-check\">\n                <div class=\"box\">\n                  <input type=\"checkbox\" [(ngModel)]=\"billing.monthly\" name=\"monthly\" id=\"cus-check\" />\n                  <label for=\"cus-check\"><span></span></label>\n                </div>\n                <div class=\"statement\" (click)=\"agree('monthly')\">\n                  <ng-container *ngIf=\"selectedPlan.plan.name == 'PRO'\">Click Here to approve monthly charge of $399</ng-container>\n                  <ng-container *ngIf=\"selectedPlan.plan.name == 'LITE'\">Click Here to approve monthly charge of $199</ng-container>\n                </div>\n              </div>\n            </div>\n            <button class=\"blue-btn\" mat-raised-button (click)=\"billMe()\">NEXT</button>\n          </ng-container>\n          <mat-tab-group headerPosition=\"below\" [selectedIndex]=\"selectedTab\">\n            <mat-tab [disabled]=\"true\">\n            </mat-tab>\n            <mat-tab [disabled]=\"true\">\n            </mat-tab>\n          </mat-tab-group>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/auth/plan/plan.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/plan/plan.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: inline-block;\n  vertical-align: top;\n  width: calc(100% - 120px);\n  height: 100%; }\n  @media (max-width: 768px) {\n    .container {\n      width: 100%; } }\n  .container .wrapper {\n    width: 1700px;\n    margin: 15px auto; }\n  @media (max-width: 1900px) {\n      .container .wrapper {\n        width: 1375px; } }\n  @media (max-width: 1500px) {\n      .container .wrapper {\n        width: 975px; } }\n  @media (max-width: 1100px) {\n      .container .wrapper {\n        width: 90%; } }\n  .container .wrapper .plan-head-row {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-top: 50px; }\n  @media (max-width: 1100px) {\n        .container .wrapper .plan-head-row {\n          flex-wrap: wrap;\n          margin-top: 15px; } }\n  .container .wrapper .plan-head-row .headFab {\n        display: none;\n        width: 20%; }\n  @media (max-width: 800px) {\n          .container .wrapper .plan-head-row .headFab {\n            display: inline-block; } }\n  .container .wrapper .plan-head-row .headFab img {\n          width: 100%; }\n  @media (max-width: 1100px) {\n        .container .wrapper .plan-head-row .plan-head-col {\n          width: 100%;\n          margin: 15px 0; } }\n  @media (max-width: 750px) {\n        .container .wrapper .plan-head-row .plan-head-col {\n          display: inline-block;\n          width: 79%;\n          text-align: left !important; }\n          .container .wrapper .plan-head-row .plan-head-col h1 {\n            font-size: 25px !important; }\n          .container .wrapper .plan-head-row .plan-head-col h2 {\n            font-size: 16px !important; } }\n  .container .wrapper .plan-head-row .plan-head-col h1 {\n        margin: 0;\n        font-size: 52px;\n        font-family: 'ProximaNova-Bold'; }\n  @media (max-width: 1100px) {\n          .container .wrapper .plan-head-row .plan-head-col h1 {\n            font-size: 30px; } }\n  .container .wrapper .plan-head-row .plan-head-col h2 {\n        margin: 0;\n        font-size: 24px;\n        font-family: 'ProximaNova-Light';\n        color: #747474; }\n  @media (max-width: 1100px) {\n          .container .wrapper .plan-head-row .plan-head-col h2 {\n            font-size: 22px; } }\n  .container .wrapper .plan-head-row .plan-head-col h2.package {\n        color: #18c1f0; }\n  .container .wrapper .plan-head-row .plan-head-col .rounds {\n        background: #d8d8d8;\n        color: #fff;\n        padding: 10px;\n        margin: 0px 20px;\n        border-radius: 50%;\n        width: 20px;\n        height: 20px;\n        display: inline-block;\n        text-align: center; }\n  .container .wrapper .plan-head-row .plan-head-col .rounds .num {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          margin: 1px; }\n  .container .wrapper .plan-head-row .plan-head-col .rounds.active {\n          background: #18c1f0; }\n  @media (max-width: 767px) {\n          .container .wrapper .plan-head-row .plan-head-col .rounds {\n            margin: 0 5px; } }\n  @media (max-width: 750px) {\n        .container .wrapper .plan-head-row .statusBtns {\n          display: none; } }\n  .container .wrapper .form-slide .form-area form .blue-bars {\n      display: block;\n      text-align: center; }\n  .container .wrapper .form-slide .form-area form .blue-bars a {\n        width: 120px;\n        height: 3px;\n        background: #d8d8d8;\n        display: inline-block;\n        margin: 0 5px; }\n  .container .wrapper .form-slide .form-area form .blue-bars a.active {\n          background: #60b9fb; }\n  .container .wrapper .form-slide .form-area form .mat-tab-group {\n      align-items: center; }\n  .container .wrapper .form-slide .form-area form .mat-tab-label {\n      height: 5px;\n      background: #d8d8d8;\n      margin-right: 5px; }\n  .container .wrapper .form-slide .form-area form .mat-tab-header {\n      border-top: none; }\n  .container .wrapper .form-slide .form-area form .mat-ink-bar {\n      background: #39d4ff;\n      height: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy9hcHAvcGFnZXMvYXV0aC9wbGFuL3BsYW4uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvSGFtemEvRG9jdW1lbnRzL05vZGUvQU1QX0FQSS9zcmMvdGhlbWUvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWSxFQUFBO0VBRVo7SUFOSjtNQU9RLFdBQVcsRUFBQSxFQXNLbEI7RUE3S0Q7SUFXUSxhQUFhO0lBQ2IsaUJBQWlCLEVBQUE7RUFFakI7TUFkUjtRQWVZLGFBQWEsRUFBQSxFQTZKcEI7RUExSkc7TUFsQlI7UUFtQlksWUFBWSxFQUFBLEVBeUpuQjtFQXRKRztNQXRCUjtRQXVCWSxVQUFVLEVBQUEsRUFxSmpCO0VBNUtMO01BMkJZLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO01BQ25CLGdCQUFnQixFQUFBO0VBRWhCO1FBaENaO1VBaUNnQixlQUFlO1VBQ2YsZ0JBQWdCLEVBQUEsRUErRnZCO0VBaklUO1FBc0NnQixhQUFhO1FBQ2IsVUFBVSxFQUFBO0VBRVY7VUF6Q2hCO1lBMENvQixxQkFBcUIsRUFBQSxFQU01QjtFQWhEYjtVQThDb0IsV0FBVyxFQUFBO0VBS2Y7UUFuRGhCO1VBb0RvQixXQUFXO1VBQ1gsY0FBYyxFQUFBLEVBcUVyQjtFQWpFRztRQXpEaEI7VUEwRG9CLHFCQUFxQjtVQUNyQixVQUFVO1VBQ1YsMkJBQTJCLEVBQUE7VUE1RC9DO1lBK0R3QiwwQkFBMEIsRUFBQTtVQS9EbEQ7WUFtRXdCLDBCQUEwQixFQUFBLEVBQzdCO0VBcEVyQjtRQXdFb0IsU0FBUztRQUNULGVBQWU7UUFDZiwrQkFBK0IsRUFBQTtFQUUvQjtVQTVFcEI7WUE2RXdCLGVBQWUsRUFBQSxFQUV0QjtFQS9FakI7UUFrRm9CLFNBQVM7UUFDVCxlQUFlO1FBQ2YsZ0NBQWdDO1FBQ2hDLGNDOUVLLEVBQUE7RURnRkw7VUF2RnBCO1lBd0Z3QixlQUFlLEVBQUEsRUFFdEI7RUExRmpCO1FBNkZvQixjQ3hGSCxFQUFBO0VETGpCO1FBaUdvQixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGtCQUFrQixFQUFBO0VBekd0QztVQTRHd0IsYUFBYTtVQUNiLHVCQUF1QjtVQUN2QixtQkFBbUI7VUFDbkIsV0FBVyxFQUFBO0VBL0duQztVQW1Id0IsbUJBQTZCLEVBQUE7RUFHakM7VUF0SHBCO1lBdUh3QixhQUFhLEVBQUEsRUFFcEI7RUFJRDtRQTdIaEI7VUE4SG9CLGFBQWEsRUFBQSxFQUVwQjtFQWhJYjtNQXVJd0IsY0FBYztNQUNkLGtCQUFrQixFQUFBO0VBeEkxQztRQTJJNEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkN2SVY7UUR3SVUscUJBQXFCO1FBQ3JCLGFBQWEsRUFBQTtFQS9JekM7VUFrSmdDLG1CQUE2QixFQUFBO0VBbEo3RDtNQXdKd0IsbUJBQW1CLEVBQUE7RUF4SjNDO01BNEp3QixXQUFXO01BQ1gsbUJDdkpOO01Ed0pNLGlCQUFpQixFQUFBO0VBOUp6QztNQWtLd0IsZ0JBQWdCLEVBQUE7RUFsS3hDO01Bc0t3QixtQkNsS047TURtS00sV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9wbGFuL3BsYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi90aGVtZS92YXJpYWJsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAud3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxNzAwcHg7XG4gICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxOTAwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMzc1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gICAgICAgICAgICB3aWR0aDogOTc1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsYW4taGVhZC1yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkRmFiIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBsYW4taGVhZC1jb2wge1xuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NzUwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzklO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJveGltYU5vdmEtQm9sZCc7XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hTm92YS1MaWdodCc7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaGVhZGluZ05vcm1Db2xvcjtcblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoMi5wYWNrYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrQmx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucm91bmRzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q4ZDhkODtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgLm51bSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQsIDE5MywgMjQwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YXR1c0J0bnMge1xuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLXNsaWRlIHtcbiAgICAgICAgICAgIC5mb3JtLWFyZWEge1xuICAgICAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgICAgICAuYmx1ZS1iYXJzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyZXlUaGVtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDk2LCAxODUsIDI1MSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubWF0LXRhYi1ncm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm1hdC10YWItbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JleVRoZW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtaW5rLWJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZVRoZW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy9BbGwgdGhlIGNvbG9ycyB1c2VkIGluIHRoZSBhcHAgd2lsbCBiZSBwcmVzZW50IGhlcmUuXG4kcHJpbWFyeTojZmZmZmZmO1xuJGRhcms6IzAwMDAwMDtcbiR0aGVtZTojZmFmYWZhO1xuJGJvcmRlcjojZjVmNGY0O1xuJHNoYWRvdzojYmViZWJlYzU7XG4kYmx1ZVRoZW1lOiMzOWQ0ZmY7XG4kZGFya0JsdWU6IzE4YzFmMDtcbiRncmV5VGhlbWU6I2Q4ZDhkODtcbiRoZWFkaW5nTm9ybUNvbG9yOiM3NDc0NzQ7XG4kYmxvY2tPcHQ6I2M3YzdjNztcbiRiYWNrOiM5YjliOWI7XG4kc21hbGxTaXplOjEycHg7XG4kaGVhZGluZ1NpemU6MTRweDtcbiR2YWxpZGF0aW9uOiNkODA5MDliMztcbiRjaGF0R3JlZW46IzMzY2QyOTtcbiRjaGF0SW5wdXQ6I2YxZjRmNDtcbiRzaGFkb3dGb3JtdWxhOjAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLFxuMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSxcbjAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7Il19 */"

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
/* harmony import */ var _services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/credentials/credential.service */ "./src/app/services/credentials/credential.service.ts");






var PlanComponent = /** @class */ (function () {
    function PlanComponent(auth, aux, extractor, router, credentials) {
        this.auth = auth;
        this.aux = aux;
        this.extractor = extractor;
        this.router = router;
        this.credentials = credentials;
        this.selectedPlan = null;
        this.selectedTab = 0;
        this.steps = {
            loginInfo: false,
            billingInfo: false,
        };
        this.userFromUrl = null;
        this.user = {
            fname: '',
            lname: '',
            address: '',
            zipcode: '',
            email: '',
            phoneNo: '',
            pass: '',
            conPass: '',
            city: '',
            state: '',
            authType: 'DESKTOP',
            fb_id: '',
            g_id: ''
        };
        this.userFldsVlds = {
            fname: false,
            lname: false,
            address: false,
            zipcode: false,
            email: false,
            phoneNo: false,
            pass: false,
            conPass: false,
            city: false,
            state: false
        };
        this.wait = false;
        this.billing = {
            name: '',
            number: '',
            cvc: '',
            expiry: '',
            monthly: false,
            todays: false
        };
        this.billfldsVld = {
            name: false,
            number: false,
            cvc: false,
            expiry: false,
        };
        this.menuForMobs = false;
    }
    PlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.credentials.user != null) {
            this.user.email = this.credentials.user.email;
            this.selectedPlan = {
                plan: {
                    name: this.credentials.user.package
                }
            };
            this.steps.loginInfo = true;
            this.steps.billingInfo = true;
            this.selectedTab = 1;
            this.credentials.sessionStatus.subscribe(function (value) {
                _this.user = value;
                location.reload();
            });
        }
    };
    PlanComponent.prototype.openMenuForMobile = function () {
        this.menuForMobs = !this.menuForMobs;
    };
    PlanComponent.prototype.register = function (plan) {
        this.selectedPlan = plan;
    };
    PlanComponent.prototype.loginCreated = function (output) {
        if (output.authType == 'DESKTOP') {
            this.user.email = output.user.email;
            this.user.pass = output.user.password;
            this.user.conPass = output.user.conPass;
            this.user.authType = output.authType;
        }
        else if (output.authType == 'FB') {
            this.user.email = output.user.email;
            this.user.fname = output.user.firstName;
            this.user.lname = output.user.lastName;
            this.user.authType = output.authType;
            this.user.fb_id = output.user.id;
        }
        else if (output.authType == 'GOOGLE') {
            this.user.email = output.user.email;
            this.user.fname = output.user.firstName;
            this.user.lname = output.user.lastName;
            this.user.authType = output.authType;
            this.user.g_id = output.user.id;
        }
        this.steps.loginInfo = true;
    };
    PlanComponent.prototype.agree = function (whom) {
        if (whom == 'today')
            this.billing.todays = !this.billing.todays;
        else if (whom == 'monthly')
            this.billing.monthly = !this.billing.monthly;
    };
    PlanComponent.prototype.changeInFields = function (field) {
        if (field == 'fname')
            this.userFldsVlds.fname = false;
        else if (field == 'lname')
            this.userFldsVlds.lname = false;
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
        else if (field == 'city')
            this.userFldsVlds.city = false;
        else if (field == 'state')
            this.userFldsVlds.state = false;
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
        if (this.selectedPlan != null)
            if (this.steps.loginInfo == false) {
                this.selectedPlan = null;
            }
            else if (this.steps.loginInfo == true && this.steps.billingInfo == false) {
                this.steps.loginInfo = false;
            }
            else if (this.steps.billingInfo == true) {
                this.selectedTab = 0;
                this.steps.billingInfo = false;
            }
        // if (this.hasSignedUp == true) {
        //   this.selectedTab = 0;
        //   this.hasSignedUp = false;
        // } else if (this.selectedPlan != null) {
        //   this.selectedTab = 0;
        //   this.selectedPlan = null;
        // }
    };
    PlanComponent.prototype.signUp = function () {
        var _this = this;
        var check = false;
        if (this.user.fname == '') {
            this.userFldsVlds.fname = true;
            check = true;
        }
        if (this.user.lname == '') {
            this.userFldsVlds.lname = true;
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
        if (this.user.city == '') {
            this.userFldsVlds.city = true;
            if (!check)
                check = true;
        }
        if (this.user.state == '') {
            this.userFldsVlds.state = true;
            if (!check)
                check = true;
        }
        // if (this.user.pass == '' && this.user.authType == 'DESKTOP') {
        //   this.userFldsVlds.pass = true;
        //   if (!check)
        //     check = true;
        // }
        // if (this.user.conPass == '' && this.user.authType == 'DESKTOP') {
        //   this.userFldsVlds.conPass = true;
        //   if (!check)
        //     check = true;
        // }
        // if (this.user.pass != this.user.conPass && this.user.authType == 'DESKTOP') {
        //   this.userFldsVlds.pass = true;
        //   this.userFldsVlds.conPass = true;
        //   this.aux.showAlert("Passwords don't match.", "ERROR");
        //   return;
        // }
        // if ((this.user.pass.length < 8 || this.user.conPass.length < 8) && this.user.authType == 'DESKTOP') {
        //   this.userFldsVlds.pass = true;
        //   this.userFldsVlds.conPass = true;
        //   this.aux.showAlert("Password must be atleast 8 characters long.", "ERROR");
        //   return;
        // }
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
            first_name: this.user.fname,
            last_name: this.user.lname,
            address: this.user.address,
            zip: this.user.zipcode,
            city: this.user.city,
            state: this.user.state,
            email: this.user.email,
            phone: this.user.phoneNo,
            package: this.selectedPlan.plan.name,
            pwd: this.user.pass,
            conf_pwd: this.user.conPass,
            is_discount: this.selectedPlan.discount == true ? true : false,
            auth_type: this.user.authType,
            g_id: this.user.g_id,
            fb_id: this.user.fb_id,
            software: this.selectedPlan.provider != null ? this.selectedPlan.provider.name : ''
        };
        if (this.selectedPlan.provider)
            params['service_provider'] = this.selectedPlan.provider._id;
        this.auth.signUp(params).subscribe(function (success) {
            _this.credentials.setUser(success.data);
            _this.user = success.data;
            _this.steps.billingInfo = true;
            _this.selectedTab = 1;
        }, function (error) {
            _this.aux.errorResponse(error);
        });
    };
    PlanComponent.prototype.monthSelection = function (month, datepicker) {
        this.billing.expiry = month;
        datepicker.close();
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
        if (this.billing.todays == false || this.billing.monthly == false) {
            this.aux.showAlert("Please accept both terms in order to submit.", "ERROR");
            return;
        }
        if (check) {
            this.aux.showAlert("Please don't leave any field blank.", "ERROR");
            return;
        }
        var params = {
            email: this.user.email,
            card_number: this.billing.number,
            card_expiry_year: this.billing.expiry.year(),
            card_expiry_month: this.aux.getMonth(this.billing.expiry.month()),
            card_cvc: this.billing.cvc
        };
        this.auth.pay(params).subscribe(function (success) {
            _this.router.navigate(['/setup']);
            var user = _this.credentials.user;
            user.init_payment = true;
            _this.credentials.setUser(user);
            _this.aux.showAlert('Payment recieved, Please check your email.', "Successful Transaction!");
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
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_5__["CredentialService"]])
    ], PlanComponent);
    return PlanComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module.js.map