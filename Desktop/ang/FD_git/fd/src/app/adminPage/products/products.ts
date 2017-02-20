import { categories, Category } from '../category/categoryes';



export class Product {
    public categoris: Category[] = categories;
    private id: number;
    private category: string;
    private name: string;
    private price: number;
    constructor(id: number, category: string, name: string, price: number){
        this.id = id;
        this.category = category;
        this.name = name;
        this.price = price;
    }
}

export let products: Product[] = [
    new Product(1,'Kanapky','gamburhger',26),
    new Product(1,'Kanampe','gamburhger',26),
    new Product(1,'Kanampe','gamburhger',26),
    new Product(1,'zupa','pomidorchik',26),
    new Product(1,'porche','kayene',26),
    new Product(1,'garnir','freee',26),
    new Product(1,'garnir','ris',26),
    new Product(1,'Myaso','steik',26)
]
