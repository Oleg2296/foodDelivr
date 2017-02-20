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
var user_service_1 = require('../../service/user.service');
var http_service_1 = require('../../service/http.service');
var orders_1 = require("../../admin_user/orders");
var OrdersService = (function () {
    function OrdersService(userService, http) {
        this.userService = userService;
        this.http = http;
        this.orders = orders_1.Orders;
        this.archOrd = [];
        this.archId = 0;
    }
    OrdersService.prototype.getOrder = function () {
        return this.orders;
    };
    OrdersService.prototype.archOrder = function (x) {
        for (var i in this.orders) {
            if (this.orders[i].orderId == x.orderId) {
                this.archOrd.push(this.orders[i]);
                this.orders.splice(i, 1);
            }
        }
        // console.log(this.archOrd);
    };
    OrdersService.prototype.deleteOrdArch = function (x) {
        for (var i in this.archOrd) {
            if (this.archOrd[i].orderId == x.orderId) {
                this.archOrd.splice(i, 1);
            }
        }
    };
    OrdersService.prototype.toOrder = function (order) {
        for (var i in this.archOrd) {
            if (this.archOrd[i].orderId == order.orderId) {
                this.orders.push(this.archOrd[i]);
                this.archOrd.splice(i, 1);
            }
        }
    };
    OrdersService.prototype.getArchOrd = function () {
        return this.archOrd;
    };
    OrdersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_service_1.UserService, http_service_1.HttpClient])
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map