import { Component, OnInit } from '@angular/core';
import { products, Product } from './products';

@Component({
    moduleId: module.id,
    selector: 'prodct',
    templateUrl: '../../../templetes/views/products.html',
    styleUrls: ['../../../style/layout/products.css']
})

export class ProductComponent {
    public products: Product[] = products;


}

