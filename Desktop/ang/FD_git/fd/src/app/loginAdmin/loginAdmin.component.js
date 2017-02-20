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
var loginAdmin_service_1 = require('./loginAdmin.service');
var router_1 = require('@angular/router');
// import { UserService } from '../service/user.service';
var LoginAdminComponent = (function () {
    function LoginAdminComponent(LoginAdminService, router) {
        this.LoginAdminService = LoginAdminService;
        this.router = router;
    }
    LoginAdminComponent.prototype.loginAdmin = function (login, password) {
        var user = { login: login, password: password };
        // this.LoginAdminService.loginIn(user);
        if (this.LoginAdminService.loginIn(user)) {
            sessionStorage.setItem('currentAdmin', JSON.stringify(user));
            this.router.navigate(["adminPage"]);
        }
        else {
            this.wrongPass = true;
        }
    };
    LoginAdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-admin',
            templateUrl: '../../templetes/views/loginAdmin.html',
            styleUrls: ['../../style/layout/LoginAdmin.css']
        }), 
        __metadata('design:paramtypes', [loginAdmin_service_1.LoginAdminService, router_1.Router])
    ], LoginAdminComponent);
    return LoginAdminComponent;
}());
exports.LoginAdminComponent = LoginAdminComponent;
//# sourceMappingURL=loginAdmin.component.js.map