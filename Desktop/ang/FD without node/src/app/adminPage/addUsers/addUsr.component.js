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
var auth_service_1 = require('../../service/auth.service');
var user_service_1 = require('../../service/user.service');
var addUser_service_1 = require('./addUser.service');
var users_1 = require('../../admin_user/users');
var AddUserComponent = (function () {
    function AddUserComponent(userService, authService, addUserService) {
        this.userService = userService;
        this.authService = authService;
        this.addUserService = addUserService;
        this.users = users_1.users;
    }
    AddUserComponent.prototype.addUser = function (log, pass, name, sname, email, phon) {
        var user = new users_1.User(log, pass, name, sname, email, phon);
        this.addUserService.addUsr(user);
    };
    AddUserComponent.prototype.ngOnInit = function () {
        this.userService.checkAdmin();
    };
    AddUserComponent.prototype.delete = function (user) {
        this.addUserService.delete(user);
    };
    AddUserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-usr',
            templateUrl: '../../../templetes/views/addUsr.html',
            styleUrls: ['../../../style/layout/users.css']
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, auth_service_1.AuthService, addUser_service_1.AddUserService])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=addUsr.component.js.map