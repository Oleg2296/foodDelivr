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
//Modules
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_modal_1 = require("ng2-modal");
//Router module
var app_router_1 = require('./app.router');
//Components
var app_component_1 = require('./app.component');
var loginAdmin_component_1 = require('./loginAdmin/loginAdmin.component');
var adminPage_component_1 = require('./adminPage/adminPage.component');
var orders_component_1 = require('./adminPage/orders/orders.component');
var addUsr_component_1 = require('./adminPage/addUsers/addUsr.component');
var category_component_1 = require('./adminPage/category/category.component');
var product_component_1 = require('./adminPage/products/product.component');
var subcategory_component_1 = require('./adminPage/category/subCategory/subcategory.component');
//Services
var http_service_1 = require('./service/http.service');
var user_service_1 = require('./service/user.service');
var orders_service_1 = require('./adminPage/orders/orders.service');
var auth_service_1 = require('./service/auth.service');
var addUser_service_1 = require('./adminPage/addUsers/addUser.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_router_1.AppRoutingModule, ng2_modal_1.ModalModule],
            declarations: [app_component_1.AppComponent, loginAdmin_component_1.LoginAdminComponent, adminPage_component_1.AdminPageComponent, orders_component_1.OrdersComponent, addUsr_component_1.AddUserComponent, category_component_1.CategoryComponent, product_component_1.ProductComponent, subcategory_component_1.SubcategoryComponent],
            providers: [user_service_1.UserService, http_service_1.HttpClient, orders_service_1.OrdersService, auth_service_1.AuthService, addUser_service_1.AddUserService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map