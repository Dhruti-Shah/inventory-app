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
var core_1 = require('@angular/core');
var product_1 = require('./src/models/product');
var products_list_component_1 = require('./src/components/products-list.component');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
/**
 * @InventoryApp: the top-level component for our application
 */
var InventoryApp = (function () {
    function InventoryApp() {
        this.products = [
            new product_1.Product('MYSHOES', 'Black Running Shoes', '/resources/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
            new product_1.Product('NEATOJACKET', 'Blue Jacket', '/resources/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
            new product_1.Product('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
        ];
    }
    InventoryApp.prototype.productWasSelected = function (product) {
        console.log('Product clicked: ', product);
    };
    InventoryApp = __decorate([
        core_1.Component({
            selector: 'inventory-app',
            directives: [products_list_component_1.ProductsList],
            template: "\n  <div class=\"inventory-app\">\n    <products-list \n      [productList]=\"products\" \n      (onProductSelected)=\"productWasSelected($event)\">\n    </products-list>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], InventoryApp);
    return InventoryApp;
}());
platform_browser_dynamic_1.bootstrap(InventoryApp);
//# sourceMappingURL=app.js.map