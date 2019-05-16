(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dash-setup-setup-module"],{

/***/ "./src/app/pages/dash/setup/setup.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/dash/setup/setup.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-side-bar></app-side-bar>\n<div class=\"container\">\n  <app-alita *ngIf=\"botOrManual == true\" (switch)=\"switchToManual($event)\"></app-alita>\n  <app-manual *ngIf=\"botOrManual == false\" (switch)=\"switchToAuto($event)\"></app-manual>\n  <app-fab></app-fab>\n</div>"

/***/ }),

/***/ "./src/app/pages/dash/setup/setup.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/dash/setup/setup.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: inline-block;\n  vertical-align: top;\n  width: calc(100% - 120px);\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy9hcHAvcGFnZXMvZGFzaC9zZXR1cC9zZXR1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2gvc2V0dXAvc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi90aGVtZS92YXJpYWJsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/dash/setup/setup.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dash/setup/setup.component.ts ***!
  \*****************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/credentials/credential.service */ "./src/app/services/credentials/credential.service.ts");



var SetupComponent = /** @class */ (function () {
    function SetupComponent(credentials) {
        var _this = this;
        this.credentials = credentials;
        this.botOrManual = true;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.credentials.sessionStatus.subscribe(function (value) {
            _this.user = value;
        });
    }
    SetupComponent.prototype.ngOnInit = function () {
    };
    SetupComponent.prototype.switchToManual = function (event) {
        this.botOrManual = false;
    };
    SetupComponent.prototype.switchToAuto = function (event) {
        this.botOrManual = true;
    };
    SetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setup',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/app/pages/dash/setup/setup.component.html"),
            styles: [__webpack_require__(/*! ./setup.component.scss */ "./src/app/pages/dash/setup/setup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_2__["CredentialService"]])
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "./src/app/pages/dash/setup/setup.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/dash/setup/setup.module.ts ***!
  \**************************************************/
/*! exports provided: SetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupModule", function() { return SetupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup.component */ "./src/app/pages/dash/setup/setup.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/material/material.module */ "./src/app/components/material/material.module.ts");








var SetupModule = /** @class */ (function () {
    function SetupModule() {
    }
    SetupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_setup_component__WEBPACK_IMPORTED_MODULE_4__["SetupComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _setup_component__WEBPACK_IMPORTED_MODULE_4__["SetupComponent"]
                    }
                ]),
                src_app_components_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ]
        })
    ], SetupModule);
    return SetupModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dash-setup-setup-module.js.map