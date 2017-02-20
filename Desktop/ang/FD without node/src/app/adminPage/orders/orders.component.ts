import { Component, OnInit, ViewChild, Input  } from '@angular/core';
import { OrdersService } from './orders.service';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'my-order',
    templateUrl: '../../../templetes/views/orders_in_admin.html',
    styleUrls: ['../../../style/layout/orders_admin.css']
})

export class OrdersComponent implements OnInit{

    private orders: any;
    private archOrds: any;


    constructor(private orderService: OrdersService, private router: Router, private userService: UserService) {


    }


    // openModel(user:any){
    //     newUser = user;
    //
    // }

    toOrd(order: any){
        this.orderService.toOrder(order);
    }

    archOrd(x:any){
        this.orderService.archOrder(x);
        // console.log(this.orders[x]);
    }

    delete(x:any){
        this.orderService.deleteOrdArch(x);
    }


    ngOnInit() {
        this.userService.checkAdmin();
        this.orders = this.orderService.getOrder();
        this.archOrds = this.orderService.getArchOrd();
    }

}