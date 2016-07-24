import { Component, EventEmitter } from '@angular/core';
import { Product } from './src/models/product';
import { ProductImage } from './src/components/product-image.component';
import { ProductDepartment } from './src/components/product-department.component';
import { PriceDisplay } from './src/components/price-display.component';
import { ProductRow } from './src/components/product-row.component';
import { ProductsList } from './src/components/products-list.component';

import {bootstrap} from '@angular/platform-browser-dynamic';

/**
 * @InventoryApp: the top-level component for our application
 */
@Component({
  selector: 'inventory-app',
  directives: [ProductsList],
  template: `
  <div class="inventory-app">
    <products-list 
      [productList]="products" 
      (onProductSelected)="productWasSelected($event)">
    </products-list>
  </div>
  `
})
class InventoryApp {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES', 'Black Running Shoes',
        '/inventory-app/resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET', 'Blue Jacket',
        '/inventory-app/resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT', 'A Nice Black Hat',
        '/inventory-app/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
      ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}

bootstrap(InventoryApp);
