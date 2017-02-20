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
var orders_service_1 = require('./orders.service');
var user_service_1 = require('../../service/user.service');
var router_1 = require('@angular/router');
var OrdersComponent = (function () {
    function OrdersComponent(orderService, router, userService) {
        this.orderService = orderService;
        this.router = router;
        this.userService = userService;
    }
    // openModel(user:any){
    //     newUser = user;
    //
    // }
    OrdersComponent.prototype.toOrd = function (order) {
        this.orderService.toOrder(order);
    };
    OrdersComponent.prototype.archOrd = function (x) {
        this.orderService.archOrder(x);
        // console.log(this.orders[x]);
    };
    OrdersComponent.prototype.delete = function (x) {
        this.orderService.deleteOrdArch(x);
    };
    OrdersComponent.prototype.ngOnInit = function () {
        this.userService.checkAdmin();
        this.orders = this.orderService.getOrder();
        this.archOrds = this.orderService.getArchOrd();
    };
    OrdersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-order',
            templateUrl: '../../../templetes/views/orders_in_admin.html',
            styleUrls: ['../../../style/layout/orders_admin.css']
        }), 
        __metadata('design:paramtypes', [orders_service_1.OrdersService, router_1.Router, user_service_1.UserService])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map