"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var http_service_1 = require('./http.service');
var router_1 = require('@angular/router');
var userAdmin_1 = require('../admin_user/userAdmin');
var UserService = (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.admin = userAdmin_1.Admin;
    }
    UserService.prototype.checkAdmin = function () {
        this.currentAdmin = JSON.parse(sessionStorage.getItem('currentAdmin'));
        if (this.currentAdmin != null) {
            if (this.currentAdmin.login != this.admin.login) {
                this.router.navigate(['loginAdmin']);
            }
        }
        else {
            this.router.navigate(['loginAdmin']);
        }
    };
    UserService.prototype.logOut = function () {
        this.http.logOut();
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpClient, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map