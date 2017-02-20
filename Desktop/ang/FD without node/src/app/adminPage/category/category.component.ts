import { Component } from '@angular/core';
import { Category ,categories } from './categoryes';


@Component({
    moduleId: module.id,
    selector: 'category',
    templateUrl: '../../../templetes/views/category.html',
    styleUrls: ['../../../style/layout/category.css']
})

export class CategoryComponent {
    private category: Category []= categories;


}