export class Category {
    private id: number;
    private name: string;
    constructor(id :number, name: string){
        this.id=id;
        this.name=name;
    }
}

export let categories: Category[] = [
    new Category(1,'sup'),
    new Category(2,'pershe'),
    new Category(3,'pizza'),
    new Category(4,'burgers'),
    new Category(5,'voda'),
    new Category(6,'alckho')
]