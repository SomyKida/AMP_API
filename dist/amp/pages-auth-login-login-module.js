(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"],{

/***/ "./src/app/pages/auth/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-side-bar></app-side-bar>\n<div class=\"container\">\n  <div class=\"GlobalFormWrapper\">\n    <div class=\"form-slide\">\n      <div class=\"form-head-row\">\n        <span class=\"back\" (click)=\"goBack()\">\n          <img src=\"assets/img/back.png\" alt=\"icon\" />\n          <span>\n            Back\n          </span>\n        </span>\n      </div>\n      <div class=\"form-area\">\n        <div class=\"logoWithHeading\">\n          <span class=\"logo\"></span>\n          <h3>Login to your dashboard!</h3>\n        </div>\n        <form>\n          <div class=\"form-row\">\n            <div class=\"form-two-col\">\n              <div class=\"cus-inp-row\">\n                <label>Email</label>\n                <input type=\"text\" autocomplete=\"off\" [(ngModel)]=\"user.email\" (ngModelChange)=\"changeInFields('email')\" name=\"address\" [ngClass]=\"{'active': user.email != '','error':usrVld.usr == true}\" />\n              </div>\n              <div class=\"cus-inp-row\">\n                <label>Password</label>\n                <input type=\"password\" autocomplete=\"off\" [(ngModel)]=\"user.password\" (ngModelChange)=\"changeInFields('pass')\" name=\"unit\" [ngClass]=\"{'active': user.password != '','error':usrVld.pass == true}\" />\n              </div>\n              <div class=\"cus-check-row\">\n                <input type=\"checkbox\" id=\"cus-check\" />\n                <label for=\"cus-check\"><span></span>REMEMBER ME</label>\n              </div>\n            </div>\n            <div class=\"form-two-col\">\n              <div class=\"\">\n                <button (click)=\"fbLogin()\" class=\"cus-btn fb-btn\" mat-raised-button>\n                  FACEBOOK LOGIN\n                </button>\n                <button (click)=\"gpLogin()\" class=\"cus-btn google-btn\" mat-raised-button>\n                  GOOGLE LOGIN\n                </button>\n                <!-- <div class=\"cus-btn inp-btn\">\n                  <a href=\"#\">INTUiT LOGIN</a>\n                </div> -->\n              </div>\n            </div>\n          </div>\n          <button class=\"blue-btn\" (click)=\"login()\" mat-raised-button>NEXT</button>\n          <p class=\"forgot-text\">Forgot Your Password</p>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: inline-block;\n  vertical-align: top;\n  width: calc(100% - 120px);\n  height: 100%; }\n  .container .form-area .logoWithHeading {\n    text-align: center; }\n  .container .form-area .logoWithHeading span.logo {\n      display: inline-block;\n      vertical-align: middle;\n      width: 28px;\n      height: 28px;\n      background: url('GLogo.png');\n      background-position: center;\n      background-size: cover;\n      background-repeat: no-repeat; }\n  .container .form-area .logoWithHeading h3 {\n      display: inline-block;\n      vertical-align: middle;\n      margin-left: 10px;\n      font-size: 30px;\n      color: #747474;\n      font-family: 'ProximaNova-Light'; }\n  .container .form-area form .form-row {\n    display: flex;\n    justify-content: space-between;\n    margin: 25px 0; }\n  @media (max-width: 1100px) {\n      .container .form-area form .form-row {\n        flex-wrap: wrap; } }\n  .container .form-area form .form-row .form-two-col {\n      flex: 1; }\n  .container .form-area form .form-row .form-two-col:first-child {\n        padding-right: 25px;\n        border-right: 1px solid #f5f4f4; }\n  @media (max-width: 1100px) {\n          .container .form-area form .form-row .form-two-col:first-child {\n            padding: 0; } }\n  .container .form-area form .form-row .form-two-col:last-child {\n        padding-left: 25px;\n        padding-top: 30px; }\n  @media (max-width: 1100px) {\n          .container .form-area form .form-row .form-two-col:last-child {\n            padding: 0; } }\n  @media (max-width: 1100px) {\n        .container .form-area form .form-row .form-two-col {\n          width: 100%;\n          border: none; } }\n  .container .form-area form .form-row .form-two-col .cus-inp-row {\n        margin-bottom: 25px; }\n  .container .form-area form .form-row .form-two-col .cus-inp-row label {\n          height: 20px; }\n  .container .form-area form .form-row .form-two-col .cus-check-row {\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        padding-bottom: 50px; }\n  .container .form-area form .form-row .form-two-col .cus-check-row label span {\n          border: 3px solid #18c1f0;\n          border-radius: 50%;\n          width: 20px;\n          height: 20px;\n          display: inline-block;\n          vertical-align: middle;\n          margin-right: 10px; }\n  .container .form-area form .form-row .form-two-col .cus-check-row input {\n          display: none; }\n  .container .form-area form .form-row .form-two-col .cus-check-row input:checked ~ label span {\n            background: #18c1f0; }\n  .container .form-area form .form-row .form-two-col .cus-btn {\n        width: -webkit-fill-available;\n        text-align: left;\n        display: block;\n        border-radius: 5px;\n        text-transform: uppercase;\n        margin-bottom: 25px;\n        padding: 5px 10px;\n        color: #fff;\n        padding-left: 55px; }\n  .container .form-area form .form-row .form-two-col .cus-btn.fb-btn {\n          background: #496399;\n          background-image: url('fb.png');\n          background-position: left;\n          background-position-x: 20px;\n          background-size: 10px;\n          background-repeat: no-repeat; }\n  .container .form-area form .form-row .form-two-col .cus-btn.google-btn {\n          background: #4686f1;\n          background-image: url('googlePlus.png');\n          background-position: left;\n          background-position-x: 20px;\n          background-size: 15px;\n          background-repeat: no-repeat; }\n  .container .form-area form .form-row .form-two-col .cus-btn.inp-btn {\n          background: #385fbc; }\n  .container .form-area .forgot-text {\n    color: #18c1f0;\n    display: block;\n    text-align: center;\n    font-size: 20px;\n    letter-spacing: 1.5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9IYW16YS9Eb2N1bWVudHMvTm9kZS9BTVBfQVBJL3NyYy90aGVtZS9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7RUFKaEI7SUFTWSxrQkFBa0IsRUFBQTtFQVQ5QjtNQVlnQixxQkFBcUI7TUFDckIsc0JBQXNCO01BQ3RCLFdBQVc7TUFDWCxZQUFZO01BQ1osNEJBQWlEO01BQ2pELDJCQUEyQjtNQUMzQixzQkFBc0I7TUFDdEIsNEJBQTRCLEVBQUE7RUFuQjVDO01BdUJnQixxQkFBcUI7TUFDckIsc0JBQXNCO01BQ3RCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsY0NwQlM7TURxQlQsZ0NBQWdDLEVBQUE7RUE1QmhEO0lBa0NnQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWMsRUFBQTtFQUVkO01BdENoQjtRQXVDb0IsZUFBZSxFQUFBLEVBb0d0QjtFQTNJYjtNQTJDb0IsT0FBTyxFQUFBO0VBM0MzQjtRQThDd0IsbUJBQW1CO1FBQ25CLCtCQzdDVCxFQUFBO0VEK0NTO1VBakR4QjtZQWtENEIsVUFBVSxFQUFBLEVBRWpCO0VBcERyQjtRQXVEd0Isa0JBQWtCO1FBQ2xCLGlCQUFpQixFQUFBO0VBRWpCO1VBMUR4QjtZQTJENEIsVUFBVSxFQUFBLEVBRWpCO0VBRUQ7UUEvRHBCO1VBZ0V3QixXQUFXO1VBQ1gsWUFBWSxFQUFBLEVBeUVuQjtFQTFJakI7UUFxRXdCLG1CQUFtQixFQUFBO0VBckUzQztVQXdFNEIsWUFBWSxFQUFBO0VBeEV4QztRQTZFd0IsYUFBYTtRQUNiLDJCQUEyQjtRQUMzQixtQkFBbUI7UUFDbkIsb0JBQW9CLEVBQUE7RUFoRjVDO1VBb0ZnQyx5QkMvRWY7VURnRmUsa0JBQWtCO1VBQ2xCLFdBQVc7VUFDWCxZQUFZO1VBQ1oscUJBQXFCO1VBQ3JCLHNCQUFzQjtVQUN0QixrQkFBa0IsRUFBQTtFQTFGbEQ7VUErRjRCLGFBQWEsRUFBQTtFQS9GekM7WUFtR29DLG1CQzlGbkIsRUFBQTtFRExqQjtRQTBHd0IsNkJBQTZCO1FBQzdCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxrQkFBa0IsRUFBQTtFQWxIMUM7VUFxSDRCLG1CQUFtQjtVQUNuQiwrQkFBb0Q7VUFDcEQseUJBQXlCO1VBQ3pCLDJCQUEyQjtVQUMzQixxQkFBcUI7VUFDckIsNEJBQTRCLEVBQUE7RUExSHhEO1VBOEg0QixtQkFBbUI7VUFDbkIsdUNBQTREO1VBQzVELHlCQUF5QjtVQUN6QiwyQkFBMkI7VUFDM0IscUJBQXFCO1VBQ3JCLDRCQUE0QixFQUFBO0VBbkl4RDtVQXVJNEIsbUJBQTRCLEVBQUE7RUF2SXhEO0lBK0lZLGNDMUlLO0lEMklMLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLmZvcm0tYXJlYSB7XG5cbiAgICAgICAgLmxvZ29XaXRoSGVhZGluZyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIHNwYW4ubG9nbyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL0dMb2dvLnBuZyk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGhlYWRpbmdOb3JtQ29sb3I7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm94aW1hTm92YS1MaWdodCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgIC5mb3JtLXJvdyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDA7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZm9ybS10d28tY29sIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcblxuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jdXMtaW5wLXJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN1cy1jaGVjay1yb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAkZGFya0JsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Y2hlY2tlZH5sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGRhcmtCbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmN1cy1idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDU1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICYuZmItYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDk2Mzk5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL2ZiLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICYuZ29vZ2xlLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ2ODZmMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9nb29nbGVQbHVzLnBuZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICYuaW5wLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDU2LCA5NSwgMTg4KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmZvcmdvdC10ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiAkZGFya0JsdWU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvL0FsbCB0aGUgY29sb3JzIHVzZWQgaW4gdGhlIGFwcCB3aWxsIGJlIHByZXNlbnQgaGVyZS5cbiRwcmltYXJ5OiNmZmZmZmY7XG4kZGFyazojMDAwMDAwO1xuJHRoZW1lOiNmYWZhZmE7XG4kYm9yZGVyOiNmNWY0ZjQ7XG4kc2hhZG93OiNiZWJlYmVjNTtcbiRibHVlVGhlbWU6IzM5ZDRmZjtcbiRkYXJrQmx1ZTojMThjMWYwO1xuJGdyZXlUaGVtZTojZDhkOGQ4O1xuJGhlYWRpbmdOb3JtQ29sb3I6Izc0NzQ3NDtcbiRibG9ja09wdDojYzdjN2M3O1xuJGJhY2s6IzliOWI5YjtcbiRzbWFsbFNpemU6MTJweDtcbiRoZWFkaW5nU2l6ZToxNHB4O1xuJHZhbGlkYXRpb246I2Q4MDkwOWIzO1xuJGNoYXRHcmVlbjojMzNjZDI5O1xuJGNoYXRJbnB1dDojZjFmNGY0O1xuJHNoYWRvd0Zvcm11bGE6MCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksXG4wIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLFxuMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTsiXX0= */"

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
/* harmony import */ var src_app_auxilaries_aux_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auxilaries/aux.service */ "./src/app/auxilaries/aux.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/credentials/credential.service */ "./src/app/services/credentials/credential.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");









var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, credential, location, socialService, aux) {
        this.auth = auth;
        this.router = router;
        this.credential = credential;
        this.location = location;
        this.socialService = socialService;
        this.aux = aux;
        this.user = {
            email: '',
            password: ''
        };
        this.usrVld = {
            usr: false,
            pass: false
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.goBack = function () {
        this.location.back();
    };
    LoginComponent.prototype.changeInFields = function (field) {
        if (field == 'email')
            this.usrVld.usr = false;
        else if (field == 'pass')
            this.usrVld.pass = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var check = false;
        if (this.user.email == '') {
            this.usrVld.usr = true;
            check = true;
        }
        if (this.user.password == '') {
            this.usrVld.pass = true;
            if (!check)
                check = true;
        }
        if (check) {
            this.aux.showAlert("Please don't leave any field blank", "ERROR!");
            return;
        }
        var params = {
            email: this.user.email,
            pwd: this.user.password
        };
        this.auth.login(params).subscribe(function (success) {
            _this.credential.setUser(success.data);
            _this.router.navigate(['/setup']);
        }, function (error) {
            _this.aux.errorResponse(error);
        });
    };
    LoginComponent.prototype.fbLogin = function () {
        var _this = this;
        this.socialService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"].PROVIDER_ID).then(function (result) {
            var params = {
                email: result.email,
                fb_id: result.id
            };
            _this.auth.fbLogin(params).subscribe(function (success) {
                _this.credential.setUser(success.data);
                _this.router.navigate(['/home']);
            }, function (error) {
                _this.aux.errorResponse(error);
            });
        });
    };
    LoginComponent.prototype.gpLogin = function () {
        var _this = this;
        this.socialService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID).then(function (result) {
            var params = {
                email: result.email,
                g_id: result.id
            };
            _this.auth.gpLogin(params).subscribe(function (success) {
                _this.credential.setUser(success.data);
                _this.router.navigate(['/home']);
            }, function (error) {
                _this.aux.errorResponse(error);
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_credentials_credential_service__WEBPACK_IMPORTED_MODULE_6__["CredentialService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            src_app_auxilaries_aux_service__WEBPACK_IMPORTED_MODULE_3__["AuxService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/auth/login/login.component.ts");
/* harmony import */ var src_app_components_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/material/material.module */ "./src/app/components/material/material.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
            imports: [
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
                    }
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_components_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-login-login-module.js.map