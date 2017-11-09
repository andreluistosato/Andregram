webpackJsonp([0],{

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photos_photos__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__take_picture_take_picture__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.photosTab = __WEBPACK_IMPORTED_MODULE_2__photos_photos__["a" /* PhotosPage */];
        this.profileTab = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
    }
    HomePage.prototype.showSendPhoto = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__take_picture_take_picture__["a" /* TakePicturePage */]);
        modal.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\projects\andregram\src\pages\home\home.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title text-center class="oleo-script">Andregram</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showSendPhoto()">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="auto-scroll">\n  <ion-tabs>\n    <ion-tab tabIcon="home" [root]="photosTab"></ion-tab>\n    <ion-tab tabIcon="search" [root]="profileTab"></ion-tab>\n    <ion-tab tabIcon="add-circle" class="add-tab-icon" [root]="profileTab"></ion-tab>\n    <ion-tab tabIcon="heart" [root]="profileTab"></ion-tab>\n    <ion-tab tabIcon="contact" [root]="profileTab"></ion-tab>\n  </ion-tabs>\n</ion-content>'/*ion-inline-end:"C:\projects\andregram\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotosPage = (function () {
    function PhotosPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PhotosPage;
}());
PhotosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-photos',template:/*ion-inline-start:"C:\projects\andregram\src\pages\photos\photos.html"*/'<ion-content class="auto-scroll">\n\n    <ion-grid fixed>\n\n        <ion-row align-items-center justify-content-center>\n\n            <ion-col col-12 col-sm-12 col-md-4>\n\n                <ion-card>\n\n                    <img src="http://lorempixel.com/g/512/512/" alt="">\n\n                    <ion-card-content>\n\n                        <ion-card-title>\n\n                            Image Title\n\n                        </ion-card-title>\n\n                        <p>Image Text</p>\n\n                        <p><small>Posted on 30/08/2017 16h25 by andretc</small></p>\n\n                    </ion-card-content>\n\n                    <ion-row no-padding>\n\n                        <ion-col>\n\n                            <button ion-button clear small color="danger" icon-start>\n\n                            <ion-icon name="pin"> See location</ion-icon>\n\n                        </button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\projects\andregram\src\pages\photos\photos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], PhotosPage);

//# sourceMappingURL=photos.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakePicturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__send_photo_send_photo__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TakePicturePage = (function () {
    function TakePicturePage(viewCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    TakePicturePage.prototype.takePicture = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__send_photo_send_photo__["a" /* SendPhotoPage */]);
        modal.present();
    };
    TakePicturePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return TakePicturePage;
}());
TakePicturePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-take-picture',template:/*ion-inline-start:"C:\projects\andregram\src\pages\take-picture\take-picture.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n      <ion-title text-center class="oleo-script">Andregram</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="dismiss()">\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n<ion-content class="auto-scroll">\n\n    <ion-card>\n\n        <video id="video" width="100%" autoplay></video>\n\n        <canvas id="canvas" style="display:none;"></canvas>\n\n    </ion-card>\n\n    <div padding>\n\n        <button ion-button block large outline (click)="takePicture()">Tirar Foto</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\projects\andregram\src\pages\take-picture\take-picture.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
], TakePicturePage);

//# sourceMappingURL=take-picture.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendPhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SendPhotoPage = (function () {
    function SendPhotoPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    SendPhotoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return SendPhotoPage;
}());
SendPhotoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-send-photo',template:/*ion-inline-start:"C:\projects\andregram\src\pages\send-photo\send-photo.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title text-center class="oleo-script">Baltagram</ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="auto-scroll">\n\n    <ion-card>\n\n        <ion-slides (ionSlideDidChange)="changeFilter()">\n\n            <ion-slide *ngFor="let filter of filters" text-center>\n\n                <img src="{{ photo }}" alt="" class="{{ filter}}" style="width: 100%">\n\n                <small>{{ filter }}</small>\n\n            </ion-slide>\n\n        </ion-slides>\n\n        <ion-card-content>\n\n            <form [formGroup]="form">\n\n                <ion-list no-lines>\n\n                    <ion-item>\n\n                        <ion-input type="text" placeholder="Título" maxlength="40" formControlName="title"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-textarea placeholder="Mensagem" rows="3" maxlength="255" formControlName="message"></ion-textarea>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </form>\n\n        </ion-card-content>\n\n        <ion-row no-padding>\n\n            <ion-col>\n\n                <button ion-button clear small color="danger" icon-start *ngIf="location == \'\'" (click)="getLocation()"><ion-icon name=\'pin\'></ion-icon> Ativar Localização</button>\n\n                <button ion-button clear small color="danger" icon-start *ngIf="location != \'\'"><ion-icon name=\'pin\'></ion-icon> {{ location }}</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n    <div padding>\n\n        <button ion-button block large outline [disabled]="!form.valid" (click)="submit()">Enviar</button>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\projects\andregram\src\pages\send-photo\send-photo.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
], SendPhotoPage);

