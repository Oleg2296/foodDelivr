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
var user_service_1 = require('../service/user.service');
var http_service_1 = require('../service/http.service');
var auth_service_1 = require('../service/auth.service');
var userAdmin_1 = require('../admin_user/userAdmin');
var LoginAdminService = (function () {
    function LoginAdminService(userService, http, authService) {
        this.userService = userService;
        this.http = http;
        this.authService = authService;
        this.admin = userAdmin_1.Admin;
    }
    // loginIn(user:any){
    //     if(user.login==this.admin.login && user.password==this.admin.password) {
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    LoginAdminService.prototype.loginIn = function (user) {
        return this.authService.signIn(user);
    };
    LoginAdminService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_service_1.UserService, http_service_1.HttpClient, auth_service_1.AuthService])
    ], LoginAdminService);
    return LoginAdminService;
}());
exports.LoginAdminService = LoginAdminService;
//# sourceMappingURL=loginAdmin.service.js.map