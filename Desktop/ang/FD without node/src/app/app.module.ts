//Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from "ng2-modal";

//Router module
import { AppRoutingModule } from './app.router';

//Components
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './loginAdmin/loginAdmin.component';
import { AdminPageComponent } from './adminPage/adminPage.component';
import { OrdersComponent } from './adminPage/orders/orders.component';
import { AddUserComponent } from './adminPage/addUsers/addUsr.component';
import { CategoryComponent } from './adminPage/category/category.component';
import { ProductComponent } from './adminPage/products/product.component';
import { SubcategoryComponent } from './adminPage/category/subCategory/subcategory.component';


//Services
import { HttpClient } from './service/http.service';
import { UserService } from './service/user.service';
import { OrdersService } from './adminPage/orders/orders.service';
import { AuthService } from './service/auth.service';
import { AddUserService } from './adminPage/addUsers/addUser.service'


@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, AppRoutingModule, ModalModule],
    declarations: [ AppComponent, LoginAdminComponent, AdminPageComponent, OrdersComponent, AddUserComponent, CategoryComponent,ProductComponent,SubcategoryComponent],
    providers: [ UserService, HttpClient, OrdersService, AuthService, AddUserService],
    bootstrap: [ AppComponent ]
})

export class AppModule { }