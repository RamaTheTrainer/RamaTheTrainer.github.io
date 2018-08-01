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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <form class=\"form form-horizontal\">\n                User name\n                <input #uName=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"frmUser\" name=\"uName\" />\n                <button class=\"btn btn-primary\" (click)=\"btnSignInClick(uName)\">SignIn</button> |\n                <button class=\"btn btn-primary\" (click)=\"btnSignOutClick(uName)\">SignOut</button>\n              <br/> Messages\n            <br/>\n            <div style=\"height: 300px\" >\n                <div *ngFor=\"let m of messages\">\n                    <span>{{m.user}} : </span>\n                    <span>{{m.msg}}</span>\n                </div>\n            </div>\n            <hr/>\n            <input type=\"text\" class=\"form-control\" #msg />\n            <button class=\"btn btn-primary\" (click)=\"btnSendMessageClick(msg)\">Send</button>\n            \n        </form>\n        </div>\n        <div class=\"col-md-4\">\n            <b>User Online </b><br/>\n             \n            <select (change)=\"userSelect()\" size=\"20\" multiple=\"multiple\" [(ngModel)]=\"toUser\" class=\"form-control\" >\n                <option *ngFor=\"let u of onlineUsers\">\n                    {{u}}\n                </option>\n            </select>\n        </div>\n    </div>\n\n</div>"

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
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(ht) {
        this.ht = ht;
        this.url = "https://afternoon-sands-94699.herokuapp.com/";
        this.messages = [];
        this.onlineUsers = [];
        this.toUser = "";
        this.frmUser = "";
        //this.getChatMessage().subscribe((data) => { this.messages.push(data); console.log(data) })
        this.getNewOnlineUsers().subscribe(function (data) { console.log(data); });
    }
    AppComponent.prototype.getOnlineUsesr = function () {
        return this.ht.get(this.url, { responseType: 'json' });
    };
    AppComponent.prototype.ChatConnect = function (uname) {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url, { query: "userName=" + uname });
        this.getChatMessage().subscribe(function (data) { console.log(data); _this.messages.push(data); });
    };
    AppComponent.prototype.btnSignInClick = function (unm) {
        this.frmUser = unm.value;
        //this.onlineUsers.push(this.frmUser)
        this.ChatConnect(this.frmUser);
    };
    AppComponent.prototype.GetSelectedUserMessages = function () {
        return this.ht.get(this.url + '/' + this.frmUser + '/' + this.toUser, { responseType: 'json' });
    };
    AppComponent.prototype.getNewOnlineUsers = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('newUsers', function (data) {
                observer.next(data);
                alert('New user ..');
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    AppComponent.prototype.getChatMessage = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('sendClient', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    AppComponent.prototype.sendMessage = function (msg, fUser, toUser) {
        var nMsg = msg + "|" + fUser + "|" + toUser;
        //alert(nMsg)
        this.socket.emit('addmsg', nMsg);
    };
    AppComponent.prototype.btnSendMessageClick = function (msg) {
        //alert(msg.value + this.frmUser + this.toUser);
        this.messages.push({ user: "Me", msg: msg.value });
        this.sendMessage(msg.value, this.frmUser, this.toUser);
    };
    AppComponent.prototype.btnSignOutClick = function () {
        this.socket.emit('disconnect');
        this.socket.disconnect();
        //alert('Disconnected ...')
    };
    AppComponent.prototype.userSelect = function () {
        var _this = this;
        this.messages.length = 0;
        var msgs;
        this.GetSelectedUserMessages().subscribe(function (data) {
            //"cno":1,"frmuser":"Rama","touser":"Ramesh","msg":"Hello How r u ","datetime":"2018-07-20"}
            msgs = data;
            msgs.forEach(function (element) {
                if (element.frmuser == _this.frmUser) {
                    _this.messages.push({ user: "Me", msg: element.msg });
                }
                else {
                    _this.messages.push({ user: element.frmuser, msg: element.msg });
                }
            });
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        // this.getOnlineUsesr().subscribe((data) => {
        //     data.forEach(element => {
        var _this = this;
        //         this.onlineUsers.push(element.userName);
        //     });
        // });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(20000).subscribe(function (x) {
            //this.onlineUsers.length = 0;
            _this.getOnlineUsesr().subscribe(function (data) {
                var i = 0;
                _this.onlineUsers.forEach(function (element) {
                    if (!data.includes(element)) {
                        _this.onlineUsers.splice(i, 1);
                        i--;
                    }
                    i++;
                });
                data.forEach(function (element) {
                    if (!_this.onlineUsers.includes(element.userName)) {
                        _this.onlineUsers.push(element.userName);
                    }
                });
            });
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! F:\ChatApp\clientApp\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map