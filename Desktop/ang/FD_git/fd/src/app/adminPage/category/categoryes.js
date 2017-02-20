"use strict";
var Category = (function () {
    function Category(id, name) {
        this.id = id;
        this.name = name;
    }
    return Category;
}());
exports.Category = Category;
exports.categories = [
    new Category(1, 'sup'),
    new Category(2, 'pershe'),
    new Category(3, 'pizza'),
    new Category(4, 'burgers'),
    new Category(5, 'voda'),
    new Category(6, 'alckho')
];
//# sourceMappingURL=categoryes.js.map