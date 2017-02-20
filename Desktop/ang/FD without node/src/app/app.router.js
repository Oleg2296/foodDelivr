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
//modules
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//Components
var loginAdmin_component_1 = require('./loginAdmin/loginAdmin.component');
var adminPage_component_1 = require('./adminPage/adminPage.component');
var addUser_service_1 = require('./adminPage/addUsers/addUser.service');
var orders_component_1 = require('./adminPage/orders/orders.component');
//Services
var adminPage_service_1 = require('./adminPage/adminPage.service');
var loginAdmin_service_1 = require('./loginAdmin/loginAdmin.service');
var addUsr_component_1 = require('./adminPage/addUsers/addUsr.component');
var category_component_1 = require('./adminPage/category/category.component');
var product_component_1 = require('./adminPage/products/product.component');
var subcategory_component_1 = require('./adminPage/category/subCategory/subcategory.component');
// import { Modal } from './adminPage/modal/modal'
var childRout = [
    { path: "orders", component: orders_component_1.OrdersComponent },
    { path: "addUsr", component: addUsr_component_1.AddUserComponent },
    { path: "category", component: category_component_1.CategoryComponent },
    { path: "products", component: product_component_1.ProductComponent },
    { path: "subcategory", component: subcategory_component_1.SubcategoryComponent }
];
var routes = [
    {
        path: '',
        redirectTo: 'loginAdmin',
        pathMatch: 'full'
    },
    { path: 'loginAdmin', component: loginAdmin_component_1.LoginAdminComponent },
    { path: 'adminPage', component: adminPage_component_1.AdminPageComponent,
        children: childRout
    }
];
var Router = router_1.RouterModule.forRoot(routes);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [Router],
            providers: [adminPage_service_1.AdminPageService, loginAdmin_service_1.LoginAdminService, addUser_service_1.AddUserService],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
// { path: 'adminPage',
//     component: AdminPageComponent,
//     children: [
//     {
//         path: 'orders',
//         component: OrdersComponent
//     }
// ]
// }
//# sourceMappingURL=app.router.js.map