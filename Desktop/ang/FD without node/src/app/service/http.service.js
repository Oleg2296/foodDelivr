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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
//users, admins
var userAdmin_1 = require('../admin_user/userAdmin');
var users_1 = require('../admin_user/users');
var HttpClient = (function () {
    function HttpClient(http, router) {
        this.http = http;
        this.router = router;
        this.admin = userAdmin_1.Admin;
        this.users = users_1.users;
    }
    // createAuthorizationHeader(headers:Headers) {
    //     if(!this.token)
    //         this.token=sessionStorage.getItem('admin');
    //     headers.append('Authorization', this.token);
    // }
    HttpClient.prototype.post = function (url, data) {
        var user = data;
        if (user.login == this.admin.login && user.password == this.admin.password) {
            return true;
        }
        else {
            return false;
        }
        // let headers = new Headers();
        // this.createAuthorizationHeader(headers);
        // return this.http.post(url, data, {
        //     headers: headers
        // });
    };
    HttpClient.prototype.delete = function (user) {
        for (var i in this.users) {
            if (user.name == this.users[i].name) {
                this.users.splice(i, 1);
            }
        }
    };
    HttpClient.prototype.addUser = function (user) {
        console.log(user);
        this.users.push(user);
    };
    HttpClient.prototype.logOut = function () {
        if (sessionStorage.getItem('currentAdmin')) {
            sessionStorage.removeItem('currentAdmin');
        }
        this.router.navigate(['loginAdmin']);
    };
    HttpClient = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], HttpClient);
    return HttpClient;
}());
exports.HttpClient = HttpClient;
//# sourceMappingURL=http.service.js.map