//# sourceMappingURL=send-photo.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\projects\andregram\src\pages\profile\profile.html"*/'<ion-content text-center class="auto-scroll">\n\n    <br>\n\n    <p>Você está autenticado como</p>\n\n    <h2>{{ user }}</h2>\n\n    <br><br>\n\n    <button ion-button large outline (click)="submit()">Desconectar</button>\n\n</ion-content>'/*ion-inline-end:"C:\projects\andregram\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(296);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export environment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_photos_photos__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_send_photo_send_photo__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_take_picture_take_picture__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { ShowMapPage } from '../pages/show-map/show-map';
var environment = {
    firebase: {
        apiKey: "AIzaSyDAOdXTodJroUXBm1lS8Y2W_uC3zDFX428",
        authDomain: "andregram-94e6c.firebaseapp.com",
        databaseURL: "https://andregram-94e6c.firebaseio.com",
        projectId: "andregram-94e6c",
        storageBucket: "andregram-94e6c.appspot.com",
        messagingSenderId: "371170786213"
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_photos_photos__["a" /* PhotosPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_send_photo_send_photo__["a" /* SendPhotoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_take_picture_take_picture__["a" /* TakePicturePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(environment.firebase),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_photos_photos__["a" /* PhotosPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_send_photo_send_photo__["a" /* SendPhotoPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_take_picture_take_picture__["a" /* TakePicturePage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\projects\andregram\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\projects\andregram\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\projects\andregram\src\pages\login\login.html"*/'<ion-content class="auto-scroll">\n\n    <ion-grid fixed>\n\n        <ion-row align-items-center justify-content-center>\n\n            <ion-col col-12 col-sm-12 col-md-6>\n\n                    <br>\n\n                    <br>\n\n                    <br>\n\n                    <h1 text-center class="oleo-script logo-title">Andregram</h1>\n\n                    <br><br>\n\n                    <ion-list no-lines>\n\n                        <ion-item>\n\n                            <ion-input type="email" placeholder="E-mail"></ion-input>\n\n                        </ion-item>\n\n                        <ion-item>\n\n                            <ion-input type="password" placeholder="Senha"></ion-input>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                    <button ion-button block large outline>Entrar</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <ion-buttons>\n\n            <button small ion-button block>\n\n                <small>Ainda não tem conta?&nbsp;<strong>Cadastre-se</strong></small>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\projects\andregram\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupPage = (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\projects\andregram\src\pages\signup\signup.html"*/'<ion-content class="auto-scroll">\n\n    <ion-grid fixed>\n\n        <ion-row align-items-center justify-content-center>\n\n            <ion-col col-12 col-sm-12 col-md-6>\n\n                    <br>\n\n                    <br>\n\n                    <br>\n\n                    <h1 text-center class="oleo-script logo-title">Andregram</h1>\n\n                    <br><br>\n\n                    <ion-list no-lines>\n\n                        <ion-item>\n\n                            <ion-input type="email" placeholder="E-mail"></ion-input>\n\n                        </ion-item>\n\n                        <ion-item>\n\n                            <ion-input type="password" placeholder="Senha"></ion-input>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                    <button ion-button block large outline>Cadastrar</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <ion-buttons>\n\n            <button small ion-button block>\n\n                <small>Já tem conta?&nbsp;<strong>Autentique-se</strong></small>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\projects\andregram\src\pages\signup\signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

},[280]);
//# sourceMappingURL=main.js.map