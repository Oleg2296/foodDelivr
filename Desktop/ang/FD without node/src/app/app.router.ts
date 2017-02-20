
//modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

//Components
import { LoginAdminComponent } from './loginAdmin/loginAdmin.component';
import { AdminPageComponent } from './adminPage/adminPage.component';
import { AddUserService } from './adminPage/addUsers/addUser.service'
import { OrdersComponent } from './adminPage/orders/orders.component';
//Services
import { AdminPageService } from './adminPage/adminPage.service';
import { LoginAdminService } from './loginAdmin/loginAdmin.service';
import { AddUserComponent } from './adminPage/addUsers/addUsr.component';
import { CategoryComponent } from './adminPage/category/category.component';
import { ProductComponent } from './adminPage/products/product.component';
import { SubcategoryComponent } from './adminPage/category/subCategory/subcategory.component';


// import { Modal } from './adminPage/modal/modal'





const childRout: Routes =  [
  { path: "orders", component: OrdersComponent},
  { path: "addUsr", component: AddUserComponent},
  { path: "category", component: CategoryComponent},
  { path: "products", component: ProductComponent },
  { path: "subcategory", component: SubcategoryComponent }


  ];

const routes: Routes = [
    {
        path: '',
        redirectTo: 'loginAdmin',
        pathMatch: 'full'
    },
    { path: 'loginAdmin', component: LoginAdminComponent },
    { path: 'adminPage', component: AdminPageComponent,
        children: childRout
    }
];

const Router: ModuleWithProviders = RouterModule.forRoot(routes);


@NgModule({
    imports: [Router],
    providers: [ AdminPageService, LoginAdminService, AddUserService],
    exports: [RouterModule]

})

export class AppRoutingModule {}


// { path: 'adminPage',
//     component: AdminPageComponent,
//     children: [
//     {
//         path: 'orders',
//         component: OrdersComponent
//     }
// ]
// }
