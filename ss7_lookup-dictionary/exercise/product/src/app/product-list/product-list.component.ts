import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: Product[] = [];
  deleteProducts: Product;

  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll() : void {
    this.product = this.productService.getAll();
  }

  deleteProduct(item: Product) : any {
    this.deleteProducts = item;
  }

  remove() : void {
    this.productService.deleteProduct(this.deleteProducts.id)
    console.log(this.deleteProducts)
  }
}
