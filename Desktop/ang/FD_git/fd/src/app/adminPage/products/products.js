"use strict";
var categoryes_1 = require('../category/categoryes');
var Product = (function () {
    function Product(id, category, name, price) {
        this.categoris = categoryes_1.categories;
        this.id = id;
        this.category = category;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
exports.products = [
    new Product(1, 'Kanapky', 'gamburhger', 26),
    new Product(1, 'Kanampe', 'gamburhger', 26),
    new Product(1, 'Kanampe', 'gamburhger', 26),
    new Product(1, 'zupa', 'pomidorchik', 26),
    new Product(1, 'porche', 'kayene', 26),
    new Product(1, 'garnir', 'freee', 26),
    new Product(1, 'garnir', 'ris', 26),
    new Product(1, 'Myaso', 'steik', 26)
];
//# sourceMappingURL=products.js.map