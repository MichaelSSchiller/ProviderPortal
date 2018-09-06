(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _headerdummy_headerdummy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headerdummy/headerdummy.component */ "./src/app/headerdummy/headerdummy.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
    },
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
    },
    {
        path: 'headerdummy',
        component: _headerdummy_headerdummy_component__WEBPACK_IMPORTED_MODULE_2__["HeaderdummyComponent"]
    },
    {
        path: 'signup/:fn',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<div id=\"container\">\n\n  <router-outlet></router-outlet>\n\n\n  \n\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ProviderPortal';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./articles/articles.component */ "./src/app/articles/articles.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _headerdummy_headerdummy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./headerdummy/headerdummy.component */ "./src/app/headerdummy/headerdummy.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _articles_articles_component__WEBPACK_IMPORTED_MODULE_6__["ArticlesComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _headerdummy_headerdummy_component__WEBPACK_IMPORTED_MODULE_8__["HeaderdummyComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/articles/articles.component.html":
/*!**************************************************!*\
  !*** ./src/app/articles/articles.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h4 class=\"text-center my-3\">Reasons to Sign Up as a Provider<br></h4>\n    </div>\n  </div>\n  <div class=\"row my-2\">\n    <div class=\"col-sm-4 headline text-center\">\n      <img class=\"img-fluid mb-2\" src=\"assets/img/accessibility.png\">\n      <h4>Promote Inclusivity</h4>\n      <p class=\"text-left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n      <button type=\"button\" class=\"btn\" routerLink=\"/headerdummy\"><b>Learn More</b></button>\n    </div>\n    <div class=\"col-sm-4 headline text-center\">\n      <img class=\"img-fluid mb-2\" src=\"assets/img/transparency.png\">\n      <h4>Build Trust</h4>\n      <p class=\"text-left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n      <button type=\"button\" class=\"btn\" routerLink=\"/headerdummy\"><b>Learn More</b></button>\n    </div>\n    <div class=\"col-sm-4 headline text-center\">\n      <img class=\"img-fluid mb-2\" src=\"assets/img/grow.png\">\n      <h4>Grow your Practice</h4>\n      <p class=\"text-left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n      <button type=\"button\" class=\"btn\" routerLink=\"/headerdummy\"><b>Learn More</b></button>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/articles/articles.component.scss":
/*!**************************************************!*\
  !*** ./src/app/articles/articles.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headline {\n  display: inline-block; }\n\n.btn {\n  background-color: #7D7A55; }\n"

/***/ }),

