(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dash-chat-chat-module"],{

/***/ "./src/app/pages/dash/chat/chat-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dash/chat/chat-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.component */ "./src/app/pages/dash/chat/chat.component.ts");




var routes = [
    {
        path: '',
        component: _chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]
    }
];
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ChatRoutingModule);
    return ChatRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/dash/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/dash/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"GlobalContainer\">\n  <div class=\"wrapper\">\n    <div class=\"heading\">\n      <h1>Chat</h1>\n      <span></span>\n    </div>\n    <div class=\"content\">\n\n      <ul>\n        <li (click)=\"category('first')\" [ngClass]=\"{'selected': categories.first}\" matRipple>\n          <div *ngIf=\"categories.first == false\" class=\"elements\">\n            <img src=\"assets/img/chat.png\" alt=\"\">\n            <p>2-Way Chat</p>\n          </div>\n          <div class=\"info\" *ngIf=\"categories.first == true\">\n            <h1>2-Way Chat</h1>\n            <p>\n              Easy to use chat feature allows your patients to contact your front office at their convenience.\n            </p>\n            <p> Get a 98% open rate! SMS & Push campaigns are read within the first 3 minutes!</p>\n          </div>\n        </li>\n        <li (click)=\"category('second')\" matRipple>\n          <div class=\"elements\">\n            <img src=\"assets/img/chat.png\" alt=\"\">\n            <p>Appointment Reminders</p>\n          </div>\n        </li>\n        <li (click)=\"category('third')\" matRipple>\n          <div class=\"elements\">\n            <img src=\"assets/img/chat.png\" alt=\"\">\n            <p>Digital Forms</p>\n          </div>\n        </li>\n        <li (click)=\"category('fourth')\" matRipple>\n          <div class=\"elements\">\n            <img src=\"assets/img/chat.png\" alt=\"\">\n            <p>Minimize Cancellations</p>\n          </div>\n        </li>\n        <li (click)=\"category('fifth')\" matRipple>\n          <div class=\"elements\">\n            <img src=\"assets/img/chat.png\" alt=\"\">\n            <p>Follow-Up</p>\n          </div>\n        </li>\n        <li (click)=\"category('sixth')\" matRipple>\n          <div class=\"elements\">\n            <img src=\"assets/img/chat.png\" alt=\"\">\n            <p>Branded Communication</p>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/dash/chat/chat.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dash/chat/chat.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  padding: 2%;\n  flex-direction: column;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available; }\n  .wrapper .heading {\n    display: inline-block;\n    width: 100%;\n    height: 20%;\n    text-align: center; }\n  .wrapper .heading h1 {\n      font-weight: bold;\n      color: #000000;\n      margin-bottom: 0; }\n  .wrapper .heading span {\n      display: inline-block;\n      width: 80px;\n      height: 5px;\n      background: #18c1f0; }\n  .wrapper .content {\n    display: inline-block;\n    width: -webkit-fill-available;\n    height: -webkit-fill-available;\n    text-align: center;\n    overflow: visible;\n    margin-top: 35px; }\n  .wrapper .content ul {\n      margin: 0;\n      padding: 0;\n      list-style: none; }\n  .wrapper .content ul li {\n        display: inline-block;\n        width: 30%;\n        height: 35vh;\n        background: #ffffff;\n        margin-right: 20px;\n        margin-bottom: 20px;\n        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n        border-radius: 10px;\n        position: relative; }\n  .wrapper .content ul li .elements {\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          margin: auto;\n          width: 100%;\n          height: 50%; }\n  .wrapper .content ul li .elements img {\n            width: 50px; }\n  .wrapper .content ul li .elements p {\n            color: #c7c7c7;\n            font-weight: bold;\n            font-size: 16px; }\n  .wrapper .content ul li .info {\n          padding: 5%;\n          text-align: center; }\n  .wrapper .content ul li .info h1 {\n            font-size: 20px;\n            font-weight: bold;\n            color: #18c1f0;\n            margin-bottom: 0; }\n  .wrapper .content ul li .info p {\n            display: inline-block;\n            width: 80%;\n            font-size: 14px;\n            color: #747474; }\n  .wrapper .content ul .selected {\n        border: 2px solid #18c1f0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy9hcHAvcGFnZXMvZGFzaC9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvSGFtemEvRG9jdW1lbnRzL05vZGUvQU1QX0FQSS9zcmMvdGhlbWUvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksT0FBTztFQUNQLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsOEJBQThCLEVBQUE7RUFQbEM7SUFVUSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtFQWIxQjtNQWdCWSxpQkFBaUI7TUFDakIsY0NqQkM7TURrQkQsZ0JBQWdCLEVBQUE7RUFsQjVCO01Bc0JZLHFCQUFxQjtNQUNyQixXQUFXO01BQ1gsV0FBVztNQUNYLG1CQ3BCSyxFQUFBO0VETGpCO0lBK0JRLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUFwQ3hCO01BdUNZLFNBQVM7TUFDVCxVQUFVO01BQ1YsZ0JBQWdCLEVBQUE7RUF6QzVCO1FBNENnQixxQkFBcUI7UUFDckIsVUFBVTtRQUNWLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixpSENqQ2U7UURrQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQixFQUFBO0VBcERsQztVQXVEb0Isa0JBQWtCO1VBQ2xCLE1BQU07VUFDTixTQUFTO1VBQ1QsWUFBWTtVQUNaLFdBQVc7VUFDWCxXQUFXLEVBQUE7RUE1RC9CO1lBK0R3QixXQUFXLEVBQUE7RUEvRG5DO1lBbUV3QixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLGVBQWUsRUFBQTtFQXJFdkM7VUEwRW9CLFdBQVc7VUFDWCxrQkFBa0IsRUFBQTtFQTNFdEM7WUE4RXdCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0MzRVA7WUQ0RU8sZ0JBQWdCLEVBQUE7RUFqRnhDO1lBcUZ3QixxQkFBcUI7WUFDckIsVUFBVTtZQUNWLGVBQWU7WUFDZixjQ2pGQyxFQUFBO0VEUHpCO1FBK0ZnQix5QkMxRkMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2gvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzJztcblxuLndyYXBwZXIge1xuICAgIGZsZXg6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcblxuICAgIC5oZWFkaW5nIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAkZGFyaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZGFya0JsdWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXZoO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHNoYWRvd0Zvcm11bGE7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICAuZWxlbWVudHMge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcblxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzdjN2M3O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGRhcmtCbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkaGVhZGluZ05vcm1Db2xvcjtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRkYXJrQmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvL0FsbCB0aGUgY29sb3JzIHVzZWQgaW4gdGhlIGFwcCB3aWxsIGJlIHByZXNlbnQgaGVyZS5cbiRwcmltYXJ5OiNmZmZmZmY7XG4kZGFyazojMDAwMDAwO1xuJHRoZW1lOiNmYWZhZmE7XG4kYm9yZGVyOiNmNWY0ZjQ7XG4kc2hhZG93OiNiZWJlYmVjNTtcbiRibHVlVGhlbWU6IzM5ZDRmZjtcbiRkYXJrQmx1ZTojMThjMWYwO1xuJGdyZXlUaGVtZTojZDhkOGQ4O1xuJGhlYWRpbmdOb3JtQ29sb3I6Izc0NzQ3NDtcbiRibG9ja09wdDojYzdjN2M3O1xuJGJhY2s6IzliOWI5YjtcbiRzbWFsbFNpemU6MTJweDtcbiRoZWFkaW5nU2l6ZToxNHB4O1xuJHZhbGlkYXRpb246I2Q4MDkwOWIzO1xuJGNoYXRHcmVlbjojMzNjZDI5O1xuJGNoYXRJbnB1dDojZjFmNGY0O1xuJHNoYWRvd0Zvcm11bGE6MCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksXG4wIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLFxuMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTsiXX0= */"

/***/ }),

/***/ "./src/app/pages/dash/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dash/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.categories = {
            first: false,
            second: false,
            third: false,
            fourth: false,
            fifth: false,
            sixth: false
        };
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.category = function (which) {
        if (which == 'first')
            this.categories.first = !this.categories.first;
        else if (which == 'second')
            this.categories.second = !this.categories.second;
        else if (which == 'thrid')
            this.categories.third = !this.categories.third;
        else if (which == 'fourth')
            this.categories.fourth = !this.categories.fourth;
        else if (which == 'fifth')
            this.categories.fifth = !this.categories.fifth;
        else if (which == 'sixth')
            this.categories.sixth = !this.categories.sixth;
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/pages/dash/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/pages/dash/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/pages/dash/chat/chat.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/dash/chat/chat.module.ts ***!
  \************************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/pages/dash/chat/chat-routing.module.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat.component */ "./src/app/pages/dash/chat/chat.component.ts");
/* harmony import */ var src_app_components_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/material/material.module */ "./src/app/components/material/material.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _chat_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatRoutingModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                src_app_components_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dash-chat-chat-module.js.map