/***/ "./src/app/articles/articles.component.ts":
/*!************************************************!*\
  !*** ./src/app/articles/articles.component.ts ***!
  \************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent() {
    }
    ArticlesComponent.prototype.ngOnInit = function () {
    };
    ArticlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__(/*! ./articles.component.html */ "./src/app/articles/articles.component.html"),
            styles: [__webpack_require__(/*! ./articles.component.scss */ "./src/app/articles/articles.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <nav class=\"navbar\">\n\n    <ul class=\"navbar-nav text-center ml-1\">\n      <li class=\"nav-item\"><h5><u>About Us</u></h5></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/headerdummy\">Home</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/headerdummy\">About</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/headerdummy\">Contact</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/headerdummy\">Write a Review</a></li>\n    </ul>\n\n    <ul class=\"navbar-nav text-center\">\n      <li class=\"nav-item text-center\"><h5><u>Specialists</u></h5></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/headerdummy\">Primary Care Physician</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/headerdummy\">Pediatrician</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/headerdummy\">Optomotrist</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/headerdummy\">Dentists</a></li>\n    </ul>\n\n    <ul class=\"navbar-nav mr-1\">\n      <li class=\"nav-item text-center\"><h5><u>Follow Us</u></h5></li>\n      <li class=\"nav-item py-1\"><a class=\"nav-link fa fa-facebook\" href=\"#\"></a> </li>\n      <li class=\"nav-item py-1\"><a class=\"nav-link fa fa-twitter\" href=\"#\"></a></li>\n      <li class=\"nav-item py-1\"><a class=\"nav-link fa fa-instagram\" href=\"#\"></a></li>\n      <li class=\"nav-item py-1\"><a class=\"nav-link fa fa-pinterest\" href=\"#\"></a></li>\n\n    </ul>\n\n  </nav>\n</section>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #427e84; }\n\na {\n  color: black; }\n\n.fa {\n  font-size: 20px;\n  width: 100%;\n  text-align: center;\n  text-decoration: none; }\n\n.fa:hover {\n  opacity: 0.7; }\n\n.fa-facebook {\n  background: #3B5998;\n  color: white; }\n\n.fa-twitter {\n  background: #55ACEE;\n  color: white; }\n\n.fa-instagram {\n  background: #125688;\n  color: white; }\n\n.fa-pinterest {\n  background: #cb2027;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <nav class=\"navbar navbar-expand-sm py-0 mb-4\">\n\n    <a class=\"navbar-brand\" href=\"#\"><img class=\"img-thumbnail img-fluid\" src=\"assets/img/logo - ms.png\"></a>\n\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <div class=\"dropdown m-1 \">\n          <a href=\"#\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\"><b>Dropdown 1</b></a>\n          <div class=\"dropdown-menu\">\n            <a class=\"dropdown-item\" routerLink=\"/headerdummy\">Dropdown Menu Item A1</a>\n            <a class=\"dropdown-item\" routerLink=\"/headerdummy\">Dropdown Menu Item A2</a>\n            <a class=\"dropdown-item\" routerLink=\"/headerdummy\">Dropdown Menu Item A3</a>\n          </div>\n        </div>\n      </li>\n\n      <li class=\"nav-item\">\n        <div class=\"dropdown m-1\">\n          <a href=\"#\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\"><b>Dropdown 2</b></a>\n          <div class=\"dropdown-menu\">\n            <a class=\"dropdown-item\" routerLink=\"/headerdummy\">Dropdown Menu Item B1</a>\n            <a class=\"dropdown-item\" routerLink=\"/headerdummy\">Dropdown Menu Item B2</a>\n            <a class=\"dropdown-item\" routerLink=\"/headerdummy\">Dropdown Menu Item B3</a>\n          </div>\n        </div>\n      </li>\n\n      <li class=\"nav-item\">\n        <div class=\"dropdown m-1\">\n          <a href=\"#\" class=\"btn dropdown-toggle\" data-toggle=\"dropdown\"><b>Dropdown 3</b></a>\n          <div class=\"dropdown-menu\">\n            <a class=\"dropdown-item\" routerLink=\"/headerdummy\">Dropdown Menu Item C1</a>\n            <a class=\"dropdown-item\" routerLink=\"/headerdummy\">Dropdown Menu Item C2</a>\n            <a class=\"dropdown-item\" routerLink=\"/headerdummy\">Dropdown Menu Item C3</a>\n          </div>\n        </div>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <div class=\"dropdown m-1\">\n          <button type=\"button\" class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\"><b>Log In</b></button>\n          <!-- Modal Start-->\n          <div class=\"modal\" id=\"myModal\">\n            <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n                <!-- Modal Header -->\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\">Log in</h4>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <!-- Modal body -->\n                <div class=\"modal-body\">\n                  <label for=\"fname\">Username</label>\n                  <input type=\"text\" class=\"form-control\" id=\"fname\">\n                  <label for=\"pwd\">Password</label>\n                  <input type=\"password\" class=\"form-control\" id=\"pwd\">\n                </div>\n                <!-- Modal footer routerLink=\"/headerdummy\"-->\n                <div class=\"modal-footer\">\n                  <button type=\"button\" id=\"submit\">Submit</button>\n                  <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                </div>\n              </div>\n            </div>\n          </div> <!-- Modal End-->\n        </div>\n      </li>\n    </ul>\n\n  </nav>\n</section>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown:hover > .dropdown-menu {\n  display: block; }\n\n.login {\n  float: right; }\n\n.navbar {\n  background-color: #427e84; }\n\n.dropdown a {\n  color: black; }\n\nimg {\n  width: 50%; }\n\n/*\r\n.btn {\r\n  background-color:  #7D7A55;//#427e84; //#D4B875; //#C48639;\r\n}*/\n\n/*\r\n.dropdown-toggle:after { \r\n  display: none;\r\n}*/\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/headerdummy/headerdummy.component.html":
/*!********************************************************!*\
  !*** ./src/app/headerdummy/headerdummy.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"text-center\">\n  <p>Placeholder Page</p>\n  <a class=\"nav-link\" routerLink=\"/\">Go Back</a>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/headerdummy/headerdummy.component.scss":
/*!********************************************************!*\
  !*** ./src/app/headerdummy/headerdummy.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/headerdummy/headerdummy.component.ts":
/*!******************************************************!*\
  !*** ./src/app/headerdummy/headerdummy.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderdummyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderdummyComponent", function() { return HeaderdummyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderdummyComponent = /** @class */ (function () {
    function HeaderdummyComponent() {
    }
    HeaderdummyComponent.prototype.ngOnInit = function () {
    };
    HeaderdummyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-headerdummy',
            template: __webpack_require__(/*! ./headerdummy.component.html */ "./src/app/headerdummy/headerdummy.component.html"),
            styles: [__webpack_require__(/*! ./headerdummy.component.scss */ "./src/app/headerdummy/headerdummy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderdummyComponent);
    return HeaderdummyComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n\n <!-- <div id=\"carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner embed-responsive embed-responsive-21by9\">\n      <div class=\"carousel-item embed-responsive-item active slide1\"></div>\n      <div class=\"carousel-item embed-responsive-item slide2\"></div>\n      <div class=\"carousel-item embed-responsive-item slide3\"></div>\n    </div>\n  </div>-->\n\n\n  <div class=\"row formrow bg mx-1\">\n\n    <div class=\"col m-4\"></div>\n\n    <div class=\"col formbox m-3\">\n      <div class=\"form-inline py-1\">\n        <label for=\"fname\"><b>First Name</b></label>\n        <input type=\"text\" class=\"form-control\" id=\"fname\">\n      </div>\n      <div class=\"form-inline py-1\">\n        <label for=\"lname\"><b>Last Name</b></label>\n        <input type=\"text\" class=\"form-control\" id=\"lname\">\n      </div>\n      <div class=\"form-inline py-1\">\n        <label for=\"email\"><b>Email</b></label>\n        <input type=\"email\" class=\"form-control\" id=\"email\">\n      </div>\n      <div class=\"form-inline py-1\">\n        <label for=\"pwd\"><b>Password</b></label>\n        <input type=\"password\" class=\"form-control\" id=\"pwd\">\n      </div>\n      <div class=\"form-inline py-1\">\n        <label for=\"cpwd\"><b>Confirm Password</b></label>\n        <input type=\"password\" class=\"form-control\" id=\"cpwd\">\n      </div>\n      <div class=\"form-row justify-content-center\">\n        <button type=\"submit\" class=\"btn m-1\" routerLink=\"/headerdummy\"><b>Sign Up</b></button>\n      </div>\n    </div>\n\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background: url(\"/assets/img/background2.png\") no-repeat center center;\n  background-size: cover; }\n\n/*\r\n.slide1{\r\n    background: url(\"/assets/img/background1.png\")no-repeat center center;\r\n    background-size: cover;\r\n\r\n}\r\n.slide2{\r\n    background: url(\"/assets/img/background2.png\")no-repeat center center;\r\n    background-size: cover;\r\n}\r\n.slide3{\r\n    background: url(\"/assets/img/background3.png\")no-repeat center center;\r\n    background-size: cover;\r\n}*/\n\n.formbox {\n  border: solid;\n  border-color: black;\n  background-color: #427e84;\n  width: 90%;\n  opacity: .9; }\n\n.formbox input {\n  display: inline; }\n\n.formbox label {\n  width: 200px;\n  display: block; }\n\n.article {\n  display: inline-block; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <app-header></app-header>\n  <app-login></app-login>\n  <app-articles></app-articles>\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\my867\Desktop\Mikey\GitHub Projects\ProviderPortal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map